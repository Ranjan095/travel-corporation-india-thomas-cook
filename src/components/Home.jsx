import React from "react";
import { useSelector } from "react-redux";

const Home = () => {
  let store = useSelector((store) => store.groupReducer);
  console.log(store);
  return (
    <div>
      <h1 className="text-3xl font-bold">Tasks</h1>
    </div>
  );
};

export default Home;
