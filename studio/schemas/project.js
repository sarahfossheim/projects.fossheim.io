export default {
  name: 'project',
  title: 'Projects',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'employer',
      title: 'Employer',
      type: 'reference',
      to: [{type: 'employer'}],
    },
    {
      name: 'technologies',
      title: 'Technologies Used',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags'
      }
    },
    {
      name: 'links',
      title: 'Links',
      type: 'object',
      fields: [
        {
          name: 'project',
          title: 'Project URL',
          type: 'url',
        },
        {
          name: 'github',
          title: 'GitHub URL',
          type: 'url',
        }
      ],
    },
    {
      name: 'contributions',
      title: 'Contributions',
      type: 'array', 
      of: [{type: 'string'}],
    },
    {
      name: 'description',
      title: 'Description',
      type: 'blockContent',
    },
  ],

  preview: {
    select: {
      title: 'title',
    }
  },
}
