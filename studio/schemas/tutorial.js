export default {
    name: 'tutorial',
    title: 'Tutorials',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'url',
        title: 'URL',
        type: 'url',
      },
      {
        name: 'technologies',
        title: 'Technologies',
        type: 'array',
        of: [{type: 'string'}],
        options: {
          layout: 'tags'
        }
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
  