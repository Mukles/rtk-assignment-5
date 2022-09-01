const { configureStore, getDefaultMiddleware } = require("@reduxjs/toolkit");
const { createLogger } = require("redux-logger");
const { reducer } = require("../features/post/postSlicer");
const {
  relativeReducer,
} = require("../features/relativeDataFinding/relativeSlice");

const logger = createLogger();

const store = configureStore({
  reducer: {
    post: reducer,
    search: relativeReducer,
  },
});

module.exports = store;
