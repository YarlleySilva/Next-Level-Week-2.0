import Knex from "knex";

export async function up(knex: Knex) {
  return knex.schema.createTable("class_schedule", table => {
    table.increments("id").primary();

    table.integer("week_day").notNullable(); //dia da semana
    table.integer("from").notNullable(); //horario de inicio
    table.integer("to").notNullable(); //horario de fim

    table.integer("class_id")
      .notNullable()
      .references("id")
      .inTable("classes")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable("class_schedule");
}