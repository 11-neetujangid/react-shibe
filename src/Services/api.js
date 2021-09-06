import axios from 'axios';
import { setData } from "../Actions/action";

const url = "https://shibe.online/api"
export const getData = () => async (dispatch, getState) => {
    console.log("helo")
    try {
        const response = await axios.get(`${url}/shibes?count=10`)
        console.log(response.data)
        dispatch(setData(response.data));
    } catch (err) {
        console.log("Errror")
        console.log(err);
    }
}