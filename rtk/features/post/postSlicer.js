const { createSlice } = require("@reduxjs/toolkit");
const store = require("../../store/store");
const relativeSearch = require("../relativeDataFinding/relativeData");
const fetchPost = require("./fetching_function/fetch");

//inital state
const initialState = {
  post: {},
  loading: false,
  error: "",
};

const postSlice = createSlice({
  name: "post",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchPost.pending, (state, action) => {
      state.loading = true;
      state.error = "";
    });

    builder.addCase(fetchPost.fulfilled, (state, action) => {
      state.loading = false;
      state.error = "";
      state.post = action.payload;
    });

    builder.addCase(fetchPost.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
      state.post = [];
    });
  },
});

module.exports = {
  reducer: postSlice.reducer,
  actions: postSlice.actions,
};
