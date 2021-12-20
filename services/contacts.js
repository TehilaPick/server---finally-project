const db = require('./db');



async function getAllContacts(){
 
  const rows = await db.query(
    'SELECT * FROM contact'
  );
  const data = rows;
  return {
    data
  }
}

async function createNewContact(contactname,email,phone,id){
    
    const rows = await db.query(
        `INSERT INTO contact(contactname,email,phone,id)
        VALUES(?,?,?,?);`,
        [contactname,email,phone,id]
    );
    const data = rows;
    return {
      data
    }
  }


async function login(email){
    const result = await db.query(
        `SELECT contactname,email,phone,id FROM contact
        WHERE email=?`,
        [email]
    )
    return result;
}  

module.exports = {
    getAllContacts,
    createNewContact,
    login
}