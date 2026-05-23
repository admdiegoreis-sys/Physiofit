import { processLeadWebhook } from "./lead-webhook.mjs";

export async function handler(event) {
  return processLeadWebhook(event, "instagram");
}
