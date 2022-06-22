import {Routes, Route} from "react-router-dom"
import StateTutorial from "./StateTutorial"
import Home from "./Home"

const Main = () => {
    return <>
    <Routes>
        <Route path="*" element={<h1>Page does not exist or hasn't been created yet.</h1>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/useState" element={<StateTutorial/>}/>
    </Routes>
    </>

}

export default Main