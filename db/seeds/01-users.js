
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { id: 1, 
          first_name: 'nathan', 
          last_name: 'peterson',
          email: 'natperson@gmail.com', 
          hashed_password: 'password',
          role: 'DEVELOPER'
        },
        { id: 2, 
          first_name: 'Stephen', 
          last_name: 'Rawls',
          hashed_password: 'password', 
          email: 's2rawls@gmail.com',
          role: 'ADMIN'
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
