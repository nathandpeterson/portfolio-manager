
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('albums').del()
    .then(function () {
      // Inserts seed entries
      return knex('albums').insert([
        { id: 1, 
          album_name: 'christmas', 
          album_description: 'christmas stuff',
          key_image_id: 'test-upload/18304548790_b1a3ef409f_o_xnf6re.jpg'
        },
        { id: 2, 
          album_name: 'life', 
          album_description: 'life stuff',
          key_image_id: 'test-upload/hmwvnnahrrjl2e4jqjed.jpg'
        }, 
        { id: 3, 
          album_name: 'birthday', 
          album_description: 'birthday stuff',
          key_image_id: 'test-upload/17871569293_8300e87eb4_o_ia9l77.jpg'
        }
      ]);
    }).then(() => {
      return knex.raw(
        `SELECT setval('albums_id_seq', (SELECT MAX(id) FROM albums));`
      )
    })
};
