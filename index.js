import { logInfo } from "./logger/logger.js";
import request from "./servives/services.js";

Promise.all([
  request("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      id: 1,
      title: "foo",
      body: "bar",
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  }),
  request("https://jsonplaceholder.typicode.com/posts/1", {
    method: "PUT",
    body: JSON.stringify({
      id: 1,
      title: "foo",
      body: "bar",
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  }),

  request("https://jsonplaceholder.typicode.com/posts/1", {
    method: "PATCH",
    body: JSON.stringify({
      title: "foo",
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  }),

  request("https://jsonplaceholder.typicode.com/posts/1", {
    method: "DELETE",
  }),
]).then(() => logInfo("vse zaprosi vipolnilis'"));
