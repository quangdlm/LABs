import { BrowserRouter } from "react-router-dom";
import FilmContainer from "./component/FilmContainer";
import Navigation from "./component/Navigation";
import { Route, Routes } from "react-router";
import FilmDetail from "./component/FilmDetail";
import {useContext} from 'react'
import { ThemeContext } from "./component/ThemeProvider";
import Contract from "./component/Contract";
import About from "./component/About";
import News from "./component/News";


export default function App(){
    const {dark}= useContext(ThemeContext);
    return (
        <div className={`App ${dark?"dark_container":''}`}>
            <BrowserRouter>
                <Navigation/>
                <Routes>
                    <Route path="/" Component={FilmContainer}/>
                    <Route path="/film/:filmName" Component={FilmDetail}/>
                    <Route path="/contract" Component={Contract}/>
                    <Route path="/news" Component={News}/>
                    <Route path="/about" Component={About}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}