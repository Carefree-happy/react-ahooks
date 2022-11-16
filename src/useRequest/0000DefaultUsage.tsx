import { useRequest } from 'ahooks';
import Mock from 'mockjs'; // 有误，但是能用
import * as React from 'react';

function getUsername(): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(Mock.mock('@name'));
        }, 1000);
    });
}

const DefaultUsage = () => {
    const { data, error, loading } = useRequest(getUsername);

    if (error) {
        return <div>failed to load</div>;
    }
    if (loading) {
        return <div>loading...</div>;
    }
    return <div>Username: {data}</div>;
};

export default DefaultUsage