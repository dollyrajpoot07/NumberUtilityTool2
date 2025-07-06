'use client';

import React, { useState } from 'react';
import styles from './numberTool.module.css'

export default function NumberTool() {
    const [input, setInput] = useState('');
    const [operation, setOperation] = useState('');
    const [param1, setParam1] = useState('');
    const [param2, setParam2] = useState('');
    const [output, setOutput] = useState('');

    const handleRun = () => {
        let result;

        try {
            switch (operation) {
                case 'isInteger':
                    result = Number.isInteger(Number(input)).toString();
                    break;
                case 'isSafeInteger':
                    result = Number.isSafeInteger(Number(input)).toString();
                    break;
                case 'trunc':
                    result = Math.trunc(Number(input));
                    break;
                case 'sign':
                    result = Math.sign(Number(input));
                    break;
                case 'parseIntRadix':
                    result = parseInt(input, Number(param1));
                    break;
                case 'min':
                    result = Math.min(...input.split(',').map(Number));
                    break;
                case 'max':
                    result = Math.max(...input.split(',').map(Number));
                    break;
                case 'clamp':
                    const val = Number(input);
                    const min = Number(param1);
                    const max = Number(param2);
                    result = Math.min(Math.max(val, min), max);
                    break;
                default:
                    result = 'Invalid operation';
            }
        } catch (e) {
            result = `Error: ${e.message}`;
        }

        setOutput(result);
    };

    const showParams = () => {
        switch (operation) {
            case 'parseIntRadix':
                return (
                    <input
                        className={styles.param}
                        type="number"
                        placeholder="Radix (e.g. 2, 16, 8 or 10)"
                        value={param1}
                        onChange={(e) => setParam1(e.target.value)}
                    />
                );
            case 'clamp':
                return (
                    <>
                        <input
                            className={styles.param}
                            type="number"
                            placeholder="Min"
                            value={param1}
                            onChange={(e) => setParam1(e.target.value)}
                        />
                        <input
                            className={styles.param}
                            type="number"
                            placeholder="Max"
                            value={param2}
                            onChange={(e) => setParam2(e.target.value)}
                        />
                    </>
                );
            default:
                return null;
        }
    };
    return (
        <div className={styles.container}>
            <h2>🧮 Number Utilities – Part 2</h2>
            <input
                className={styles.input}
                type="text"
                placeholder="Enter number(s) or string"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <div className={styles.controls}>
                <select value={operation} onChange={(e) => setOperation(e.target.value)}>
                    <option value="">-- Select Operation --</option>
                    <option value="isInteger">Number.isInteger()</option>
                    <option value="isSafeInteger">Number.isSafeInteger()</option>
                    <option value="trunc">Math.trunc()</option>
                    <option value="sign">Math.sign()</option>
                    <option value="parseIntRadix">parseInt with Radix</option>
                    <option value="min">Math.min(...args)</option>
                    <option value="max">Math.max(...args)</option>
                    <option value="clamp">Clamp Between Min–Max</option>
                </select>

                {showParams()}
            </div>

            <button className={styles.btn} onClick={handleRun}>Run</button>

            <div className={styles.output}><strong>Output:</strong> {output}</div>
        </div>
    )
}