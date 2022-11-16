import { useRequest } from "ahooks"
import Mock from 'mockjs'
import * as React from "react";

function getUserName() {
    console.log('polling getUsername');
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(Mock.mock('@name'));
        }, 1000);
    });
}

const Polling = () => {
    const { data, loading, run, cancel } = useRequest(getUserName, {
        pollingInterval: 1000,
        pollingWhenHidden: false
    })

    return (
        <>
            <p>Username: <>{loading ? 'Loading' : data}</></p>
            <button type="button" onClick={run}>
                start
            </button>
            <button type="button" onClick={cancel} style={{ marginLeft: 16 }}>
                stop
            </button>
        </>
    )
}

export default Polling