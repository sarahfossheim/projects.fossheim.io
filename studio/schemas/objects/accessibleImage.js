import { IoImage } from 'react-icons/io5';

export default {
    name: 'accessibleImage',
    title: 'Image',
    type: 'object',
    icon: IoImage,
    fields: [
      {
        name: 'image',
        title: 'Image',
        type: 'image',
      },
      {
        name: 'alt',
        title: 'Alt',
        type: 'string',
        validation: Rule => Rule.required(),
      },
    ],
  
    preview: {
      select: {
        title: 'alt',
      }
    },
  }
  