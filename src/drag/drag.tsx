import { useState } from 'react';
import * as React from 'react';
import { useDrag } from 'ahooks';

const TryDrag = () => {
    const [dragging, setDragging] = useState<string | null>(null);

    return (
        <div>
            <div style={{ display: 'flex', marginTop: 8 }}>
                {Array.from(Array(5)).map((e: any, i: any) => (
                    <div
                        style={{
                            border: '1px solid #e8e8e8',
                            padding: 16,
                            width: 80,
                            textAlign: 'center',
                            marginRight: 16,
                        }}
                    >
                        box{i}
                    </div>
                ))}
            </div>
            <div style={{ marginTop: 8 }}>{dragging ? <>dragging {dragging}</> : 'not dragging'}</div>
        </div>
    );
};

export default TryDrag