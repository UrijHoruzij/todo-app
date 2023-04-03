import React, { ChangeEventHandler, useState } from 'react';
import styles from './Checkbox.module.css';

interface CheckboxProps {
	status: boolean;
	updateStatus: Function;
}

const Checkbox = ({ updateStatus, status }: CheckboxProps): JSX.Element => {
	const [check, setCheck] = useState<boolean>(status || false);
	const checkboxHandler = () => {
		setCheck((prev) => !prev);
		updateStatus();
	};
	return (
		<label className={styles.wrapper}>
			{check && (
				<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path className={styles.check} d="M1 6L3.91667 9L9 1" />
				</svg>
			)}
			<input className={styles.input} onChange={checkboxHandler} type="checkbox" />
		</label>
	);
};

export default Checkbox;
