// schemas/user.js
export default {
  name: 'user',
  type: 'document',
  title: 'Brukerinformasjon',
  fields: [
    {
      title: 'Fullt Navn *',
      name: 'name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'E-postadresse',
      name: 'email',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Telefon *',
      name: 'telephone',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Tidligere arbeid',
      name: 'previousWork',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'previousWork',
          fields: [
            {
              type: 'string',
              name: 'title',
              title: 'Arbeidstittel *',
              validation: (Rule) => Rule.required(),
            },
            {type: 'string', name: 'description', title: 'Beskrivelse/kommentar'},
          ],
        },
      ],
    },
    {
      title: 'Utdanning',
      name: 'education',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'education',
          fields: [
            {
              type: 'string',
              name: 'education',
              title: 'Utdanning',
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
    },
    {
      title: 'Om meg',
      name: 'description',
      type: 'array',
      of: [{type: 'block'}],
    },
  ],
}
