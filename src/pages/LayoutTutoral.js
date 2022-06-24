import { useLayoutEffect, useEffect } from "react"

const LayoutTutorial = () => {

    useLayoutEffect(()=>{
        console.log("useLayoutEffect")
    }, [])

    useEffect(()=>{
        console.log("useEffect")
    },[])


    return <>
    </>
}

export default LayoutTutorial