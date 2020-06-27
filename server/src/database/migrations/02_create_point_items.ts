//quando a gente quer se referir ao tipo da variavel, então definimos com a primeira letra maiuscula
import Knex from 'knex';

// knex: Knex - knex do tipo Knex
export async function up(knex: Knex) {
    //CRIAR A TABELA
    return knex.schema.createTable('point_items', table => {
        table.increments('id').primary();
        table.integer('point_id')
            .notNullable()
            .references('id')
            .inTable('points');

        table.integer('item_id')
            .notNullable()
            .references('id')
            .inTable('items');
    })
}

export async function down(knex: Knex) {
    //VOLTAR ATRAS (DELETAR A TABELA)
    return knex.schema.dropTable('point_items');
}