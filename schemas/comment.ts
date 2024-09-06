import { defineField, defineType } from 'sanity'
import { CommentIcon } from '@sanity/icons'

export default defineType({
  name: 'comment',
  title: 'Comment',
  type: 'document',
  icon: CommentIcon,
  fields: [
    defineField({
      name: 'post',
      title: 'Post',
      type: 'reference',
      to: [{ type: 'post' }],
    }),
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'commentPost',
      title: 'Comment Post',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'email',
    }),
    defineField({
      name: 'createdAt',
      title: 'Created At',
      type: 'datetime',
    }),
    defineField({
      name: 'approved',
      title: 'Approved',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'content',
      subtitle: 'author.name',
      media: 'author.image',
    },
    prepare(selection) {
      const { title, subtitle, media } = selection
      return {
        title: `${title?.substring(0, 50)}...`,
        subtitle,
        media,
      }
    },
  },
})
