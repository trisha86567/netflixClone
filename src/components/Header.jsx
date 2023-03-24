import React, { useEffect } from 'react';
import headerImg from '../header-image.jpg'
function Header(props) {
   const {video} = props;
   console.log(video);

    return (
        <div className='video-header'>
            <img className='header-img' src={`https://image.tmdb.org/t/p/original/${video?.backdrop_path}`} alt="header-img" />
            <div className="caption text-white">
                <h1>{video?.name || video?.title || video?.original_title}</h1>
                <p>{video?.overview}</p>
                <div className="d-flex">
                    <span>Action</span>
                    <span>Comedy</span>
                </div>
            </div>
        </div>
    );
}

export default Header;