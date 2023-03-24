import React, { useEffect } from 'react';
import Header from '../components/Header';
import Row from '../components/Row';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNetflixOriginals, fetchOnAirTodayTv, fetchOnAirTv, fetchPopularTv, fetchTopRatedTv, netflixOrinigals, onAirTvShowsVideos, onAirTvTodayVideos, popularTvVideos, topRatedTvVideos} from '../features/tv/tvSlice';
import { requestTypes } from '../helper/requests';
import { fetchNowPlayingMovies, fetchPopularMovies, fetchTopRatedMovies, fetchUpcomingMovies, nowPlayingMoviesSelector, popularMoviesSelector, topRatedMoviesSelector, upcomingMoviesSelector } from '../features/movie/movieSlice';

function HomeScreen(props) {
    const dispatch = useDispatch();
    const nfOriginals = useSelector(netflixOrinigals)
    
    useEffect(()=>{
        dispatch(fetchNetflixOriginals())
    },[dispatch])

    const getRandomNumber = ()=>{
        return Math.floor(Math.random() * nfOriginals.data?.results.length)       
    }

    return (
        <>
        <Header video={nfOriginals.data?.results[getRandomNumber()]} />

        <div className="container-fluid">
            <Row title="TopRated Tv Shows" action={fetchTopRatedTv} selector = {topRatedTvVideos} isPoster={true} type={requestTypes.topRated} videoType={requestTypes.tv}/>

            <Row title="Popular Movies" action={fetchPopularMovies} selector = {popularMoviesSelector} type={requestTypes.popular} videoType={requestTypes.movie} />

            <Row title="Upcoming Movies" action={fetchUpcomingMovies} selector = {upcomingMoviesSelector} type={requestTypes.upcoming} videoType={requestTypes.movie}/>

            <Row title="Top Rated" action={fetchTopRatedMovies} selector = {topRatedMoviesSelector} type={requestTypes.topRated} videoType={requestTypes.movie}/>

            <Row title="Now Playing" action={fetchNowPlayingMovies} selector = {nowPlayingMoviesSelector} type={requestTypes.nowPlaying} videoType={requestTypes.movie}/>

            <Row title="Popular Shows" action={fetchPopularTv} selector = {popularTvVideos} type={requestTypes.popular} videoType={requestTypes.tv}/>


        </div>
        </>
    );
}

export default HomeScreen;