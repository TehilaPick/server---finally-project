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

async function createNewContact(contactname,email,phone,permission){
    
    const rows = await db.query(
        `INSERT INTO contact(contactname,email,phone,permission)
        VALUES(?,?,?,?);`,
        [contactname,email,phone,permission]
    );
    const data = rows;
    return {
      data
    }
  }


async function login(email){
    const result = await db.query(
        `SELECT contactname,email,phone,id,permission FROM contact
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