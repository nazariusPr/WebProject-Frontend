import { ChangeEvent } from "react";
import { ActionFilterDto } from "../../types/Action";
import Input from "../UI/Input";
import Dropdown from "../UI/DropDown";
import styles from "../../styles/actions.module.css";

type ActionFilterFormProps = {
  filter: ActionFilterDto;
  setFilter: (
    filter: ActionFilterDto | ((prevFilter: ActionFilterDto) => ActionFilterDto)
  ) => void;
};

function ActionFilterForm({ filter, setFilter }: ActionFilterFormProps) {
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFilter((prevFilter: ActionFilterDto) => ({
      ...prevFilter,
      [name]: value,
    }));
  };

  const handleDropdownChange = (name: string, value: string) => {
    setFilter((prevFilter: ActionFilterDto) => ({
      ...prevFilter,
      [name]: value,
    }));
  };

  const actionTypeOptions = [
    { label: "Analyzed", value: "ANALYZED" },
    { label: "Generated", value: "GENERATED" },
  ];

  const actionStatusOptions = [
    { label: "In Progress", value: "INPROGRESS" },
    { label: "Cancelled", value: "CANCELLED" },
    { label: "Finished", value: "FINISHED" },
  ];

  return (
    <div>
      <div className={styles.formRow}>
        <Dropdown
          value={filter.actionType.toString() || ""}
          field={{
            label: "Action Type",
            name: "actionType",
            type: "select",
            validation: () => null,
          }}
          onChange={(value: string) =>
            handleDropdownChange("actionType", value)
          }
          options={actionTypeOptions}
          className={styles.inlineField}
        />

        <Dropdown
          value={filter.actionStatus.toString() || ""}
          field={{
            label: "Action Status",
            name: "actionStatus",
            type: "select",
            validation: () => null,
          }}
          onChange={(value: string) =>
            handleDropdownChange("actionStatus", value)
          }
          options={actionStatusOptions}
          className={styles.inlineField}
        />

        <Input
          value={filter.begin || ""}
          field={{
            label: "Start Date",
            name: "begin",
            type: "date",
            validation: () => null,
          }}
          onChange={handleInputChange}
          className={styles.inlineField}
        />

        <Input
          value={filter.end || ""}
          field={{
            label: "End Date",
            name: "end",
            type: "date",
            validation: () => null,
          }}
          onChange={handleInputChange}
          className={styles.inlineField}
        />
      </div>
      <div className={styles.formRow}>
        <Input
          value={filter.prompt || ""}
          field={{
            label: "Prompt",
            name: "prompt",
            type: "text",
            validation: () => null,
          }}
          onChange={handleInputChange}
          className={styles.fullWidth}
        />
      </div>
    </div>
  );
}

export default ActionFilterForm;
