const supabase = require('../config/supabaseClient');

const User = {
  async getAll() {
    const { data, error } = await supabase.from('User_Info').select('*');
    if (error) throw new Error(error.message);
    return data;
  },

  async getById(id) {
    const { data, error } = await supabase.from('User_Info').select('*').eq('id', id).single();
    if (error) throw new Error(error.message);
    return data;
  },

  async create(user) {
    const { data, error } = await supabase.from('User_Info').insert([user]);
    if (error) throw new Error(error.message);
    return data;
  },

  async update(id, updates) {
    const { data, error } = await supabase.from('User_Info').update(updates).eq('id', id);
    if (error) throw new Error(error.message);
    return data;
  },

  async delete(id) {
    const { data, error } = await supabase.from('User_Info').delete().eq('id', id);
    if (error) throw new Error(error.message);
    return data;
  },
};

module.exports = User;