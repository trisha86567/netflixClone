import React from 'react';

function Ratings(props) {
    const { voteAverage, voteCount } = props;
    let rating = voteAverage / 2;
    let count = Math.floor(rating);
    const totalStars = [...Array(5)];
    // array = []

    return (
        <div className='d-flex align-items-center mt-4'>
        {
            totalStars.map((item, index)=>{
            return(
              index < count ?
                <i key={index} className="fa-solid fa-star text-warning"></i>                     
              : <i key={index} className="fa-regular fa-star"></i>
            )
          })
          }
          <p className="ms-3 mb-0 fw-semibold">{rating.toFixed(1)} <span>({voteCount})</span></p>
        </div>
    );
}

export default Ratings;