import type { CollectionConfig } from 'payload/types';
import { getSitesRelationField } from '../../fields/relations';

export const Pages: CollectionConfig = {
    slug: 'pages',
    labels: {
        singular: 'Page',
        plural: 'Pages',
    },
    admin: {
        useAsTitle: 'name',
    },
    fields: [
        {
            name: 'name',
            type: 'text',
            label: 'Name',
            required: true,
        },
        {
            ...getSitesRelationField(),
            hasMany: true,
        },
    ],
};
