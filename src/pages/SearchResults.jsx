import React, { useEffect, useState } from 'react';
import { requests } from '../helper/requests';
import axios from '../helper/axios';
import { useSelector } from 'react-redux';
import Card from '../components/Card';

function SearchResults(props) {
    const [videoList, setVideoList] = useState();
    const queryString = useSelector((state)=>state.common.searchString)
    useEffect(()=>{
        const getResults = async()=>{
            const response = await axios.get(requests.search({type: 'movie', query: queryString}));
            setVideoList(response.data.results);
        }
        getResults();
    }, [queryString])
    return (
        <div className='container-fluid'>
            <div className="row">
                {
                    videoList?.map((item)=>{
                        return (
                            <div key={item.id} className="col-lg-3">
                                <Card video={item} type='movie'/>
                            </div>
                        )
                    })
                }
               
            </div>
        </div>
    );
}

export default SearchResults;