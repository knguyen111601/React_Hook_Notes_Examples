import { useState, useImperativeHandle, forwardRef } from "react"

// forwardRef allows us to transform a functional component to accept a reference from parent
const Button = forwardRef((props, ref) => {
    
    const [toggle, setToggle] = useState(false)

    useImperativeHandle(ref, ()=>({
        alterToggle() {
            setToggle(!toggle)
        }
    }))

    return (
        <>
            <button>Button From Child</button>
            {toggle && <span>Toggle</span>}
        </>
    )   
})

export default Button