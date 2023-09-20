import { createClient } from "@sanity/client";

const sanityClient = createClient({
  projectId: "8j5b4aj6",
  dataset: "production",
  useCdn: false,
  apiVersion: "2023-09-20",
});

export default sanityClient;
