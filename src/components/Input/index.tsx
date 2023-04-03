import React, { ChangeEventHandler } from 'react';
import styles from './Input.module.css';

interface InputProps {
	value: string;
	onChange: ChangeEventHandler;
}

const Input = ({ value, onChange }: InputProps): JSX.Element => {
	return <input className={styles.wrapper} value={value} onChange={onChange} type="text" />;
};

export default Input;
