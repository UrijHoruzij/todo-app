import React from 'react';
import { Checkbox } from '../';
import styles from './Task.module.css';

interface TaskProps {
	title: string;
	status: boolean;
	updateStatus: Function;
}

const Task = (props: TaskProps): JSX.Element => {
	const { title, status, updateStatus } = props;
	let classNames = [styles.text, status ? styles.checked : ''];
	return (
		<div className={styles.wrapper}>
			<Checkbox status={status} updateStatus={updateStatus} />
			<div className={classNames.join(' ')}>{title}</div>
		</div>
	);
};

export default Task;
