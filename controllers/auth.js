const express = require("express");
const signin = require("./signin");
const singup2 = require("./signup2");
const router = express.Router();

router.post("/signin", signin);
router.post("/singup2", singup2);

module.exports = router;
