import React, { useContext } from 'react';

import { ModalContext } from '../../contexts/ModalContext';
import { TaskContext } from '../../contexts/TaskContext';

import './Footer.css';
const Footer = () => {
    const modalContext = useContext(ModalContext);
    return (
        <footer className="row">
            <div className="col-md-12">
                <button className="fab" onClick={ () => {
                    modalContext.setModalVisibility(true, 'new-task', '');
                 } }>+</button>
            </div>
        </footer>
    );
}

export default Footer;