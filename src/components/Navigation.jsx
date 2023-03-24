import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { searchQuery } from '../features/common/commonSlice';

function Navigation(props) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const onSearch = (e)=>{ 
      const {value} = e.target;
      if(value.length > 3){
        dispatch(searchQuery(value))
        navigate('/search')
      }      
    }
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark" aria-label="Fourth navbar example">
        <div className="container-fluid">
          <Link className="navbar-brand" href="#">Expand at md</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
    
          <div className="collapse navbar-collapse" id="navbarsExample04">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to='/'>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/browse/movie'>Movies</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/browse/tv'>Tv Shows</Link>
              </li>
              <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={onSearch} />
      </form>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" href="#">Action</Link></li>
                  <li><Link className="dropdown-item" href="#">Another action</Link></li>
                  <li><Link className="dropdown-item" href="#">Something else here</Link></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
}

export default Navigation;