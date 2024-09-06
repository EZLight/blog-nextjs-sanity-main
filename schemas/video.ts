import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'video',
  title: 'Video',
  type: 'object',
  fields: [
    defineField({
      name: 'url',
      title: 'YouTube URL',
      type: 'url',
      validation: (Rule) => Rule.required().uri({
        scheme: ['http', 'https']
      })
    }),
    defineField({
      name: 'caption',
      title: 'Caption',
      type: 'string',
    }),
  ],
})