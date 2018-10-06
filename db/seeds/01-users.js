
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { id: 1, 
          first_name: 'nathan', 
          last_name: 'peterson', 
          hashed_password: 'cornbread',
          role: 'DEVELOPER'
        },
        { id: 2, 
          first_name: 'galen', 
          last_name: 'longstreth', 
          hashed_password: 'string-cheese',
          role: 'USER'
        },
        { id: 3, 
          first_name: 'wren', 
          last_name: 'peterson', 
          hashed_password: 'pizza',
          role: 'USER'
        }
      ])
    }).then(() => {
      return knex.raw(
        `SELECT setval('users_id_seq', (SELECT MAX(id) FROM users));`
      )
    })
}
