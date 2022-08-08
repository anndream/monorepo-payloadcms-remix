import { LoaderFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

export const loader: LoaderFunction = async ({ context }) => {
    const { payload } = context;

    const users = await payload.find({
        collection: 'users',
    });
    console.log(users);

    return users.docs;
};

export default function Index() {
    const users = useLoaderData();
    return (
        <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.4' }}>
            <h1>Welcome to Remix</h1>
            <h2>First page of PayloadCMS users:</h2>
            <ul>
                {users.map((user) => (
                    <li>
                        <span>
                            {user.name} ({user.email})
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
