import type { CollectionConfig } from 'payload/types';
import { isAdminUser } from '../../access';

export const Sites: CollectionConfig = {
    slug: 'sites',
    labels: {
        singular: 'Site',
        plural: 'Sites',
    },
    admin: {
        useAsTitle: 'name',
    },
    access: {
        read: () => true,
        update: ({ req: { user } }) => isAdminUser(user),
        delete: ({ req: { user } }) => isAdminUser(user),
        create: ({ req: { user } }) => isAdminUser(user),
    },
    fields: [
        {
            name: 'name',
            type: 'text',
            label: 'Name',
            required: true,
        },
        {
            name: 'domain',
            type: 'text',
            label: 'Domain',
            required: true,
            index: true,
        },
        {
            name: 'pages',
            type: 'relationship',
            relationTo: 'pages',
            label: 'Pages',
            hasMany: true,
        },
    ],
};
