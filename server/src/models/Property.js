const supabase = require('../config/supabaseClient');

const Listing = {
    async getAll() {
      const { data, error } = await supabase.from('listing').select('*');
      if (error) throw new Error(error.message);
      return data;
    },
  
    async getByAddress(address) {
      const { data, error } = await supabase.from('listing').select('*').eq('address', address).single();
      if (error) throw new Error(error.message);
      return data;
    },
  
    async create(listing) {
      const { data, error } = await supabase.from('listing').insert([listing]);
      if (error) throw new Error(error.message);
      return data;
    },
  
    async update(address, updates) {
      const { data, error } = await supabase.from('listing').update(updates).eq('address', address);
      if (error) throw new Error(error.message);
      return data;
    },
  
    async delete(address) {
      const { data, error } = await supabase.from('listing').delete().eq('address', address);
      if (error) throw new Error(error.message);
      return data;
    },
};

module.exports = Listing;