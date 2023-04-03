import React from 'react';
import styles from './Title.module.css';

interface TitleProps {
	children: string;
}
const Title = ({ children }: TitleProps): JSX.Element => {
	return <div className={styles.wrapper}>{children}</div>;
};

export default Title;
