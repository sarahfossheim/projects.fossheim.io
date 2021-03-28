import { IoCodeSlash } from 'react-icons/io5';

export default {
  name: 'codeBlock',
  title: 'Code Block',
  type: 'object',
  icon: IoCodeSlash,
  fields: [
    {
      name: 'position',
      title: 'Positioning',
      type: 'string',
      options: {
        list: [
          {title: 'Code on the left // Notes on the right', value: 'code-left'},
          {title: 'Code on the right // Notes on the left', value: 'code-right'},
        ],
      }
    },
    {
      name: 'file',
      title: 'File name or path',
      type: 'string',
    },
    {
      name: 'code',
      title: 'Code',
      type: 'code',
    },
    {
      name: 'notes',
      title: 'Notes',
      type: 'blockContent',
    }
  ],

  preview: {
    select: {
      title: 'file',
    }
  },
}
  