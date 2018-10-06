
exports.up = function(knex, Promise) {
  return knex.schema.createTable('user_album', (table) => {
    table.integer('album_id').notNullable()
    table.foreign('album_id').references('albums.id')
    table.integer('user_id').notNullable()
    table.foreign('user_id').references('users.id')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('user_album')
};
