import { ADD_GROUP, REMOVE_GROUP, SET_GROUP_RANGE } from "./action";

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
      let newData = state.map((ele, i) => {
        if (i === payload?.index) {
          let temp = ele;
          temp[payload?.renge] = payload?.value;
          return temp;
        } else {
          return ele;
        }
      });

      return newData;
    }

    default: {
      return state;
    }
  }
};

export default groupReducer;
