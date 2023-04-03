import React from 'react';
import { Divider } from '../';
import styles from './Modal.module.css';

interface ModalProps {
	title: JSX.Element | string;
	isShow: boolean;
	hide: () => void;
	children: JSX.Element | JSX.Element[];
}

const Modal = (props: ModalProps): JSX.Element => {
	const { children, title, hide, isShow } = props;
	return (
		<div className={[styles.wrapper, isShow ? styles.show : ''].join(' ')}>
			<div className={styles.modal}>
				<div className={styles.header}>
					<span className={styles.title}>{title}</span>
					<div className={styles.closeBtn} onClick={hide}>
						<svg width="28" height="26" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M3.81802 3.31802L10.182 9.68198" className={styles.closeIcon} />
							<path d="M3.81802 9.68198L10.182 3.31802" className={styles.closeIcon} />
						</svg>
					</div>
				</div>
				<Divider />
				<div className={styles.content}>{children}</div>
			</div>
		</div>
	);
};

export default Modal;
