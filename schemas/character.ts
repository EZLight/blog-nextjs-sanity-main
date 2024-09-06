import { BookIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'
import category from './category'


/**
 * This file is the schema definition for a post.
 *
 * Here you'll be able to edit the different fields that appear when you 
 * create or edit a post in the studio.
 * 
 * Here you can see the different schema types that are available:

  https://www.sanity.io/docs/schema-types

 */

export default defineType({
  name: 'character',
  title: 'Character',
  icon: BookIcon,
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'series',
      title: 'Series',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
        isUnique: (value, context) => context.defaultIsUnique(value, context),
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'gender',
      title: 'Gender',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'age',
      title: 'Age',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'height',
      title: 'Height',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'faith',
      title: 'Faith',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'sinaffinities',
      title: 'Sin Affinities',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'origins',
      title: 'Origins',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'theme',
      title: 'Theme',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'likes',
      title: 'Likes',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'dislikes',
      title: 'Dislikes',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'avi',
      title: 'avatar',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: category.name }],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'coverImage',
    },
    prepare({ title, media }) {
      const subtitles = [
      ].filter(Boolean)

      return { title, media, subtitle: subtitles.join(' ') }
    },
  },
})
