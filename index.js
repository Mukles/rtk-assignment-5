const express = require("express");

const fetchPost = require("./rtk/features/post/fetching_function/fetch");
const relativeSearch = require("./rtk/features/relativeDataFinding/relativeData");
const store = require("./rtk/store/store");
const app = express();

//store.subscribe(() => {});

app.get("/", async (req, res) => {
  await store.dispatch(fetchPost());
  await store.dispatch(relativeSearch(store.getState().post.post?.title));
  res.status(200).send(store.getState().search?.posts);
});

app.listen(5000, () => console.log(`Your application is runing on ${5000}`));
