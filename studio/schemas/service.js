export default {
  type: 'document',
  name: 'service',
  title: 'Service Page',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'heroImage',
      title: 'Hero image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'heroHeading',
      title: 'Hero heading',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'heroListItems',
      title: 'Hero list items (checkbox items)',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'serviceHeading',
      title: 'Service heading',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'serviceDescription',
      title: 'Service description/summary',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'listSectionHeading',
      title: 'Checkbox list section heading',
      type: 'string',
    },
    {
      name: 'listSectionListItems',
      title: 'Checkbox section list items',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      title: 'Checkbox list section last paragraph',
      name: 'listSectionDescription',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'imageGalleryImages',
      title: 'Image gallery images',
      type: 'array',
      of: [{ type: 'image' }],
    },
  ],
};
