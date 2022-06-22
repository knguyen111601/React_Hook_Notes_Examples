import { useState } from "react"

const StateTutorial = () => {
    const style = {
        margin: "auto",
        width: "80%",
        marginTop:"100px"
    }

    const [form, setForm] = useState({username: "", email: ""})

    const handleChange = (event) => {
        const newForm = {...form}
        newForm[event.target.name] = event.target.value
        setForm(newForm)
    }

    return <div style={style}>
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
}

export default StateTutorial