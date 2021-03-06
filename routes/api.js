
const router = require('express').Router();
const contacts = require("../controllres/contacts");
const bussines = require("../controllres/bussines")


// //לקבל את רשימת המשתמשים
// router.get('/getAllUsers',users.getAllUsers);

//לצור משתמש חדש - הרשמה
router.post('/createNewContact', contacts.createNewContact);

//לקבל את רשימת המשתמשים
router.get('/getAllContacts', contacts.getAllContacts);

//להתחבר למערכת ע"י אימייל של משתמש רשום
router.get('/login/:email', contacts.login)

router.post('/createBussines', bussines.createBussines)
module.exports = router