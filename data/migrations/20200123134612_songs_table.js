
exports.up = function(knex) {
    // REMEMBER THE return
    return knex.schema.createTable('songs', table => {
        // id column, integer, primary key, auto-increment
        table.increments();

        table.string('name', 255).index();

        table.integer('duration');

        table.string('artist').index();

        table.boolean('favorite').defaultTo(false);
        // most RDBMS store 1 for true and 0 for false

        table.timestamps(true, true); // adds created_at and updated_at columns
    });
};

// undo the changes from the up function (rollback)
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('songs')
};
