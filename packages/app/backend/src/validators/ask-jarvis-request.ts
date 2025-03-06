import { AskJarvisRequest } from "@portfolio/common/src/shared-endpoints";

export function isValidAskJarvisRequest(
  body: unknown
): body is AskJarvisRequest {
  return (
    typeof body === "object" &&
    body != null &&
    "question" in body &&
    typeof body.question === "string"
  );
}
