
const router = require('express').Router();
const contacts = require("../controllres/contacts");


// //לקבל את רשימת המשתמשים
// router.get('/getAllUsers',users.getAllUsers);

//לצור משתמש חדש - הרשמה
router.post('/createNewContact', contacts.createNewContact);

//לקבל את רשימת המשתמשים
router.get('/getAllContacts', contacts.getAllContacts);

//להתחבר למערכת ע"י אימייל של משתמש רשום
router.get('/login/:email', contacts.login)
module.exports = router