import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as searchActions from '../store/actions/search';
import { useHistory } from 'react-router-dom';

export const Search = props => {

    const [searchValue, setSearchValue] = React.useState('');
    const dispatch = useDispatch();
    let history = useHistory();

    const openSearch = () => {
        const selectSearch = document.querySelector(".form");
        selectSearch.style.display = 'block';
    }

    // const submitSearch = (event) => {
    //     const selectSearch = document.querySelector(".form");
    //     selectSearch.style.display = 'none';
    //     if (searchValue !== '') {
    //         props.parentCallback(searchValue);
    //     }
    //     event.preventDefault();
    // }

    const submitSearch = (event) => {
        const selectSearch = document.querySelector(".form");
        selectSearch.style.display = 'none';
        if (searchValue !== '') {
            dispatch(searchActions.fetchSearch(searchValue));
        }
        history.push('/search')
        event.preventDefault();
    }

    // const handleSearch = React.useCallback((childDataSecond) => {
    //     dispatch(searchActions.fetchSearch(childDataSecond));
    // }, [dispatch]);


    return (
        <div className="search">
            <div className="form">
                <input name="search" searchData={searchValue} onChange={e => setSearchValue(e.target.value)} value={searchValue} className="searchOpen" placeholder="Search..." />
                {/* <button onClick={submitSearch} type="submit"></button> */}
                <button onClick={submitSearch} type="submit"></button>

                {/* <button onClick={handleSearch} type="submit"></button> */}

                <div className="close"></div>
            </div>
            <div onClick={openSearch} className="bt-search"></div>
        </div>
    )
}