
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('album_image').del()
    .then(function () {
      // Inserts seed entries
      return knex('album_image').insert([
        {album_id: 1, image_id: 1},
        {album_id: 1, image_id: 2},
        {album_id: 1, image_id: 3},
        {album_id: 1, image_id: 4},
        {album_id: 1, image_id: 5},
        {album_id: 1, image_id: 6},
        {album_id: 1, image_id: 7},
        {album_id: 1, image_id: 8},
        {album_id: 1, image_id: 9},
        {album_id: 1, image_id: 10},
        {album_id: 1, image_id: 11},
        {album_id: 1, image_id: 12},
        {album_id: 1, image_id: 13},     
        {album_id: 1, image_id: 14},
        {album_id: 1, image_id: 15},
        {album_id: 1, image_id: 16},
        {album_id: 1, image_id: 17},
        {album_id: 1, image_id: 18},
        {album_id: 1, image_id: 19},
        {album_id: 1, image_id: 20},
        {album_id: 1, image_id: 21},
        {album_id: 1, image_id: 22},
        {album_id: 1, image_id: 23},
        {album_id: 1, image_id: 24},
        {album_id: 1, image_id: 25},
        {album_id: 1, image_id: 26},
        {album_id: 1, image_id: 27},
        {album_id: 1, image_id: 28},
        {album_id: 1, image_id: 29},
        {album_id: 1, image_id: 30},
        {album_id: 1, image_id: 31},
        {album_id: 1, image_id: 32},
        {album_id: 1, image_id: 33},
        {album_id: 1, image_id: 34},
        {album_id: 1, image_id: 35},
      ])
    })
}
