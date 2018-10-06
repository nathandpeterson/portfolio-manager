
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('album_image').del()
    .then(function () {
      // Inserts seed entries
      return knex('album_image').insert([
        {album_id: 1, image_id: 1},
        {album_id: 1, image_id: 2},
        {album_id: 2, image_id: 3},
        {album_id: 2, image_id: 4},
        {album_id: 3, image_id: 5},
        {album_id: 3, image_id: 6},
        {album_id: 4, image_id: 7},
        {album_id: 4, image_id: 8},
        {album_id: 5, image_id: 9},
        {album_id: 5, image_id: 10},
        {album_id: 6, image_id: 11},
        {album_id: 6, image_id: 12},
      ])
    })
}
