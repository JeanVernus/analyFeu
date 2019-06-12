const Express = require("express");
const Cors = require("cors");
const BodyParser = require("body-parser");

const Port = 5000;

const App = Express();
App.use(Cors());
App.use(BodyParser.json());
App.use(BodyParser.urlencoded({ extended: true }));

App.listen(Port, () => {
  console.log(`server started on ${Port}`);
});
