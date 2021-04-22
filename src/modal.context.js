import { createContext, useContext, useState } from 'react';

//Criando context
const ModalContext = createContext({});

//Provendo o estado global do item com provider
const ModalProvider = ({children}) =>{
    const [modalState, setState] = useState({visible: false});

    const openModal = (payload) => setState({...payload, visible: true});

    const closeModal = () => setState({visible: false});

    return <ModalContext.Provider value={{modalState, openModal, closeModal}}>
        {children}
    </ModalContext.Provider>
}

//Criando nosso próprio hook, para gerenciar o estado de Modal
const useModalContext = () => {
    const context = useContext(ModalContext);

    return context
}

export { ModalProvider, useModalContext } 