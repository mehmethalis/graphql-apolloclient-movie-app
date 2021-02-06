import React, {useState} from "react";
import {useQuery} from "@apollo/client";
//queries
import {GET_MOVIES} from '../queries/queries';
import {Modal} from 'antd';


const MovieList = () => {
    const {loading, error, data} = useQuery(GET_MOVIES);
    const [visible, setVisible] = useState(false);
    const [currentMovie, setMovie] = useState({id: '', title: '', description: '', year: 0, directorId: ''});

    const handleModal = (movie: any) => {
        setVisible(true)
        setMovie(movie)
    }


    const listMovie = () => {
        if (loading)
            return <div>Loading...</div>
        else if (error)
            return <div>{error}</div>
        else
            return data.movies.map((movie: { title: string; id: string, description: string, directorId: string, year: number }) => {
                return (<li key={movie.id} className="content" onClick={() => handleModal(movie)}>
                    <div className="bg"/>
                    <div className="avatar"/>
                    <div className="title">{movie.title}</div>
                    <p>{movie.description}</p>
                </li>)
            })
    }


    return (
        <div className={'container'} data-state="Movie App">

            <Modal title={'Detail'} visible={visible} onOk={() => setVisible(false)} onCancel={() => setVisible(false)}>
                <h4>{currentMovie.title}</h4>
                <p>{currentMovie.year} </p>
                <br/>
                <p>{currentMovie.description}</p>
                <br/>
            </Modal>

            <div className="device" data-view="list">
                <ul className="layer" data-layer="list">
                    {listMovie()}
                </ul>
            </div>
        </div>
    )
}

export default MovieList;