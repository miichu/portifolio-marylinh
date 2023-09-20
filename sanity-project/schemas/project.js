// schemas/project.js
export default {
  name: 'project',
  type: 'document',
  title: 'Prosjekter',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Prosjekt tittel *',
      description: 'F.eks. Lofsrud skole',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'typology',
      type: 'string',
      title: 'Typologi',
      description: 'F.eks. Idrettsanlegg',
    },
    {
      name: 'location',
      type: 'string',
      title: 'Sted',
    },
    {
      name: 'type',
      type: 'object',
      title: 'Type',
      fields: [
        {
          name: 'label',
          type: 'string',
          title: 'Fase eller kurs?',
          options: {
            initialValue: 'phase',
            list: [
              {title: 'Fase', value: 'phase'},
              {title: 'Kurs', value: 'course'},
            ],
          },
          validation: (Rule) => Rule.required(),
        },
        {
          title: 'Beskrivelse',
          type: 'string',
          name: 'description',
          validation: (Rule) => Rule.required(),
        },
      ],
    },
    {
      title: 'Tiltakshaver',
      name: 'stakeholder',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'stakeholder',
          fields: [
            {type: 'string', name: 'name', title: 'Navn *', validation: (Rule) => Rule.required()},
            {type: 'string', name: 'email', title: 'Epostadresse'},
            {type: 'string', name: 'telephone', title: 'Tlfnr'},
            {type: 'string', name: 'description', title: 'Beskrivelse/kommentar'},
          ],
        },
      ],
    },
    {
      title: 'Partnere',
      name: 'partner',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'partner',
          fields: [
            {type: 'string', name: 'name', title: 'Navn *', validation: (Rule) => Rule.required()},
            {type: 'string', name: 'email', title: 'Epostadresse'},
            {type: 'string', name: 'telephone', title: 'Tlfnr'},
            {type: 'string', name: 'description', title: 'Beskrivelse/kommentar'},
          ],
        },
      ],
    },
    {
      title: 'Mentorer',
      name: 'mentor',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'mentor',
          fields: [
            {type: 'string', name: 'name', title: 'Navn *', validation: (Rule) => Rule.required()},
            {type: 'string', name: 'email', title: 'Epostadresse'},
            {type: 'string', name: 'telephone', title: 'Tlfnr'},
            {type: 'string', name: 'description', title: 'Beskrivelse/kommentar'},
          ],
        },
      ],
    },
    {
      title: 'Illustrasjoner laget av',
      name: 'illustrator',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'illustrator',
          fields: [
            {type: 'string', name: 'name', title: 'Navn *', validation: (Rule) => Rule.required()},
            {type: 'string', name: 'email', title: 'Epostadresse'},
            {type: 'string', name: 'telephone', title: 'Tlfnr'},
            {type: 'string', name: 'description', title: 'Beskrivelse/kommentar'},
          ],
        },
      ],
    },
    {
      title: 'Beskrivelse',
      name: 'description',
      type: 'array',
      of: [{type: 'block'}],
    },
  ],
}
