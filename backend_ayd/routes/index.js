const express = require('express')

const router = express.Router()

const userSignUpController = require("../controller/user/userSignUp")
const userSignInController = require("../controller/user/userSigIn")
const userDetailsController = require('../controller/user/userDetails')
const userLogout = require('../controller/user/userLogout')
const authToken = require('../middleware/authToken')
const doctorAddController = require('../controller/doctor/doctorAdd')
const calorieController = require("../controller/calorie/calorieController")
const updateUser = require('../controller/user/udateUser')
const allUsers = require('../controller/user/allUsers')




router.get("/all-user",authToken,allUsers)
router.post("/update-user",authToken,updateUser)
router.post("/signup",userSignUpController)
router.post("/signin",userSignInController)
router.get("/user-details",authToken,userDetailsController)
router.get("/userLogout",userLogout)

router.post('/calories', calorieController.addCalorieRecord);
router.get('/calories/:email', calorieController.getCalorieRecords);
router.put('/calories/:email/:date', calorieController.updateCalorieRecord);
router.delete('/calories/:email/:date', calorieController.deleteCalorieRecord)

router.post("/addDoctor",doctorAddController)

module.exports = router