import axios from "axios";

export const ADD_GROUP = "ADD_GROUP";
export const REMOVE_GROUP = "REMOVE_GROUP";
export const SET_GROUP_RANGE = "SET_GROUP_RANGE";

export const SHOW_STATUS = "SHOW_STATUS";

export const FETCH_STATUS_START = 'FETCH_STATUS_START';
export const FETCH_STATUS_SUCCESS = 'FETCH_STATUS_SUCCESS';
export const FETCH_STATUS_FAILURE = 'FETCH_STATUS_FAILURE';


export const getData = async (id) => {
  try {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/todos/${id}`
    );
    // return res?.data?.completed ? "True" : "False";
    console.log(res?.data?.completed ? "True" : "False");
  } catch (err) {
    console.log(err);
    return "Error";
  }
};
