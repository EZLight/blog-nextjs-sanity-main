import {defineField, defineType} from 'sanity'

// Install lucide.dev icons with "npm install lucide-react"
import {TagIcon} from 'lucide-react'

export default defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  icon: TagIcon,
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string'}),
    defineField({name: 'description', title: 'Description', type: 'text'}),
    defineField({
      name: 'parent',
      type: 'reference',
      to: [{type: 'category'}],
      weak: true,
      validation: Rule => Rule.custom((value, context) => {
        if (!value) return true
        return context?.document?._id !== value._ref ? true : 'Cannot reference itself as parent'
      }),
      options: {
        filter: '!defined(parent)',
      },
    }),
  ],
  // Customize the preview so parents are visualized in the studio
  preview: {
    select: {
      title: 'title',
      subtitle: 'parent.title',
    },
    prepare: ({title, subtitle}) => ({
      title,
      subtitle: subtitle ? `– ${subtitle}` : ``,
    }),
  },
})