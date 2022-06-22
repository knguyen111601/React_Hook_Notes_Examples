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
        <h1 style={{textAlign:"center", fontSize:"3em"}}>useReducer Example</h1>
        <div style={{borderBottom:"2px dotted black", borderTop:"2px dotted black"}}>
            <h1>States to be managed: "count" "showText"</h1>
            <p>Reducer function contains action types of "INCREMENT" and "toggleShowText"</p>
            <p>Our button dispatches the actions to the reducer function which contains a switch that will do the action dependent on which is passed to it</p>
        </div>

        <div style={{borderBottom:"2px dotted black"}}>
            <h1>Current count state: {state.count}</h1>
            <h1>Current showText state: {state.showText.toString()}</h1>
        </div>

        <div style={{display:"flex", alignItems:"center", flexDirection:"column"}}>
        <h1>{state.count}</h1>
        <button onClick={()=>{
            dispatch({type:"INCREMENT"})
            dispatch({type:"toggleShowText"})
        }}>
            Click Here
        </button>

        {/* If showText is true, <p></p> will render*/}
        {state.showText && <p>Text appears</p>}
        </div>

    </div>)
}

export default ReducerTutorial