
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('images').del()
    .then(function () {
      // Inserts seed entries
      return knex('images').insert([
      { id: 1, name: '', publicId:'IMG_20181021_100334.jpg'},
      {id: 2, name: '', publicId: 'IMG_20181009_103435.jpg'},
      {id: 3, name: '', publicId: 'IMG_20181005_112851.jpg'},
      {id: 4, name: '', publicId: 'IMG_20180827_105700_2.jpg'},
      {id: 5, name: '', publicId: 'IMG_20180816_093007_2.jpg'},
      {id: 6, name: '', publicId: 'IMG_20180816_092910_2.jpg'},
      {id: 7, name: '', publicId: 'IMG_20180802_113102_2.jpg'},
      {id: 8, name: '', publicId: 'IMG_20180930_114921_2.jpg'},
      {id: 9, name: '', publicId: 'IMG_20180929_090028_2.jpg'},
      {id: 10, name: '', publicId: 'IMG_20180929_085949_2.jpg'},
      {id: 11, name: '', publicId: 'IMG_20180929_085737_2.jpg'},
      {id: 12, name: '', publicId: 'IMG_20180922_093406_1.jpg'},
      {id: 13, name: '', publicId: 'IMG_20180922_093330_1.jpg'},
      {id: 14, name: '', publicId: 'IMG_20180919_111752.jpg'},
      {id: 15, name: '', publicId: 'IMG_20180918_085623.jpg'},
      {id: 16, name: '', publicId: 'IMG_20180916_113112.jpg'},
      {id: 17, name: '', publicId: 'IMG_20180903_102104.jpg'},
      {id: 18, name: '', publicId: 'IMG_20180903_102040.jpg'},
      {id: 19, name: '', publicId: 'IMG_20180901_103104.jpg'},
      {id: 20, name: '', publicId: 'IMG_20180730_105540.jpg'},
      {id: 21, name: '', publicId: 'IMG_20180716_154334.jpg'},
      {id: 22, name: '', publicId: 'IMG_20180714_150039_2.jpg'},
      {id: 23, name: '', publicId: 'IMG_20180712_134528.jpg'},
      {id: 24, name: '', publicId: 'IMG_20180704_132904_3.jpg'},
      {id: 25, name: '', publicId: 'IMG_20180630_122337.jpg'},
      {id: 26, name: '', publicId: 'IMG_20180630_110926.jpg'},
      {id: 27, name: '', publicId: 'IMG_20180628_124641.jpg'},
      {id: 28, name: '', publicId: 'IMG_20180621_103101_2.jpg'},
      {id: 29, name: '', publicId: 'IMG_20180617_100028.jpg'},
      {id: 30, name: '', publicId: 'IMG_20180615_121012_2.jpg'},
      {id: 31, name: '', publicId: 'IMG_20180605_145807.jpg'},
      {id: 32, name: '', publicId: 'IMG_20180604_104457_2.jpg'},
      {id: 33, name: '', publicId: 'IMG_20180519_133801_4.jpg'},
      {id: 34, name: '', publicId: 'IMG_20180508_154446_2.jpg'},
      { id: 35,name: '', publicId: 'IMG_20181022_094310.jpg' }
      ])
    }).then(() => {
      return knex.raw(
        `SELECT setval('images_id_seq', (SELECT MAX(id) FROM images));`
      )
    })
}


