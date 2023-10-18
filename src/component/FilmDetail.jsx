import { Link } from "react-router-dom";
import {films} from "../ListOfFilms";
import { useParams } from "react-router";
import { useContext, useEffect, useState } from "react";
import FilmContainer from "./FilmContainer";
import Film from "./Film";
import { ThemeContext } from "./ThemeProvider";
import FilmInforPupop from "./FilmInforPupup";

export default function FilmDetail(){
    let film;
    const { filmName } = useParams();
    for (let index = 0; index < films.length; index++) {
        if (films[index].title == filmName) {
            film = films[index];
            break;
        }
    }



    const filmDetail = [
        {name:"Trạng thái", 'value':film?.status},
        {name:"Đạo diễn", 'value':film?.director},
        {name:"Thời lượng", 'value':film?.time},
        {name:"Số tập", 'value':film?.episodes},
        {name:"Ngôn ngữ", 'value': 'Phụ đề Việt'},
        {name:"Năm sản xuất", 'value':film?.year},
        {name:"Quốc gia", 'value':film?.nation},
        {name:"Thể loại", 'value':film?.type},
        {name:"Diễn viên", 'value':film?.actors},
    ]
    const [showVideo, setShowVideo] = useState(false);
    const { theme, toggle, dark } = useContext(ThemeContext);

    const [show,setShow] = useState(false);
    const [currentFilm,setCurrentFilm] = useState();
    useEffect(()=>{
        console.log("dark: ",dark == true)
        if (dark == true){
        } else{
        }
    },[dark])

    const handleVideoClick =(event) =>{
        if (event.target.id != "video"){
            console.log(document.getElementsByClassName("ytp-play-button"));
            setShowVideo(false);
        }
    }
    const handleShow = ()=>{
        setShowVideo(true);
    }
    
    return(
        <div className="film_detail_container">
            <FilmInforPupop show={show} unShow={()=>setShow(false)} film={currentFilm}/>
            <div className="top"
                style={{
                    backgroundColor:`${!dark?'#ededed':''}`
                }}
            >
                <div className="film_detail">
                    <div className="image">
                        <img src={`${film?.image}`} alt="" />
                    </div>
                    <div className="content">
                        <div className="content_text">
                            <div className="title">{film?.title}</div>
                            <div className="details">
                            {filmDetail.map((detail)=>
                                <div className="detail_item">
                                    <span className={`detail_name ${!dark?'black':''}`}>{detail.name}:</span>
                                    <span className="detail_value ">{detail.value}</span>
                                </div>
                            )}
                            </div>
                        </div>
                        <button 
                            onClick={handleShow}
                            style={{
                                background:"#eb3636",
                                border: 0,
                                color:'white',
                                marginTop: '10px'
                            }}
                        >
                            <i className="fa-solid fa-play" style={{color: '#ffffff', padding:"10px"}}></i>
                            Trailer
                        </button>
                    </div>
                </div>
                {film?.content &&
                    <div className={`film_content ${!dark?'black':''}`}>
                        <div className={`title ${!dark?'black':''}`}
                        
                        >Nội dung phim:
                    </div>
                        {film?.content}
                    </div>
                }
                {film?.iframeId && showVideo &&
                <div className="video" 
                    onClick={handleVideoClick}
                >
                    <iframe id="video" width="1120px" height="630px" src={`https://www.youtube.com/embed/${film?.iframeId}?autoplay=1`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullscreen></iframe>
                </div>
            }
                <div className="others">
                    {films.map((film)=>
                    <div className="image" onClick={()=>{setShow(true);setCurrentFilm(film)}}>
                        <div className="film">
                            <div className="image">
                                <img className="zoom" src={film.image} alt={film.Title} />
                            </div>
                        </div>
                    </div>)}
                </div>
            </div>
        </div>
    )
}