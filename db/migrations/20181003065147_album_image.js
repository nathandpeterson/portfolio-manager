
exports.up = function(knex, Promise) {
  return knex.schema.createTable('album_image', (table) => {
    table.integer('album_id').notNullable()
    table.foreign('album_id').references('albums.id')
    table.integer('image_id').notNullable()
    table.foreign('image_id').references('images.id')
    table.integer('sortPosition').defaultsTo(null)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('album_image')
};
