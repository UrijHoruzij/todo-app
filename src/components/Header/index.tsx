import React from 'react';
import styles from './Header.module.css';

interface HeaderProps {
	children: JSX.Element | JSX.Element[] | string;
}

const Header = ({ children }: HeaderProps): JSX.Element => {
	return <div className={styles.wrapper}>{children}</div>;
};

export default Header;
