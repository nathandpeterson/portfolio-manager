
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('albums').del()
    .then(function () {
      // Inserts seed entries
      return knex('albums').insert([
        { id: 1, 
          album_name: 'christmas', 
          album_description: 'christmas stuff'
        },
        { id: 2, 
          album_name: 'life', 
          album_description: 'life stuff'
        }, 
        { id: 3, 
          album_name: 'birthday', 
          album_description: 'birthday stuff'
        },
        { id: 4, 
          album_name: 'fall', 
          album_description: 'fall stuff'
        },
        { id: 5, 
          album_name: 'halloween', 
          album_description: 'halloween stuff'
        },
        { id: 6, 
          album_name: 'winter', 
          album_description: 'winter stuff'
        }
      ]);
    }).then(() => {
      return knex.raw(
        `SELECT setval('albums_id_seq', (SELECT MAX(id) FROM albums));`
      )
    })
};
