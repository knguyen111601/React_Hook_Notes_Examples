import { Link } from "react-router-dom"

const Home = () => {

    const hooks = ["useState", "useReducer", "useEffect", "useRef", "useLayoutEffect", "useImperativeHandle", "useContext", "useMemo", "useCallback"]

    const renderLinks = () => {
        return hooks.map((hook)=>{
            return <Link to={`/${hook}`}>
                <h1>{hook}</h1>
            </Link>
        })
    }

    return <>
        <h1>Home</h1>
        {renderLinks()}
    </>
}

export default Home