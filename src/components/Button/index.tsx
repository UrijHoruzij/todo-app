import React, { MouseEventHandler } from 'react';

import styles from './Button.module.css';

interface ButtonProps {
	children: JSX.Element | string;
	square?: boolean;
	onClick: MouseEventHandler;
}

const Button = (props: ButtonProps): JSX.Element => {
	const { children, square, onClick } = props;
	return (
		<button onClick={onClick} className={[styles.wrapper, square ? styles.square : ''].join(' ')}>
			{children}
		</button>
	);
};

export default Button;
