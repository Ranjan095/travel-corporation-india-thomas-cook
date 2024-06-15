import axios from "axios";
import {
  ADD_GROUP,
  REMOVE_GROUP,
  SET_GROUP_RANGE,
  SHOW_STATUS,
  getData,
} from "./action";

let initialState = [
  {
    from: 1,
    to: 10,
    status: [],
  },
];

let groupReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_GROUP: {
      return [...state, { from: "", to: "" }];
    }

    case REMOVE_GROUP: {
      let filtredData = state.filter((ele, i) => i !== payload);
      return filtredData;
    }
    case SET_GROUP_RANGE: {
      if (payload?.renge === "from") {
        let checkPrev = state[payload?.index - 1];
        if (payload?.index > 0) {
          if (checkPrev.to >= payload.value) {
            alert(`Please enter ${+checkPrev.to + 1}`);
            return state;
          }

          if (payload.value - checkPrev.to > 1) {
            alert(`Please enter ${+checkPrev.to + 1}`);
            return state;
          }
        }
      }

      let newData = state.map((ele, i) => {
        if (i === payload?.index) {
          let temp = ele;
          temp[payload?.renge] = +payload?.value;
          return temp;
        } else {
          return ele;
        }
      });

      return newData;
    }
    case SHOW_STATUS: {
      return state;
    }

    default: {
      return state;
    }
  }
};

export default groupReducer;
