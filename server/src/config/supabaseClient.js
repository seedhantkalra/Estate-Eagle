const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '../.env' });

const supabaseUrl = 'https://zgbbuemhsvqwyztmiyyk.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpnYmJ1ZW1oc3Zxd3l6dG1peXlrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTYwNDIzNjUsImV4cCI6MjAzMTYxODM2NX0.1iz5t0jjfndeeLM5ODOsdGCdqne5XRiH81quT1wolf0';
const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = supabase