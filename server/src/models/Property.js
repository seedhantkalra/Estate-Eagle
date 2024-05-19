const supabase = require('../config/supabaseClient');

const Listing = {
    async getAll() {
      const { data, error } = await supabase.from('Listings').select('*');
      if (error) throw new Error(error.message);
      return data;
    },
  
    async getByAddress(address) {
      const { data, error } = await supabase.from('Listings').select('*').eq('address', address).single();
      if (error) throw new Error(error.message);
      return data;
    },
  
    async create(listing) {
      const { data, error } = await supabase.from('Listings').insert([listing]);
      if (error) throw new Error(error.message);
      return data;
    },
  
    async update(address, updates) {
      const { data, error } = await supabase.from('Listings').update(updates).eq('address', address);
      if (error) throw new Error(error.message);
      return data;
    },
  
    async delete(address) {
      const { data, error } = await supabase.from('Listings').delete().eq('address', address);
      if (error) throw new Error(error.message);
      return data;
    },
};

module.exports = Listing;