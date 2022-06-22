import { useReducer } from "react"

const ReducerTutorial = () => {
    const reducer = (state, action) => {
        switch(action.type) {
            case "INCREMENT": 
                return {count: state.count+1, showText: state.showText}
    
            case "toggleShowText":
                return {count: state.count, showText: !state.showText}
    
            default:
                return state
        }
    }

    // state holds the states
    // dispatch passes the type to the reducer function to update certain states
    const [state, dispatch] = useReducer(reducer, {count:0, showText:true})

    return (<div>

        <h1>{state.count}</h1>
        <button onClick={()=>{
            dispatch({type:"INCREMENT"})
            dispatch({type:"toggleShowText"})
        }}>
            Click Here
        </button>

        {/* If showText is true, <p></p> will render*/}
        {state.showText && <p>Text appears</p>}

    </div>)
}

export default ReducerTutorial