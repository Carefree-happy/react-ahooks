import { useRequest } from 'ahooks';
import Mock from 'mockjs';
import * as React from 'react';

function getUsername(): Promise<string> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.5) {
                resolve(Mock.mock('@name'));
            } else {
                reject(new Error('Failed to get username'));
            }
        }, 1000);
    });
}

const DefaultRequest = () => {
    const { data, error, loading } = useRequest(getUsername);

    if (error) {
        return <div>{error.message}</div>;
    }
    if (loading) {
        return <div>loading...</div>;
    }
    return <div>Username: {data}</div>;
};

export default DefaultRequest