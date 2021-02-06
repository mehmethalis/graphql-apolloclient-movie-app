import {gql} from "@apollo/client";

export const GET_MOVIES = gql`
    {
        movies{
            id,
            title,
            description,
            year
        }
    }
`
export const GET_DIRECTORS = gql`
    {
        directors{
            id,
            name,
            birth
        }
    }
`
export const NewMovieMutation = gql`
    mutation($title: String!, $description: String, $year: Int!, $directorId: String!){
        addMovie(title:$title, description:$description, year:$year, directorId:$directorId){
            title
        }
    }
`;