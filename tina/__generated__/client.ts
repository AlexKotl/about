import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'https://content.tinajs.io/1.4/content/fba77e95-cfef-4f83-9336-8fcf61ff8710/github/main', token: 'b8e9efc4f642020cdb8d873ebb0159d79d8e8b07', queries,  });
export default client;
  