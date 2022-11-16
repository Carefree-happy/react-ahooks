import { useRequest } from 'ahooks';
import { message } from 'antd';
import * as React from 'react';
import { useState } from 'react';

function changeUsername(username: string): Promise<{ success: boolean }> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ success: true });
        }, 1000);
    });
}

const ManualTrigger = () => {
    const [state, setState] = useState('');

    const { loading, run } = useRequest(changeUsername, {
        manual: true,
        onSuccess: (result, params) => {
            if (result.success) {
                setState('');
                message.success(`The username was changed to "${params[0]}" !`);
            }
        },
    });

    return (
        <div>
            <input
                onChange={(e) => setState(e.target.value)}
                value={state}
                placeholder="Please enter username"
                style={{ width: 240, marginRight: 16 }}
            />
            <button disabled={loading} type="button" onClick={() => run(state)}>
                {loading ? 'Loading' : 'Edit'}
            </button>
        </div>
    );
};

export default ManualTrigger