import { MinusCircleOutlined, PlusCircleOutlined } from '@ant-design/icons';
import { useDynamicList } from 'ahooks';
import { Button, Form, Input } from 'antd';
import React, { useEffect, useState } from 'react';
import 'antd/dist/antd.css';

const DynamicInputs = ({
    value = [],
    onChange,
}: {
    value?: string[];
    onChange?: (value: string[]) => void;
}) => {
    const { list, remove, getKey, insert, replace, resetList } = useDynamicList(value);

    useEffect(() => {
        // If value change manual, reset list
        if (value !== list) {
            resetList(value);
        }
    }, [value]);

    useEffect(() => {
        onChange?.(list);
    }, [list]);

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

    return <>{list.map((ele, index) => Row(index, ele))}</>;
};

const DynamicForm = () => {
    const [form] = Form.useForm();

    const [result, setResult] = useState('');

    return (
        <>
            <Form form={form}>
                <Form.Item name="names" initialValue={['David', 'Jack']}>
                    <DynamicInputs />
                </Form.Item>
            </Form>
            <Button
                type="primary"
                onClick={() =>
                    form
                        .validateFields()
                        .then((val) => {
                            setResult(JSON.stringify(val.names));
                        })
                        .catch(() => { })
                }
            >
                Submit
            </Button>
            <Button style={{ marginLeft: 16 }} onClick={() => form.resetFields()}>
                Reset
            </Button>

            <p>{result}</p>
        </>
    );
};

export default DynamicForm;