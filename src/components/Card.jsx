import React from 'react';
import { useDispatch } from 'react-redux';
import 'swiper/css';
import { fetchVideoDetails } from '../features/common/commonSlice';
import { fetchMovieDetails } from '../features/movie/movieSlice';
import Ratings from './Ratings';
function Card(props) {
    const { video, isPoster, type } = props;
    
    const dispatch = useDispatch();
    const getDetails = ()=>{
        dispatch(fetchVideoDetails({type: type, id: video.id}))
    }
    return (       
            <div className="card video-card">
                {
                    isPoster ? <img src={`https://image.tmdb.org/t/p/original/${video?.poster_path}`} alt="" /> :
                    <img src={`https://image.tmdb.org/t/p/original/${video?.backdrop_path}`} alt="" />
                }
               
                <div className="card-body">
                   <h3>{video?.name || video?.title || video?.original_title}</h3>
                   <Ratings voteAverage={video?.vote_average} voteCount={video?.vote_count}/>
                </div>
                <button className='btn btn-dark' data-bs-toggle="modal" data-bs-target="#video-modal" onClick={getDetails}>View</button>
            </div>        
    );
}

export default Card;