
export const ACTION_TYPES = {
    CLEAR_CART: 'clear whole cart',
    REMOVE_ITEM: 'remove specific item',
    INCREASE_ITEM_COUNT: 'increase count of an item',
    DECREASE_ITEM_COUNT: 'decrease count of an item',
    GET_TOTAL_ITEMS: 'get a count of total items',
    LOADING: 'data is getting pulled from API',
    DISPLAY_ITEMS: 'data from API is ready to be displayed',
}

const reducer = (state, action) => {

    if (action.type === ACTION_TYPES.CLEAR_CART) {
        return {
            ...state,
            cart: [],
        }
    } else if (action.type === ACTION_TYPES.REMOVE_ITEM) {
        const updatedCart = state.cart.filter(item =>
            item.id !== action.payload
        )

        return {
            ...state,
            cart: updatedCart,
        }
    } else if (action.type === ACTION_TYPES.INCREASE_ITEM_COUNT) {
        const updatedCart = _updateCart(state, action.payload)

        return {
            ...state,
            cart: updatedCart,
        }
    } else if (action.type === ACTION_TYPES.DECREASE_ITEM_COUNT) {
        const updatedCart = _updateCart(state, action.payload, false)
            .filter(cartItem => cartItem.numItems !== 0)

        return {
            ...state,
            cart: updatedCart,
        }
    } else if (action.type === ACTION_TYPES.GET_TOTAL_ITEMS) {
        let { totalAmount, numItems } = state.cart.reduce((
            cartTotal, cartItem,
        ) => {
            // reduce(function(total, currentValue, currentIndex, arr), initialValue)
            const { price, numItems } = cartItem
            const itemTotal = price * numItems

            cartTotal.totalAmount += itemTotal
            cartTotal.numItems += numItems

            return cartTotal
        }, { // initial value
            totalAmount: 0,
            numItems: 0,
        })

        totalAmount = parseFloat(totalAmount.toFixed(2))

        return {
            ...state,
            totalAmount, // totalAmount: totalAmount,
            numItems, // numItems: numItems,
        }
    } else if (action.type === ACTION_TYPES.LOADING) {
        return {
            ...state,
            loading: true,
        }
    } else if (action.type === ACTION_TYPES.DISPLAY_ITEMS) {
        return {
            ...state,
            cart: action.payload,
            loading: false,
        }
    }

    return state
}

const _updateCart = (state, id, isIncrement = true) => {
    return state.cart.map(cartItem => {
        if (cartItem.id === id) {
            return {
                ...cartItem,
                numItems: isIncrement ?
                    cartItem.numItems + 1 :
                    cartItem.numItems - 1,
            }
        }

        return cartItem
    })
}

export default reducer
