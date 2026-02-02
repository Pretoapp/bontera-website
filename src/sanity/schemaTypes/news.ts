import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'news',
  title: 'News',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'object',
      fields: [
        { name: 'de', title: 'German', type: 'string' },
        { name: 'en', title: 'English', type: 'string' },
        { name: 'fr', title: 'French', type: 'string' },
        { name: 'es', title: 'Spanish', type: 'string' },
        { name: 'tr', title: 'Turkish', type: 'string' },
        { name: 'ar', title: 'Arabic', type: 'string' },
      ],
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title.de',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'object',
      fields: [
        { name: 'de', title: 'German', type: 'text', rows: 3 },
        { name: 'en', title: 'English', type: 'text', rows: 3 },
        { name: 'fr', title: 'French', type: 'text', rows: 3 },
        { name: 'es', title: 'Spanish', type: 'text', rows: 3 },
        { name: 'tr', title: 'Turkish', type: 'text', rows: 3 },
        { name: 'ar', title: 'Arabic', type: 'text', rows: 3 },
      ],
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'object',
      fields: [
        { name: 'de', title: 'German', type: 'array', of: [{ type: 'block' }] },
        { name: 'en', title: 'English', type: 'array', of: [{ type: 'block' }] },
        { name: 'fr', title: 'French', type: 'array', of: [{ type: 'block' }] },
        { name: 'es', title: 'Spanish', type: 'array', of: [{ type: 'block' }] },
        { name: 'tr', title: 'Turkish', type: 'array', of: [{ type: 'block' }] },
        { name: 'ar', title: 'Arabic', type: 'array', of: [{ type: 'block' }] },
      ],
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Company News', value: 'company' },
          { title: 'Project Updates', value: 'projects' },
          { title: 'Industry Insights', value: 'industry' },
        ],
      },
    }),
  ],
  preview: {
    select: {
      title: 'title.de',
      media: 'mainImage',
      date: 'publishedAt',
    },
    prepare(selection) {
      const { title, media, date } = selection;
      return {
        title: title || 'Untitled',
        subtitle: date ? new Date(date).toLocaleDateString() : 'No date',
        media,
      };
    },
  },
});