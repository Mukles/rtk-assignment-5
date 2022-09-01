const { createSlice } = require("@reduxjs/toolkit");
const { actions } = require("../post/postSlicer");
const relativeSearch = require("./relativeData");

//inital state
const initialState = {
  posts: [],
  loading: false,
  error: "",
};

const relativeSearchSlice = createSlice({
  name: "relativeSearch",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(relativeSearch.pending, (state, action) => {
      state.loading = true;
      state.error = "";
    });

    builder.addCase(relativeSearch.fulfilled, (state, action) => {
      state.loading = false;
      state.error = "";
      state.posts = action.payload;
    });

    builder.addCase(relativeSearch.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
      state.posts = [];
    });
  },
});

module.exports = {
  relativeActions: relativeSearchSlice.actions,
  relativeReducer: relativeSearchSlice.reducer,
};
