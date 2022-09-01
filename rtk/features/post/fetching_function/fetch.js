const { default: axios } = require("axios");
const { createAsyncThunk } = require("@reduxjs/toolkit");

// create async thunk
const fetchPosts = createAsyncThunk("post/fetchPosts", async (userId) => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/posts/1"
  );
  return data;
});

module.exports = fetchPosts;
