const db = require('./db');

async function createBussines(            
    userId,
    idCategory,
    idServiceAreas,
    idTypesOfEvents,
    phoneNnumber,
    mail,
    website,
    idAvailableDates,
    contactName){
        try {
            const bussines =await db.query(
                `INSERT INTO bussines(
                    userId,
                    idCategory,
                    idServiceAreas,
                    idTypesOfEvents,
                    phoneNnumber,
                    mail,
                    website,
                    idAvailableDates,
                    contactName) 
                 VALUES (?,?,?,?,?,?,?,?,?);` 
                 [userId,
                 idCategory,
                 idServiceAreas,
                     idTypesOfEvents,
                     phoneNnumber,
                     mail,
                     website,
                     idAvailableDates,
                     contactName
                 ]
             );
             return {bussines}
            
        } catch (error) {
            console.log("error at add business",error
            )
            
        }

}

module.exports={
    createBussines
}