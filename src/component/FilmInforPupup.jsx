import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "./ThemeProvider";

export default function FilmInforPupop(props){
    const { theme, toggle, dark } = useContext(ThemeContext);
    const film = props.film;
    const handleClick = (event)=>{
        if (event.target.id == "film_popup") props.unShow();
    }
    return(
        <div id="film_popup" className="film_popup row" style={{
            background: `${!dark?'#ffffffeb':'rgb(0 0 0 / 97%)'}`,
            display:`${props.show?"flex":"none"}`
        }} onClick={handleClick}>
            <div className="image col-md-6 col-12">
                <img src={`${film?.image}`} alt="" />
            </div>
            <div className="film_popup_content col-md-6 col-12">
                <div className={`title ${dark?'':'black'}`}>{film?.title}</div>
                <div className={`details ${dark?'#646464':'black'}`}>{film?.year} | {film?.nation}</div>
                <div className={`content ${dark?'':'black'}`}>{film?.content}</div>
                <div className="button">
                <Link to={`/film/${film?.title}`}
                onClick={()=>{props.unShow()}}
                >
                    <button 
                        style={{
                            background:"#eb3636",
                        }}
                    >
                        <i className="fa-solid fa-play" style={{color: '#ffffff', padding:"10px"}}></i>
                        Chi tiết
                    </button>
                </Link>
                </div>
            </div>
        </div>
    )
}