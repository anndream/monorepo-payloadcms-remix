import { buildConfig } from 'payload/config';
import path from 'path';
import { ApiUsers, Pages, Sites, Users } from './collections';

export default buildConfig({
    admin: {
        user: Users.slug,
        webpack: (config) => {
            config.resolve.fallback = {
                ...config.resolve.fallback,
                url: false,
            };
            return config;
        },
    },

    collections: [Users, ApiUsers, Pages, Sites],
    typescript: {
        outputFile: path.resolve(__dirname, 'collections/generated-types.ts'),
    },
    graphQL: {
        schemaOutputFile: path.resolve(
            __dirname,
            'collections/generated-schema.graphql'
        ),
    },
});
