export enum HttpStatusCode {
  Ok = 200,
  BadRequest = 400,
  GenericServerError = 500,
}

export type AskJarvisRequest = {
  question: string;
};

export type AskJarvisResponse = {
  message: string;
};
