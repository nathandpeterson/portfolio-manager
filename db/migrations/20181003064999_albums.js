
exports.up = function(knex, Promise) {
  return knex.schema.createTable('albums', table => {
    table.increments()
    table.string('album_name').notNullable().defaultsTo('')
    table.string('album_description').defaultsTo('')
    table.integer('key_image_id')
    table.timestamps(true, true)
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('albums')
};
