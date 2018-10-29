
exports.up = function(knex, Promise) {
  return knex.schema.createTable('information', table => {
    table.increments()
    table.text('about').defaultsTo('')
    table.string('homepage_image').defaultsTo('')
    table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('information')
};
