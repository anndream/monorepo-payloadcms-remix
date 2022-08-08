import { useEffect, useState } from 'react';

export const useSite = () => {
    const hostname = window.location.hostname;
    const [site, setSite] = useState();

    useEffect(() => {
        if (site) return;

        fetch(`/api/sites?where[domain][equals]=${hostname}`).then((res) => {
            res.json().then((data) => {
                if (!data) return;
                if (data?.error) {
                    console.error(data.error);
                    return;
                }
                const { docs } = data;
                if (docs?.length === 0) return;
                setSite(docs[0]);
            });
        });
    }, [site]);
    return site;
};
