import { useEffect, useState } from "react"
import axios from "axios"

const UseEffectTutorial = () => {

    const [data, setData] = useState(null)
    const [count, setCount] = useState(0)


    const apiCall = () => {
        axios.get("https://jsonplaceholder.typicode.com/comments").then((res)=>{
            const num = Math.floor(Math.random() * 500)
            setData(res.data[num].email)
        })
    }

    useEffect(()=>{
        apiCall()
    }, [])

    return <>
        <div style={{borderBottom:"2px dotted black"}}>
            <h1 style={{textAlign:"center", fontSize:"3em"}}>useEffect Example</h1>
            <h3 style={{textAlign:"center"}}>useEffect(callbackFunction, [itemToWatchForChange])</h3>
            <p>Here, we have a useEffect function that calls from an API each time the page rerenders.</p>
            <p>The way this works is that our useEffect function accepts the parameters of a callback and item to watch for change</p>
            <p>In this example, the callback calls an API call function and has empty hard brackets for items to watch for</p>
            <p>The empty bracket means to watch for the page.</p>
            <p>Notice even as count changes, the API is not called again for another email</p>
            <p>If we were to track the changing count to call the API, it would call on each time the count had updated</p>
        </div>

        <div style={{display:"flex", alignItems:"center", flexDirection:"column"}}>
            <h1 style={{color:"red"}}>Generate Random E-Mail from API on Rerender</h1>
            {data ? <h1>{data}</h1> : <h1>Loading...</h1>}
            <h1>Count: {count}</h1>
            <button onClick={()=>{setCount(count + 1)}}>Increment</button>
        </div>

    </>
}

export default UseEffectTutorial