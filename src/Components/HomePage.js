import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getData } from "../Services/api";

const Home = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        console.log("hellooo")
        dispatch(getData());
    }, [])
    const data = useSelector((state) => state.record);
    console.log(data);
    return (
        <>
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