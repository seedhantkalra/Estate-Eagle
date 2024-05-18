const express = require('express')
const supabase = require('../config/supabaseClient')
const propertyRouter = express.Router()

propertyRouter.get('/', async (req, res) => { 
    let { data: Listings, error } = await supabase
        .from('Listings')
        .select('*')

    if(error) {
        return res.status(400).json({error})
    }

    console.log(Listings)

    res.status(200).json({ listings: Listings });
})

module.exports = propertyRouter