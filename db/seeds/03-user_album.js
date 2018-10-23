
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user_album').del()
    .then(function () {
      // Inserts seed entries
      return knex('user_album').insert([
        {user_id: 1, album_id: 1}
      ]);
    });
};
