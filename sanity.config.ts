import { defineConfig } from "sanity"
import { deskTool } from "sanity/desk"
import { visionTool } from "@sanity/vision"
import {schemaTypes} from "./schemas"


const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!

export default defineConfig({

  basePath: "/studio",
  name: "Ab_studio_blog",
  title: "Ab Studio Blog",

  projectId,
  dataset,

  plugins: [deskTool(), visionTool()],


  schema: {
    types: schemaTypes,
  },
  
})

