import { RelationshipField } from 'payload/dist/fields/config/types';
import type { Field } from 'payload/types';

export const getSitesRelationField = (): RelationshipField => ({
    name: 'sites',
    type: 'relationship',
    label: 'Site',
    required: true,
    relationTo: 'sites',
});
