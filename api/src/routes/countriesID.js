const { Country ,Activity } =require('../db')

const router = require('express').Router();

router.get('/:id', async (req,res)=>{
    const {id}=req.params;
    console.log(id);
    try {
        const country=await Country.findByPk(id,
            {
                attributes:['flagImage', 'name','continent','ID','capital','subregion','area','population'],
                include: Activity
            }
            
            )
            console.log();
        res.json(country);
    } catch (error) {
        res.status(404).json({"error":error.message})
    }
})

module.exports=router
