import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { requests } from '../helper/requests';
import axios from '../helper/axios';
import Row from '../components/Row';


function Browse(props) {
    const { type } = useParams();
    const [genre, setGenre] = useState();

    useEffect(()=>{
        const getGenre = async() => {
            const response = await axios.get(requests.getGenre(type))
            setGenre(response.data);
        }
        getGenre();
    }, [type])

    return (
        <div className='container-fluid'>
            {/* <Row title="Action" action={fetchPopularMovies} selector = {popularMoviesSelector} type={requestTypes.popular} videoType={requestTypes.movie} /> */}
        </div>
    );
}

export default Browse;