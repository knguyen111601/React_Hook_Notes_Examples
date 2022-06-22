import {Routes, Route} from "react-router-dom"
import StateTutorial from "./StateTutorial"
import Home from "./Home"

const Main = () => {
    return <>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/useState" element={<StateTutorial/>}/>
    </Routes>
    </>

}

export default Main