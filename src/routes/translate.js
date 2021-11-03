const { Router } = require("express");
const router = Router();

// Controllers
const homeController = require("../controllers/home");

router.get("/", homeController.GET);
router.post("/", homeController.POST);

module.exports = router;
