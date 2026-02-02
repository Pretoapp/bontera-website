import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'project',
  title: 'Projects',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Project Title',
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
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Residential', value: 'residential' },
          { title: 'Commercial', value: 'commercial' },
          { title: 'Infrastructure', value: 'infrastructure' },
          { title: 'Industrial', value: 'industrial' },
        ],
      },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'object',
      fields: [
        { name: 'de', title: 'German', type: 'text' },
        { name: 'en', title: 'English', type: 'text' },
        { name: 'fr', title: 'French', type: 'text' },
        { name: 'es', title: 'Spanish', type: 'text' },
        { name: 'tr', title: 'Turkish', type: 'text' },
        { name: 'ar', title: 'Arabic', type: 'text' },
      ],
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
    }),
    defineField({
      name: 'year',
      title: 'Year',
      type: 'number',
    }),
    defineField({
      name: 'client',
      title: 'Client',
      type: 'string',
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
      name: 'gallery',
      title: 'Gallery',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    }),
    defineField({
      name: 'featured',
      title: 'Featured Project',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'title.de',
      media: 'mainImage',
      category: 'category',
    },
    prepare(selection) {
      const { title, media, category } = selection;
      return {
        title: title || 'Untitled',
        subtitle: category,
        media,
      };
    },
  },
});