import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { videoDetailsSelector } from '../features/common/commonSlice';

function Modal(props) {
    const  {data}  = useSelector(videoDetailsSelector);
    const [trailer, setTrailer] = useState();
    useEffect(()=>{
      if(data){
        const trailerData = data.videos.results.find((item)=>{return item.site === 'YouTube'});
        setTrailer(trailerData);
      }
    }, [data])

    return (
    <div className="modal" tabIndex="-1" id='video-modal'>
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">Modal title</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <div className="youtube">
        <div class="ratio ratio-16x9">
          <iframe src={`https://www.youtube.com/embed/${trailer?.key}?rel=0`} title={trailer?.name} allowfullscreen></iframe>
        </div>
        <h3>{data?.name || data?.title || data?.original_title}</h3>
        <div className='d-flex'>
          {
            data?.genres.map((item)=>{
              return <p className='badge bg-dark me-2'>{item?.name}</p>
            })
          }
          </div>
        </div>
      </div>    
    </div>
  </div>
</div>
    );
}

export default Modal;