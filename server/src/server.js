require('dotenv').config(); 
const app = require('./app');
const PORT = process.env.PORT || 4000;
const supabase = require('./config/supabaseClient');

app.listen(PORT, () => {
    console.log(`Connected to port ${PORT}`);
})