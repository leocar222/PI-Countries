const {Activity,Country } =require('../db')
const router = require('express').Router();
const {Op } = require('sequelize');

router.post('/',async (req,res)=>{
    const{name,difficulty,duration,season,countries}=req.body;
    console.log(countries);
    try {
        const createActivity=await Activity.create({
            name,
            difficulty,
            duration,
            season
        })
        const findActivity = await Country.findAll({
            where: {
               name: {[Op.in]:countries},
            }
         });

        createActivity.addCountries(findActivity);
        res.send('Actividad creada con éxito')
    } catch (error) {
        console.log(error.message);
        res.status(404).json({"error":error.message})
    }
})

module.exports = router;