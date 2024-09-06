import { defineField, defineType } from "sanity"
import { ImagesIcon } from "@sanity/icons"

export default defineType({
  name: 'gallery',
  type: 'document',
  title: 'Gallery',
  icon: ImagesIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title'
    }),
    defineField({
      name: 'images',
      type: 'array',
      title: 'Images',
      of: [
        defineField({
          name: 'imageItem',
          type: 'object',
          title: 'Image Item',
          fields: [
            {
              name: 'image',
              type: 'image',
              title: 'Image',
              options: {
                hotspot: true
              }
            },
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative text'
            }
          ]
        })
      ]
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Description'
    })
  ]
})