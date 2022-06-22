import { Link, useLocation } from "react-router-dom";
import Main from "./pages/Main";

function App() {
  const location = useLocation()
  console.log(location)
  return <>
    {location.pathname !=="/" ? 
      <Link to="/">
        <h1>Go Home</h1>
      </Link>
    : null 
    }
    <Main/>
  </>
}

export default App;
