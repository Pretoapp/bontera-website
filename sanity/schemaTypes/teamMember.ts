import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'teamMember',
  title: 'Team Members',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'role',
      title: 'Role',
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
      name: 'department',
      title: 'Department',
      type: 'string',
      options: {
        list: [
          { title: 'Management', value: 'management' },
          { title: 'Engineering', value: 'engineering' },
          { title: 'Project Management', value: 'project-management' },
          { title: 'Administration', value: 'administration' },
        ],
      },
    }),
    defineField({
      name: 'image',
      title: 'Photo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'bio',
      title: 'Bio',
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
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
    defineField({
      name: 'linkedin',
      title: 'LinkedIn URL',
      type: 'url',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'role.de',
      media: 'image',
    },
  },
});