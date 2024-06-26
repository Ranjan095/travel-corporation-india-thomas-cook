import { ArrowRight, Trash2 } from "lucide-react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { REMOVE_GROUP, SET_GROUP_RANGE } from "../redux/group/action";

const Group = ({ name, to, from, index, status, setDisabled }) => {
  let dispatch = useDispatch();
  let groups = useSelector((store) => store.groupReducer);
  let handleChange = (renge, value, index) => {
    if (value < 1 || value > 10) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
    dispatch({ type: SET_GROUP_RANGE, payload: { renge, index, value } });
    if (index > 0) {
      let checkValid = groups[index - 1].to >= groups[index].from;
      if (checkValid) {
        setDisabled(true);
      } else if (groups[index].from - groups[index - 1].to == 1) {
        setDisabled(false);
      }
    }
    // console.log(`range - ${renge}, value - ${value}, index - ${index}`);
    // if (renge === "from") {
    //   if (value >= 1 && value <= 10) {
    //     dispatch({ type: SET_GROUP_RANGE, payload: { renge, index, value } });

    //     if (index > 0) {
    //       let checkValid = groups[index - 1].to >= groups[index].from;
    //       checkValid && setDisabled(true);
    //       console.log(groups[index - 1].to,groups[index].from)
    //     }
    //   } else {
    //     alert("enter between 1 to 10");
    //   }
    // }
    // if (renge === "to") {
    //   if (value >= 1 && value <= 10) {
    //     dispatch({ type: SET_GROUP_RANGE, payload: { renge, index, value } });
    //   } else {
    //     alert("enter between 1 to 10");
    //   }
    // }
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
          <div className="bg-gray-200 p-2 flex justify-center items-center">
            <p className="text-gray-500">{name}</p>
          </div>
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
      <div className=" border border-gray-500 w-[50%] bg-gray-200 p-2">
        {status}
      </div>
    </div>
  );
};

export default Group;
