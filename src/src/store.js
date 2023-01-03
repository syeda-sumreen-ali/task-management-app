import {conigureStore} from "@reduxjs/toolkit"

const reducer = {
    // todos: todoSlice
}

const store = conigureStore({
    reducer:reducer,
    devTools:true
})

export default store