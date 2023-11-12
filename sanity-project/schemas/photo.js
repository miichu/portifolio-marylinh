// In your schema.js file

export default {
  name: 'photo',
  type: 'object',
  title: 'Photo',
  fields: [
    {
      name: 'image',
      type: 'image',
      title: 'Image',
    },
    {
      name: 'caption',
      type: 'string',
      title: 'Caption',
    },
  ],
}
