
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('album_image').del()
    .then(function () {
      // Inserts seed entries
      return knex('album_image').insert([
        {album_id: 1, image_id: 1, sortPosition: 1},
        {album_id: 1, image_id: 2, sortPosition: 2},
        {album_id: 1, image_id: 3, sortPosition: 3},
        {album_id: 1, image_id: 4, sortPosition: 4},
        {album_id: 1, image_id: 5, sortPosition: 5},
        {album_id: 1, image_id: 6, sortPosition: 6},
        {album_id: 1, image_id: 7, sortPosition: 7},
        {album_id: 1, image_id: 8, sortPosition: 8},
        {album_id: 1, image_id: 9, sortPosition: 9},
        {album_id: 1, image_id: 10, sortPosition: 10},
        {album_id: 1, image_id: 11, sortPosition: 11},
        {album_id: 1, image_id: 12, sortPosition: 12},
        {album_id: 1, image_id: 13, sortPosition: 13},     
        {album_id: 1, image_id: 14, sortPosition: 14},
        {album_id: 1, image_id: 15, sortPosition: 15},
        {album_id: 1, image_id: 16, sortPosition: 16},
        {album_id: 1, image_id: 17, sortPosition: 17},
        {album_id: 1, image_id: 18, sortPosition: 18},
        {album_id: 1, image_id: 19, sortPosition: 19},
        {album_id: 1, image_id: 20, sortPosition: 20},
        {album_id: 1, image_id: 21, sortPosition: 21},
        {album_id: 1, image_id: 22, sortPosition: 22},
        {album_id: 1, image_id: 23, sortPosition: 23},
        {album_id: 1, image_id: 24, sortPosition: 24},
        {album_id: 1, image_id: 25, sortPosition: 25},
        {album_id: 1, image_id: 26, sortPosition: 26},
        {album_id: 1, image_id: 27, sortPosition: 27},
        {album_id: 1, image_id: 28, sortPosition: 28},
        {album_id: 1, image_id: 29, sortPosition: 29},
        {album_id: 1, image_id: 30, sortPosition: 30},
        {album_id: 1, image_id: 31, sortPosition: 31},
        {album_id: 1, image_id: 32, sortPosition: 32},
        {album_id: 1, image_id: 33, sortPosition: 33},
        {album_id: 1, image_id: 34, sortPosition: 34},
        {album_id: 1, image_id: 35, sortPosition: 35},
      ])
    })
}
