import React, { useEffect } from 'react';
//swiper import
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Card from './Card';
import { useDispatch, useSelector } from 'react-redux';

function Row(props) {
    const { title, action, selector, isPoster, type, videoType } = props;
    const dispatch = useDispatch();
    const videoList = useSelector(selector)
    useEffect(()=>{
      if(action){
        dispatch(action(type))
      }      
    }, [dispatch, action, type])

    return (
        <div className='p-4'>
        <h3>{title}</h3>
        <Swiper
        spaceBetween={50}
        slidesPerView={5}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >        
      {
        videoList.data?.results.map((item)=>{
          return(
            <SwiperSlide key={item.id}>
              <Card video={item} isPoster={isPoster} type={videoType}/>
            </SwiperSlide>
            )
        })
      }       
      </Swiper>
      </div>
    );
}

export default Row;