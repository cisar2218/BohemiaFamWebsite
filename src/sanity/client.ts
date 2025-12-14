import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "u3o8zwhd",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});