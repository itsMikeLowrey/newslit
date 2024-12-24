import {defineField, defineType} from 'sanity'

export const postType = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'question',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'answer',
      type: 'boolean',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      type: 'number',
      initialValue: () => new Date().getTime(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      type: 'image',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'article',
      type: 'url',
      validation: (rule) => rule.required(),
    }),
  ],
})