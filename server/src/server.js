require('dotenv').config(); 
const app = require('./src/app');
const PORT = process.env.PORT || 4000;
const supabase = require('./src/config/supabaseClient');

app.listen(PORT, () => {
    console.log(`Connected to port ${PORT}`);
})