import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "projects",
        path: "content/projects",
        fields: [
          {
            name: "projects",
            type: "object",
            list: true,
            templates: [
              {
                name: "project",
                ui: {
                  itemProps: (item) => {
                    return { label: item?.title };
                  },
                },
                fields: [
                  {
                    name: "key",
                    type: "string",
                  },
                  {
                    name: "title",
                    type: "string",
                  },
                  {
                    name: "url",
                    type: "string",
                  },
                  {
                    name: "description",
                    type: "rich-text",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "about",
        path: "content/about",
        fields: [
          {
            name: "name",
            type: "string",
          },
          {
            name: "description",
            type: "rich-text",
          },
          {
            name: "links",
            type: "object",
            list: true,
            templates: [
              {
                name: "link",
                ui: {
                  itemProps: (item) => {
                    return { label: item?.name };
                  },
                },
                fields: [
                  {
                    name: "name",
                    type: "string",
                    options: [
                      "github",
                      "linkedin",
                      "youtube",
                      "instagram",
                      "facebook",
                      "x",
                    ],
                  },
                  {
                    name: "url",
                    type: "string",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
});
