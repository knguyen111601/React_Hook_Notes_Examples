import { useEffect, useRef, useState } from "react"

const UseRefTutorial = () => {

    const [todos, setTodos] = useState([])


    const inputRef = useRef(null)

    const onClick = () => {
        if (inputRef.current.value === "") {
            inputRef.current.focus()
        } else {
            setTodos([...todos, inputRef.current.value])
            inputRef.current.value = ""
        }
    }

    const renderTodos = () => {
        return todos.map((todo, index)=>{
            return <li key={index}>{todo}</li>
        })
    }

    return <>
        <div style={{borderBottom:"2px dotted black"}}>
            <h1 style={{textAlign:"center", fontSize:"3em"}}>useEffect Example</h1>
            <h3 style={{textAlign:"center"}}>useRef(initialValue)</h3>
            <p>Here, we are using useRef to set our focus to the input box as well as resetting the input value upon adding an item to the todo list</p>
            <p>We create a variable = useRef(null)</p>
            <p>Then, we add a "ref" attribute to the input equal to that variable</p>
            <p>Our button has an onClick function that does a few things.</p>
            <p>There is a conditional statement checking for whether or not the input is empty</p>
            <p>If it is, the focus is set to the input, if not, we add the value to the list and empty out the input</p>
            <p>useRef allows you to add a reference to DOM elements and access their attributes like current value</p>
        </div>

        <div>
            <div style={{width:"max-content", margin: "auto"}}>
                <h1 style={{textAlign:"center"}}>Todo</h1>
                <input type="text" placeholder="Ex..." ref={inputRef}/>
                <button onClick={onClick}>Add Todo</button>
                <ul>
                    {renderTodos()}
                </ul>
            </div>
        </div>
    </>
}

export default UseRefTutorial