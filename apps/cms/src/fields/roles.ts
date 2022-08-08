import type { SelectField } from 'payload/dist/fields/config/types';

export const getRolesField = (): SelectField => ({
    name: 'roles',
    type: 'select',
    label: 'Roles',
    saveToJWT: true,
    options: [
        {
            label: 'Admin',
            value: 'admin',
        },
    ],
});
