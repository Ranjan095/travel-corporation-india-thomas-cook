import { ArrowRight, Trash2 } from "lucide-react";
import React from "react";
import { useDispatch } from "react-redux";
import { REMOVE_GROUP, SET_GROUP_RANGE } from "../redux/group/action";

const Group = ({ name, to, from, index }) => {
  let dispatch = useDispatch();
  let handleChange = (renge, value, index) => {
    // console.log(`range - ${renge}, value - ${value}, index - ${index}`);
    if (renge === "from") {
      if (value >= 1 && value <= 10) {
        dispatch({ type: SET_GROUP_RANGE, payload: { renge, index, value } });
      } else {
        alert("enter between 1 to 10");
      }
    }
    if (renge === "to") {
      if (value >= 1 && value <= 10) {
        dispatch({ type: SET_GROUP_RANGE, payload: { renge, index, value } });
      } else {
        alert("enter between 1 to 10");
      }
    }
  };

  return (
    <div className="flex m-4 justify-between">
      <div className="flex">
        <button
          onClick={() => dispatch({ type: REMOVE_GROUP, payload: index })}
          className=" flex justify-center items-center mr-2 "
        >
          <Trash2 className="text-blue-600 " />
        </button>
        <div className=" flex border border-gray-500">
          <p className=" bg-gray-200  p-2 text-gray-500">{name}</p>
          <input
            onChange={(e) => handleChange("from", e.target.value, index)}
            type="number"
            min="1"
            max="10"
            value={from}
            className=" w-[50px] p-2 text-center border-l border-black text-gray-500 "
          />
          <div className=" flex justify-center  bg-gray-200 border-l border-black items-center p-2">
            <ArrowRight className=" text-blue-600 " />
          </div>
          <input
            onChange={(e) => handleChange("to", e.target.value, index)}
            type="number"
            min="1"
            max="10"
            value={to}
            className=" w-[50px] p-2 text-center border-l border-black text-gray-500"
          />
        </div>
      </div>
      <div className=" border border-gray-500 min-w-[50%] bg-gray-200"></div>
    </div>
  );
};

export default Group;
