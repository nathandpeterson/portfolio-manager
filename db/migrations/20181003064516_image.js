
exports.up = function(knex, Promise) {
  return knex.schema.createTable('images', table => {
    table.increments()
    table.string('name').notNullable().defaultsTo('')
    table.string('description').defaultsTo('')
    table.string('size').defaultsTo('')
    table.string('date').defaultsTo('')
    table.timestamps(true, true)
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('images')
}
