"use strict";

var _app = require("./app");
const port = 3333;
_app.app.listen(port, () => console.log(`server is running on port ${port}`));