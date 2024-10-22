export type ImageDto = {
  id: string;
  url: string;
  text: string;
};

export enum ActionType {
  ANALYZED = "ANALYZED",
  GENERATED = "FINISHED",
}

export enum ActionStatus {
  INPROGRESS = "INPROGRESS",
  CANCELLED = "CANCELLED",
  FINISHED = "FINISHED",
}

export type GenerateActionDto = {
  title: string;
  prompt: string;
  size: ImageSize;
  num_images: number;
};

export type ActionDto = {
  id: string;
  title: string;
  action_type: ActionType;
  action_status: ActionStatus;
  created_at: Date;
};

export type DetailActionDto = {
  images: ImageDto[];
  action_request: GenerateActionDto;
} & ActionDto;

export type ActionFilterDto = {
  prompt: string;
  actionType: ActionType | string;
  actionStatus: ActionStatus | string;
  begin: string;
  end: string;
};

export enum ImageSize {
  SMALL_IMAGE_SIZE = "256x256",
  MEDIUM_IMAGE_SIZE = "512x512",
  LARGE_IMAGE_SIZE = "1024x1024",
}
