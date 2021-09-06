import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getData, getByName, limitFilter, urlfilter } from "../Services/api";
import { filters } from "../Actions/action";
import { useState } from "react";

const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        console.log("hellooo")
        dispatch(getData());
    }, [getData])
    const data = useSelector((state) => state.record);
    console.log(data);
    const search = useSelector((state) => state.search);
    console.log(search);

    const onValueChange = (e) => {
        dispatch(filters({ [e.target.name]: e.target.value }));
        window.localStorage.setItem('save', e.target.value);
    }
    const onClickSearch = () => {
        dispatch(limitFilter(window.localStorage.getItem('save',search)));
    }
    const onClickSearch2 = () => {
        dispatch(getByName(window.localStorage.getItem('save',search)));
    }
    const onClickSearch3 = () => {
        dispatch(urlfilter(window.localStorage.getItem('save',search)));
    }
    return (
        <>
            <div className="search">
                <div className="input-group">
                    <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search"
                        name="search" onChange={(e) => onValueChange(e)} aria-describedby="search-addon" />
                    <button type="button" className="btn btn-outline-primary" onClick={() => onClickSearch()} >Limit</button>
                    <button type="button" className="btn btn-outline-primary" onClick={() => onClickSearch2()} >By Name</button>
                    <button type="button" className="btn btn-outline-primary" onClick={() => onClickSearch3()} >Filter</button>

                </div>
            </div>
            <h1>Home</h1>
            <div>
                {
                    data.map(record => (
                        <div key={record.id} >
                            <p>{record}</p>
                            <img src={record} alt='img' />
                        </div>
                    ))
                }
            </div>
        </>
    )
}
export default Home;