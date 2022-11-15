import { useDebounce } from "ahooks";
import * as React from "react"
import { useState } from 'react';

const TryDebounce = () => {
    // '' 需要初始值
    // error: This is likely caused by the value changing from undefined to a defined value
    const [value, setValue] = useState<string>('')
    const debouncedValue = useDebounce(value, { wait: 500 });

    return (
        <div>
            <input 
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Typed value"
                style={{ width: 280 }} />
            <p style={{ marginTop: 16 }}>DebouncedValue: {debouncedValue}</p>
        </div>
    )
}

export default TryDebounce