const bussines = require('../services/bussines')


async function createBussines(req,res){
    const {            
        userId,
        idCategory,
        idServiceAreas,
        idTypesOfEvents,
        phoneNnumber,
        mail,
        website,
        idAvailableDates,
        contactName}= req.body
    try{

        await res.json(bussines.createBussines(            
            userId,
            idCategory,
            idServiceAreas,
            idTypesOfEvents,
            phoneNnumber,
            mail,
            website,
            idAvailableDates,
            contactName))

    }
    catch(e){
        console.log("dont succes to create ",e)
        next(e);

    }
}

module.exports = {createBussines}