const API_KEY = '0d8ab7cff2692bd014bb25fca16d7158';

export const requests = {
    getNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213&language=en-US`,
    getTv: (type)=>{return `/tv/${type}?api_key=${API_KEY}&language=en-US&page=1`},
    getMovie: (type)=>{return `/movie/${type}?api_key=${API_KEY}&language=en-US&page=1`},
    getDetails: (param)=>{return `/${param.type}/${param.id}?api_key=${API_KEY}&language=en-US&page=1&append_to_response=videos`},
    getGenre: (type)=>{return `/genre/${type}/list?api_key=${API_KEY}&language=en-US&page=1`},
    discoverByGenre: (param)=>{return `/discover/${param.type}?api_key=${API_KEY}&with_genres=${param.genreName}&language=en-US&page=1`},
    search: (param)=>{return `/search/${param.type}?api_key=${API_KEY}&query=${param.query}&language=en-US&page=1`},
}

export const requestTypes = {
    airingTodayTv: 'airing_today',
    onTheAirTv: 'on_the_air',
    topRated: 'top_rated',
    popular: 'popular',
    upcoming: 'upcoming',
    nowPlaying: 'now_playing',
    movie: 'movie',
    tv:'tv'
}











