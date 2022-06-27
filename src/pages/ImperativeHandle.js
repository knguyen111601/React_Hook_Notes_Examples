import { useRef } from "react"
import Button from "../components/Button"

const ImperativeHandle = () => {
    const buttonRef = useRef(null)
    return <>

    <div style={{borderBottom:"2px dotted black"}}>
            <h1 style={{textAlign:"center", fontSize:"3em"}}>useImperativeHandle Example</h1>
            <h3 style={{textAlign:"center"}}>useImperativeHandle(ref, function returning object)</h3>
            <p>useImperativeHandle works by allowing parent components control the state and functionality of child components by passing references to the child and sending functions back to the parent</p>
            <p>In this example, the parent button component has a buttonRef created that is sent to the child button</p>
            <p>In order for a functional component such as the child button to receive a ref, it neds to be wrapped in a forwardRef before the function declartion</p>
            <p>This will then allow it to accept props and ref parameters</p>
            <p>Within the child component, there is a state of toggle that can either be true or false</p>
            <p>We use useImperativeHandle in the child button that returns an object of methods</p>
            <p>There is a method written in it called alterToggle() that changes the state of toggle</p>
            <p>Having it written in the useImperativeHandle function, we can now access it the same way you would through useRef</p>
            <p>Our parent button has an onClick that uses the alterToggle function by accessing buttonRef.current.alterToggle() and can now change state of its child component</p>

        </div>

        <div>
            <div style={{width:"max-content", margin:"auto", display:"flex", flexDirection:"column"}}>
                <button onClick={()=>{buttonRef.current.alterToggle()}}>Button From Parent</button>
                <Button ref={buttonRef}/>
            </div>
        </div>
    </>
}

export default ImperativeHandle