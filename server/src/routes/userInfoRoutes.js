const express = require('express')
const supabase = require('../config/supabaseClient')
const userInfoRouter = express.Router()

userInfoRouter.get('/', async (req, res) => { 
    
    let { data: User_Info, error } = await supabase
        .from('User_Info')
        .select('*')
            

    if(error) {
        return res.status(400).json({error})
    }

    console.log(User_Info)

    res.status(200).json({ User_Info: User_Info });
})

module.exports = userInfoRouter