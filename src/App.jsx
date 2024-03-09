import './App.css'
import MainPage from "./pages/MainPage.jsx";
import InfoPage from "./pages/InfoPage.jsx";
import {
    Route,
    Routes
} from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import RegPage from "./pages/RegPage.jsx";

function App() {


    return (
        <Routes>
            <Route path = "/" element={<MainPage/>}/>
            <Route path = "/info" element={<InfoPage/>}/>
            <Route path={"*"} element={<NotFoundPage/>}/>
            <Route path={'/error'} element={<NotFoundPage/>} />
            <Route path = {'/registration'} element={<RegPage/>}/>
        </Routes>
    )
}

export default App
