import { isAdminUser } from '../../access';
import type { CollectionConfig } from 'payload/types';
import { getRolesField } from '../../fields/roles';

const Users: CollectionConfig = {
    slug: 'users',
    labels: {
        singular: 'User',
        plural: 'Users',
    },
    auth: {
        depth: 2,
        useAPIKey: false,
    },
    admin: {
        useAsTitle: 'email',
    },
    access: {
        read: ({ req: { user } }) => isAdminUser(user),
        update: ({ req: { user } }) => isAdminUser(user),
        delete: ({ req: { user } }) => isAdminUser(user),
        admin: ({ req: { user } }) => isAdminUser(user),
    },
    fields: [
        {
            name: 'name',
            label: 'Name',
            type: 'text',
            saveToJWT: true,
            required: true,
        },
        getRolesField(),
    ],
};

export { Users };
