import {Routes, Route} from "react-router-dom"
import StateTutorial from "./StateTutorial"
import Home from "./Home"
import ReducerTutorial from "./ReducerTutorial"
import UseEffectTutorial from "./UseEffectTutorial"
import UseRefTutorial from "./UseRefTutorial"
import LayoutTutorial from "./LayoutTutoral"
import ImperativeHandle from "./ImperativeHandle"

const Main = () => {
    return <>
    <Routes>
        <Route path="*" element={<h1>Page does not exist or hasn't been created yet.</h1>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/useState" element={<StateTutorial/>}/>
        <Route path="/useReducer" element={<ReducerTutorial/>}/>
        <Route path="/useEffect" element={<UseEffectTutorial/>}/>
        <Route path="/useRef" element={<UseRefTutorial/>}/>
        <Route path="/useLayoutEffect" element={<LayoutTutorial/>}/>
        <Route path="/useImperativeHandle" element={<ImperativeHandle/>}/>
    </Routes>
    </>

}

export default Main