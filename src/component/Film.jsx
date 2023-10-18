import {films} from "../ListOfFilms";

export default function Film(props){
    const film = props.film;
    return(
        <div className="film">
            <div className="image">
                <img className="zoom" src={film.image} alt={film.Title} />
                <div className="text">
                    <div className="title"> {film.title}</div>
                    <div className="details">{film.year} | {film.nation}</div>
                </div>
            </div>
        </div>
    )
}