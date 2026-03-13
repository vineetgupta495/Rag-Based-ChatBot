import styles from './Modal.module.css';
import React from "react";

export default function Modal({ isOpen, onClose, children }:
{ isOpen: boolean, onClose: () => void, children: React.ReactNode }) {
    if (!isOpen) return null;
    return (

        <div className={styles.overlay}>
            <div className={styles.modal}>
                <button className={styles.closeBtn} onClick={onClose}>×</button>
                {children}
            </div>
        </div>
    );
}