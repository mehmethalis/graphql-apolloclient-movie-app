import React from "react";
import {useQuery} from "@apollo/client";
//queries
import {GET_MOVIES} from '../queries/queries';


const MovieList = () => {
    const {loading, error, data} = useQuery(GET_MOVIES);
    const listMovie = () => {
        if (loading)
            return <div>Loading...</div>
        else if (error)
            return <div>{error}</div>
        else
            return data.movies.map((movie: { title: string; id: string,description:string }) => {
                return (<li key={movie.id} className="content">
                    <div className="bg"/>
                    <div className="avatar"/>
                    <div className="title">{movie.title}</div>
                    <p>{movie.description}</p>
                </li>)
            })
    }
    return (
        <div className={'container'} data-state="Movie App">
            <div className="device" data-view="list">
                <ul className="layer" data-layer="list">
                    {listMovie()}
                </ul>
            </div>
        </div>
    )
}

export default MovieList;