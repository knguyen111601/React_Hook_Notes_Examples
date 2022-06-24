import { useLayoutEffect, useEffect, useReducer } from "react"

const LayoutTutorial = () => {

    const reducer = (state, action) => {
        switch(action.type) {
            case "inital":
                return {og:"BEFORE RENDER", after: state.after}

            case "after":
                return {og:state.og, after: "AFTER RENDER"}
    
            default:
                return state
        }
    }


    const [state, dispatch] = useReducer(reducer, {og:"", after: ""})


    // useLayoutEffect called in earlier stage of page rendering than useEffect
    // Called BEFORE everything is rendered
    useLayoutEffect(()=>{
        dispatch({type:"inital"})
    }, [])

    // useEffect is called AFTER everything is rendered on the page
    useEffect(()=>{
        dispatch({type:"after"})
    },[])


    return <>
        <div style={{borderBottom:"2px dotted black"}}>
            <h1 style={{textAlign:"center", fontSize:"3em"}}>useLayoutEffect Example</h1>
            <h3 style={{textAlign:"center"}}>useLayoutEffect(callbackFunction, [item to watch])</h3>
            <p>useLayoutEffect works very similarly to useEffect with the only difference being the time of which it is called.</p>
            <p>useLayoutEffect will always be called before the page is rendered while useEffect is called after the page is rendered</p>
            <p>In this example, we have a state with an before render value and after render value</p>
            <p>The useLayoutEffect sets the before value to "BEFORE RENDER" before the DOM is rendered</p>
            <p>useEffect will run after and set the after render value to AFTER RENDER</p>
            <p>This is why you BEFORE RENDER will instantly appear but AFTER RENDER will show up originally blank for an extremely short period</p>
        </div>

        <div>
            <h1>Before render value: {state.og}</h1>
            <h1>After rendered value: {state.after}</h1>
        </div>
    </>
}

export default LayoutTutorial