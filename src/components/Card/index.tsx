import React from 'react';
import styles from './Card.module.css';

interface CardProps {
	children: JSX.Element[] | string;
}
const Card = ({ children }: CardProps): JSX.Element => {
	return <div className={styles.wrapper}>{children}</div>;
};

export default Card;
