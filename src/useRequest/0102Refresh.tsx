import { useRequest } from 'ahooks';
import Mock from 'mockjs';
import * as React from 'react';
import { useEffect } from 'react';

function getUsername(id: number): Promise<string> {
    console.log('use-request-refresh-id', id);
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(Mock.mock('@name'));
        }, 1000);
    });
}

const Refresh = () => {
    const { data, loading, run, refresh } = useRequest((id: number) => getUsername(id), {
        manual: true,
    });

    useEffect(() => {
        run(1);
    }, []);

    if (loading) {
        return <div>loading...</div>;
    }
    return (
        <div>
            <p>Username: {data}</p>
            <button onClick={refresh} type="button">
                Refresh
            </button>
        </div>
    );
};

export default Refresh