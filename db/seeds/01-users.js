const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'x1oirfj39-290Am9-9'

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
          hashed_password: ADMIN_PASSWORD,
          role: 'DEVELOPER'
        },
        { id: 2, 
          first_name: 'Stephen', 
          last_name: 'Rawls',
          hashed_password: ADMIN_PASSWORD, 
          email: 's2rawls@gmail.com',
          role: 'ADMIN'
        }
      ])
    }).then(() => {
      return knex.raw(
        `SELECT setval('users_id_seq', (SELECT MAX(id) FROM users));`
      )
    })
}
