const express= require("express"); 

const router = express.Router(); 

const indexCntrl = require("../controllers/index")
const isLoggedIn = require("../help/isLoggedIn")

router.get("/" , isLoggedIn , indexCntrl.index_get); 

module.exports = router;