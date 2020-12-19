import { createContext } from 'react';

export const ModalContext = createContext({ 
    modalVisible: false,
    modalAction: '',
    task: '',
    setModalVisibility: () => {}
});