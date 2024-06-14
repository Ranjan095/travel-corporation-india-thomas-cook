import { Plus } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Group from "./Group";
import { ADD_GROUP } from "../redux/group/action";

const Home = () => {
  let [state, setState] = useState([]);
  let dispatch = useDispatch();
  let group = useSelector((store) => store.groupReducer);

  useEffect(() => {
    setState(group);
    console.log(group);
  }, [group]);

  return (
    <div className="flex justify-center items-center">
      <div>
        <h1 className="text-3xl font-bold">
          Travel corporation India (Thomas Cook)
        </h1>
        <div>
          <div>
            {state?.map((ele, i) => {
              return (
                <Group key={i} index={i} name={`Group - ${i + 1}`} {...ele} />
              );
            })}
          </div>
          <div>
            <span>
              <button
                onClick={() => dispatch({ type: ADD_GROUP })}
                type="button"
                className="inline-flex items-center  my-2 rounded-md  px-2 py-2 text-sm font-semibold hover:bg-gray-400/30"
              >
                <Plus
                  strokeWidth={"4px"}
                  className="h-4 w-4  text-blue-600 mr-2"
                />
                Add Group
              </button>
            </span>
          </div>
          <div>
            <button className="bg-blue-600 p-2 font-bold text-white rounded-md hover:bg-blue-600/80">
              Show Status
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
