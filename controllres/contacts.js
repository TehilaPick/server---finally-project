const contacts = require('../services/contacts');


async function getAllContacts(req, res, next) {
    try {
      res.json(await contacts.getAllContacts());
    } catch (err) {
      console.error(`Error while getting contacta `, err.message);
      next(err);
    }
  }


async function createNewContact(req, res, next){
    const {contactname,email,phone,id} = req.body
    try{
        res.json(await contacts.createNewContact(contactname,email,phone,id))
    }
    catch(err){
        console.log("dont success to create new contact", err.message);
        next(err);
    }
} 

async function login(req, res, next){
    const {email} = req.params
    try{
      res.json(await contacts.login(email));  
    } 
    catch(err){
        console.log("dont success to login due to", err.message);
        next(err);
    }
}


module.exports = {getAllContacts, createNewContact, login}  