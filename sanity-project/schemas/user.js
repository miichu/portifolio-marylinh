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
              name: 'place',
              title: 'Arbeidssted *',
              validation: (Rule) => Rule.required(),
            },
            {
              type: 'string',
              name: 'title',
              title: 'Arbeidstittel/stilling ',
              // validation: (Rule) => Rule.required(),
            },
            {type: 'string', name: 'description', title: 'Beskrivelse/kommentar'},
          ],
          preview: {
            select: {
              title: 'place',
              subtitle: 'title',
            },
          },
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
              name: 'place',
              title: 'Skole / institutt *',
              validation: (Rule) => Rule.required(),
            },
            {
              type: 'string',
              name: 'title',
              title: 'Studielinje/tittel/grad *',
              validation: (Rule) => Rule.required(),
            },
            {type: 'string', name: 'description', title: 'Beskrivelse/kommentar'},
          ],
        },
      ],
      preview: {
        select: {
          title: 'place',
          subtitle: 'title',
        },
      },
    },
    {
      title: 'Om meg',
      name: 'description',
      type: 'array',
      of: [{type: 'block'}],
    },
  ],
}
