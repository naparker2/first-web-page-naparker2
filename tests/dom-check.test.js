const dom = require("./dom-check.js");

test("<head> should have a <title>", () => {
  const title = dom.window.document.querySelector("title");
  expect(title).not.toBeNull();
});

test("<head> should have a <meta> description element", () => {
  expect(
    dom.window.document.querySelector("meta[name=description]")
  ).not.toBeNull();
});

test("index.html should contain a <h1>", () => {
  expect(dom.window.document.querySelector("h1")).not.toBeNull();
});

test("index.html should contain a <p>", () => {
  expect(dom.window.document.querySelector("p")).not.toBeNull();
});

test("index.html should contain favicon information", () => {
  expect(
    dom.window.document.querySelector("link[rel='shortcut icon']")
  ).not.toBeNull();
});
