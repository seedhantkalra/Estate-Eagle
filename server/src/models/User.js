const supabase = require('../config/supabaseClient');

const User = {
  async getAll() {
    const { data, error } = await supabase.from('user_info').select('*');
    if (error) throw new Error(error.message);
    return data;
  },

  async getById(id) {
    const { data, error } = await supabase.from('user_info').select('*').eq('id', id).single();
    if (error) throw new Error(error.message);
    return data;
  },

  async create(user) {
    const { data, error } = await supabase.from('user_info').insert([user]);
    if (error) throw new Error(error.message);
    return data;
  },

  async update(id, updates) {
    const { data, error } = await supabase.from('user_info').update(updates).eq('id', id);
    if (error) throw new Error(error.message);
    return data;
  },

  async delete(id) {
    const { data, error } = await supabase.from('user_info').delete().eq('id', id);
    if (error) throw new Error(error.message);
    return data;
  },
};

module.exports = User;