let initialState = [
  {
    name: "group-1",
    from: 1,
    to: 10,
  },
];

let groupReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    // case value:

    //     break;

    default: {
      return state;
    }
  }
};

export default groupReducer;
