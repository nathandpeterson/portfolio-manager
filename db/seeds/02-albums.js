
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('albums').del()
    .then(function () {
      // Inserts seed entries
      return knex('albums').insert([
        { id: 1, 
          album_name: '2018', 
          album_description: '',
          key_image_id: 'IMG_20181021_100334.jpg'
        }
      ]);
    }).then(() => {
      return knex.raw(
        `SELECT setval('albums_id_seq', (SELECT MAX(id) FROM albums));`
      )
    })
};
