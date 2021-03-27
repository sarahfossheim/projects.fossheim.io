export default {
  name: 'employer',
  title: 'Employers',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'position',
      title: 'Position',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'employment',
      title: 'Employment',
      type: 'object',
      fields: [
          {
            name: 'start',
            title: 'From',
            type: 'date',
          },
          {
            name: 'end',
            title: 'To',
            type: 'date',
          }
      ]
    },
    {
      name: 'description',
      title: 'Job Description',
      type: 'blockContent',
    },
  ],

  preview: {
    select: {
      title: 'name',
    }
  },
};
