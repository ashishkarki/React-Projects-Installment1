import React, { useState, useContext } from 'react'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
    const [ sidebarOpen, setSidebarOpen ] = useState(false)
    const [ modalOpen, setModalOpen ] = useState(false)

    const openSidebar = () => {
        setSidebarOpen(true)
    }
    const closeSidebar = () => {
        setSidebarOpen(false)
    }

    const openModal = () => {
        setModalOpen(true)
    }
    const closeModal = () => {
        setModalOpen(false)
    }

    return <AppContext.Provider value={ {
        modalOpen, sidebarOpen,
        openSidebar, closeSidebar,
        openModal, closeModal,
    } }>
        { children }
    </AppContext.Provider>
}

// Custom Hook below
export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }