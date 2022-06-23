import { useState } from "react"

const StateTutorial = () => {
    const style = {
        margin: "auto",
        width: "80%"
    }

    const [form, setForm] = useState({username: "", email: ""})

    const handleChange = (event) => {
        const newForm = {...form}
        newForm[event.target.name] = event.target.value
        setForm(newForm)
    }

    return <>
    <div style={{borderBottom:"2px dotted black"}}>
        <h1 style={{textAlign:"center", fontSize:"3em"}}>useState Example</h1>
        <h3 style={{textAlign:"center"}}>const [state, setState] = useState(initialState)</h3>
        <p>Here, we have the form with a handleChange function that updates state on each change</p>
        <p>The inital state of this form is an object with keys, username and email that are set to empty string values</p>
        <p>Upon each change, the handleChange function is setting the state to a new state with items in the form</p>
    </div>
    <div style={style}>
            <h1>Current Username State: <span style={{color:"red"}}>{form.username}</span></h1>
            <h1>Current E-Mail State: <span style={{color:"red"}}>{form.email}</span></h1>
        <div style={style}>
        <form style={{display: "flex", justifyContent:"center", justifyContent:"space-between"}}>
            <input 
                type="text" 
                name="username" 
                value={form.username} 
                placeholder="Enter Username" 
                onChange={handleChange}
            />
            <input 
                type="text" 
                name="email" 
                value={form.email} 
                placeholder="Enter E-Mail" 
                onChange={handleChange}
            />
        </form>
        </div>
    </div>
    </>
}

export default StateTutorial