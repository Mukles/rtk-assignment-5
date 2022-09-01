const { createAsyncThunk } = require("@reduxjs/toolkit");
const { default: axios } = require("axios");

const relativeSearch = createAsyncThunk("relative/search", async (title) => {
  const _title = title
    .split(" ")
    .map((t) => `title_like=${t}&`)
    .join("");
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/posts?${_title}`
  );
  return data;
});

module.exports = relativeSearch;
