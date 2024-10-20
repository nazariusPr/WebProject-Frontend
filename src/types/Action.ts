export type ImageDto = {
  id: string;
  url: string;
  text: string;
};

export enum ActionType {
  ANALYZED,
  GENERATED,
}

export enum ActionStatus {
  INPROGRESS,
  CANCELLED,
  FINISHED,
}

export type ActionDto = {
  id: string;
  action_type: ActionType;
  action_status: ActionStatus;
  created_at: Date;
  images: ImageDto[];
};

export enum ImageSize {
  SMALL_IMAGE_SIZE = "256x256",
  MEDIUM_IMAGE_SIZE = "512x512",
  LARGE_IMAGE_SIZE = "1024x1024",
}

export type GenerateActionDto = {
  title: string;
  prompt: string;
  size: ImageSize;
  num_images: number;
};
