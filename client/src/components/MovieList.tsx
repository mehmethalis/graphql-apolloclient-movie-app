import React from "react";
import {gql, useQuery} from "@apollo/client";

const GET_MOVIES = gql`
    {
        movies{
            title,
            description,
            year
        }
    }
`

const MovieList = () => {
    const {loading, error, data} = useQuery(GET_MOVIES);
    if (data) console.log(data)
    return (
        <>
            <ul className={'movieList'}>
                <li>
                    Lorem İpsum
                </li>
            </ul>
        </>
    )
}

export default MovieList;