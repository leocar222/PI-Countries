const router = require('express').Router();
const fetch = require('node-fetch');
const {Op } = require('sequelize');
const { Country ,Activity } =require('../db')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const countries=require('./countries')
const countriesID=require('./countriesID')
const activities=require('./activities')


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/countries',countries)
router.use('/countries',countriesID)
router.use('/activities',activities)

module.exports = router;


// router.post('/activities',async (req,res)=>{
//     try {
//         const{name,difficulty,duration,season}=req.body;
//         await Activity.create({
//             name,
//             difficulty,
//             duration,
//             season
//         })
//         res.send('Actividad creada con éxito')
//     } catch (error) {
//         res.status(404).json({"error":error.message})
//     }
// })

// router.post('/countries',async (req,res)=>{
// //hay que setear la base de datos el encoding del client para que funcione bien SET CLIENT_ENCODING TO 'UTF8';
//     try {
//       const response=await fetch('https://restcountries.com/v3/all');
//       const json=await response.json();
//       const countries= json.map(element=>Country.create({
//         ID:element.cca3,
//         name:element.name.common,
//         flagImage:element.flags[1],
//         continent:element.continents,
//         capital:element.capital, //hay problemas con algunos datos que son null en capital
//         subregion:element.subregion,
//         area:element.area,
//         population:element.population
        
//     }))
//     await Promise.all(countries)
    
//     res.json('se cargó la base de datos countries')
        
//     } catch (error) {
//         res.status(404).json({"error":error.message})
//     }
// })


// router.get('/countries', async (req,res,next)=>{
//     try {
//         let {name,continent}=req.query;
//         if(name){
//             const countries=await Country.findAll({
//                 attributes: ['ID','flagImage', 'name','continent'],
//                 where: {
//                     name: {[Op.like]:`%${name}%`},
//                   }
//             })      
            
//             if(countries.length===0) return res.json({"Error":"No existe ningún país con ese criterio"})
                   
//             return res.json(countries) //sin return genera problemas de Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client
            
//         }
//         else if(continent){
//             const countries=await Country.findAll({
//                 attributes: ['ID','flagImage', 'name','continent'],
//                 where: {
//                     continent:[continent],
//                   }
//             })      
            
//             if(countries.length===0) return res.json({"Error":"No existen países con ese criterio"})
                   
//             return res.json(countries)
//         }
//         const countries= await Country.findAll({
//             attributes: ['ID','flagImage', 'name','continent']
//           });
//        return res.json(countries)
//     } catch (error) {
//         res.status(404).json({"error":error.message})
//     }
// })


// router.get('/countries/:id', async (req,res)=>{
//     const {id}=req.params;
//     try {
//         const country=await Country.findByPk(id,
//             {
//                 attributes:['flagImage', 'name','continent','ID','capital','subregion','area','population'],
//                 include: Activity
//             }
            
//         )
//         res.json(country);
//     } catch (error) {
//         res.status(404).json({"error":error.message})
//     }
// })

// router.get('/countries',async (req,res)=>{
//     try {
//         const countries= await Country.findAll({
//             attributes: ['flagImage', 'name','continent']
//           });
//         // console.log(countries);
//         res.json(countries)
//     } catch (error) {
//         res.status(404).json({"error":error.message})
//     }
// })


