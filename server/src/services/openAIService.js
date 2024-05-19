const { Configuration, OpenAIApi } = require('openai');
const axios = require('axios');
require('dotenv').config();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const processSearchQuery = async (searchQuery) => {
  try {
    const prompt = `
      You are a SQL expert. Convert the following natural language search query into a SQL query:
      "${searchQuery}"
      Only output the SQL query, nothing else.
    `;

    const response = await openai.createCompletion({
      model: 'text-davinci-002',
      prompt: prompt,
      max_tokens: 100,
      n: 1,
      stop: null,
      temperature: 0.5,
    });

    const sqlQuery = response.data.choices[0].text.trim();
    return sqlQuery;
  } catch (error) {
    console.error('Error generating SQL query:', error);
    throw error;
  }
};
