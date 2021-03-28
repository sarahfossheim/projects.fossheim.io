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
      name: 'requirements',
      title: 'Requirements',
      type: 'array', 
      of: [{type: 'string'}],
    },
    {
      name: 'contributions',
      title: 'Contributions',
      type: 'array', 
      of: [{type: 'string'}],
    },
    {
      name: 'description',
      title: 'Description (intro)',
      type: 'blockContent',
    },
    {
      name: 'case',
      title: 'Case Study',
      type: 'blockContent',
    },
  ],

  preview: {
    select: {
      title: 'title',
    }
  },
}
