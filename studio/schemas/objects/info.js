import { IoChatboxEllipsesOutline } from 'react-icons/io5';

export default {
    name: 'info',
    title: 'Info card',
    type: 'object',
    icon: IoChatboxEllipsesOutline,
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'content',
        title: 'Content',
        type: 'blockContentSimple',
      },
      {
        name: 'color',
        title: 'Background Color',
        type: 'color',
      }
    ],
  
    preview: {
      select: {
        title: 'title',
      }
    },
  }
  