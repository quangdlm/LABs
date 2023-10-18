import Film from "./Film";
import {films} from "../ListOfFilms";
import {useContext, useEffect, useState} from 'react'
import { ThemeContext } from "./ThemeProvider";
import FilmInforPupop from "./FilmInforPupup";

export default function FilmContainer(){
    const { theme, toggle, dark } = useContext(ThemeContext);
    const [show,setShow] = useState(false);
    const [currentFilm,setCurrentFilm] = useState();
    useEffect(()=>{
        console.log("dark: ",dark == true)
        if (dark == true){
            document.getElementById("page_title").classList.add("dark_text_background");
            document.getElementById("page").classList.add("dark_container");
        } else{
            document.getElementById("page_title").classList.remove("dark_text_background");
            document.getElementById("page").classList.remove("dark_container");
        }
    },[dark])
    
    return(
        <div id="page" className="page">
            <FilmInforPupop show={show} unShow={()=>setShow(false)} film={currentFilm}/>
            <div id="page_title" className="page_title">
                Kho phim yêu thích
            </div>
            <div className="film_container container row">
                {films.map((film)=>
                <div className="image col-12 col-md-6 col-lg-4" onClick={()=>{setShow(true);setCurrentFilm(film)}}>
                    <Film film={film}/>
                </div>)}
            </div>
        </div>
    )
}