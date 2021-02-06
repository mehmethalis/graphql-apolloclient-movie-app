import React, {useState} from "react";
import {useQuery, useMutation} from "@apollo/client";
//queries
import {GET_DIRECTORS, NewMovieMutation, GET_MOVIES} from '../queries/queries';


const NewMovieForm = () => {
    const {loading, error, data} = useQuery(GET_DIRECTORS);
    const [addMovie] = useMutation(NewMovieMutation);
    const [form, setForm] = useState({
        title: '',
        description: '',
        year: 0,
        directorId: ''
    });

    const listDirectors = () => {
        if (loading)
            return <option>Loading...</option>
        else if (error)
            return <option>{error}</option>
        else
            return data.directors.map((director: { id: string, name: string }) => (<option
                key={director.id} value={director.id}>{director.name}</option>))
    }
    return (
        <div className="container" data-state="New Movie">
            <div className="device" data-view="list">
                <form onSubmit={(e) => {
                    e.preventDefault();
                    addMovie({
                        variables: form,
                        refetchQueries: [{query: GET_MOVIES}]
                    }).catch(err => console.log(err))
                }}>
                    <div>
                        <input type="text" name="title" placeholder="Title"
                               onChange={(e) => setForm({...form, title: e.target.value})}/>
                    </div>
                    <div>
                        <textarea name="description" placeholder="Description"
                                  onChange={(e) => setForm({...form, description: e.target.value})}/>
                    </div>
                    <div>
                        <input type="text" name="year" placeholder="Year"
                               onChange={(e) => setForm({...form, year: parseInt(e.target.value, 10)})}/>
                    </div>
                    <div>
                        <select name="directorId" id={"directorId"}
                                onChange={(e) => setForm({...form, directorId: e.target.value})}>
                            <option>Choose Director</option>
                            {listDirectors()}

                        </select>
                    </div>
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default NewMovieForm;