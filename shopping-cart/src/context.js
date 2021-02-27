import React, { useState, useContext, useReducer, useEffect } from 'react'
import cartItems from './data'
import reducer, { ACTION_TYPES } from './reducer'

const url = 'https://course-api.com/react-useReducer-cart-project'
const AppContext = React.createContext()

const initialState = {
    loading: false,
    cart: cartItems,
    totalAmount: 0,
    numItems: 0,
}

const AppProvider = ({ children }) => {
    const [ state, dispatch ] = useReducer(reducer, initialState)

    const clearCart = () => {
        dispatch({
            type: ACTION_TYPES.CLEAR_CART
        })
    }

    const removeOneItem = (id) => {
        dispatch({
            type: ACTION_TYPES.REMOVE_ITEM,
            payload: id,
        })
    }

    const increaseItems = (id) => {
        dispatch({
            type: ACTION_TYPES.INCREASE_ITEM_COUNT,
            payload: id,
        })
    }

    const decreaseItems = (id) => {
        dispatch({
            type: ACTION_TYPES.DECREASE_ITEM_COUNT,
            payload: id,
        })
    }

    const fetchData = async () => {
        dispatch({
            type: ACTION_TYPES.LOADING
        })

        const response = await fetch(url)
        const cart = await response.json()

        let localizedCart = []
        cart.forEach(cartItem => {
            localizedCart.push({
                id: cartItem.id,
                title: cartItem.title,
                totalAmount: cartItem.price,
                img: cartItem.img,
                numItems: cartItem.amount
            })
        })

        dispatch({
            type: ACTION_TYPES.DISPLAY_ITEMS,
            payload: localizedCart,
        })
    }

    useEffect(() => {
        fetchData()
    }, [])

    useEffect(() => {
        dispatch({
            type: ACTION_TYPES.GET_TOTAL_ITEMS
        })
    }, [ state.cart ])

    return (
        <AppContext.Provider
            value={ {
                ...state,
                clearCart,
                removeOneItem,
                increaseItems,
                decreaseItems,
            } }
        >
            {children }
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }
