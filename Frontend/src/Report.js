import { createContext, useReducer } from "react";

export const Report = createContext();

const initialState = {
    userInfo: localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null
};

function reducer(state, action) {
    switch (action.type) {
        case "USER_SIGNIN":
            return { ...state, userInfo: action.payload };
        
        default:
            return state;
    }
}

export function ReportProvider(props){
    const [state, dispatch] = useReducer(reducer, initialState);
    const value = { state, dispatch };
    return <Report.Provider value={value}>{props.children}</Report.Provider>;
}
