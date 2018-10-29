
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('information').del()
    .then(function () {
      // Inserts seed entries
      return knex('information').insert([
        {id: 1, about: '', homepage_image: 'IMG_20180716_154334.jpg'}
      ]);
    });
};
