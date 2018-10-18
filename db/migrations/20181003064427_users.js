
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', table => {
    table.increments()
    table.string('first_name').defaultsTo('')
    table.string('last_name').defaultsTo('')
    table.string('email').notNullable().defaultsTo('')
    table.string('hashed_password').notNullable().defaultsTo('')
    table.string('role').notNullable().defaultsTo('')
    table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users')
};
