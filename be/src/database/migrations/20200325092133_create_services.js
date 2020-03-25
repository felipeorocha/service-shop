exports.up = function(knex) {
  return knex.schema.createTable('services', function(table){
    table.increments();
    table.string('title').notNullable();
    table.string('description').notNullable();
    table.decimal('value').notNullable();
    table.string('enterprise_id').notNullable();
    table.foreign('enterprise_id').references('id').inTable('enterprises');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('services');
};
