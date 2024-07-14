import { MinusCircleOutlined, PlusCircleOutlined } from '@ant-design/icons';
import { useDynamicList } from 'ahooks';
import { Input } from 'antd';
import React from 'react';
import 'antd/dist/antd.css';

const DynamicList = () => {
    const { list, remove, getKey, insert, replace } = useDynamicList(['David', 'Jack']);

    const Row = (index: number, item: any) => (
        <div key={getKey(index)} style={{ marginBottom: 16 }}>
            <Input
                style={{ width: 300 }}
                placeholder="Please enter name"
                onChange={(e) => replace(index, e.target.value)}
                value={item}
            />

            {list.length > 1 && (
                <MinusCircleOutlined
                    style={{ marginLeft: 8 }}
                    onClick={() => {
                        remove(index);
                    }}
                />
            )}
            <PlusCircleOutlined
                style={{ marginLeft: 8 }}
                onClick={() => {
                    insert(index + 1, '');
                }}
            />
        </div>
    );

    return (
        <>
            {list.map((ele, index) => Row(index, ele))}

            <div>{JSON.stringify([list])}</div>
        </>
    );
};

export default DynamicList