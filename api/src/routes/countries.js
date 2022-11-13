const fetch = require('node-fetch');
const {Op } = require('sequelize');
const { Country,Activity} =require('../db')
const router = require('express').Router();


router.post('/',async (req,res)=>{
    //hay que setear la base de datos el encoding del client para que funcione bien SET CLIENT_ENCODING TO 'UTF8';
        try {
          const response=await fetch('https://restcountries.com/v3/all');
          const json=await response.json();
          const countries= json.map(element=>Country.create({
            ID:element.cca3,
            name:element.name.common,
            flagImage:element.flags[1],
            continent:element.continents,
            capital:element.capital, //hay problemas con algunos datos que son null en capital
            subregion:element.subregion,
            area:element.area,
            population:element.population
            
        }))
        await Promise.all(countries)
        
        res.json('se cargó la base de datos countries')
            
        } catch (error) {
            console.log(error.message);
            res.status(404).json({"error":error.message})
        }
    })
    
    
    router.get('/', async (req,res,next)=>{
        try {
            let {name}=req.query;
            //busca por nombre
            if(name){
                const countries=await Country.findAll({
                    attributes: ['ID','flagImage', 'name','continent','population'],
                    include: Activity,
                    where: {
                        name: {[Op.iLike]:`${name}%`},
                      }
                })      
                
                if(countries.length===0) return res.status(404).json({"Error":"No existe ningún país con ese criterio"})
                return res.json(countries) //sin return genera problemas de Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client
            }
            //busqueda total
            const countries= await Country.findAll({
                attributes: ['ID','flagImage', 'name','continent','population'],
                include: Activity
              });
           return res.json(countries)
        } catch (error) {
            res.status(404).json({"error":error.message})
        }
    })

    module.exports = router;