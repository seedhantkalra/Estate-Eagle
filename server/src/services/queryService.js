const supabase = require('../config/supabaseClient');
const { generateQuery } = require('./openAIService');

const executeNaturalLanguageQuery = async (naturalLanguageQuery) => {
  const supabaseQuery = await generateQuery(naturalLanguageQuery);
  console.log(`Generated Supabase Query: ${supabaseQuery}`);
  
  const { data, error } = await supabase.rpc('execute_sql', { sql: supabaseQuery });
  
  if (error) {
    throw new Error(error.message);
  }
  
  return data;
};

module.exports = {
  executeNaturalLanguageQuery,
};
