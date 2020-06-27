import knex from 'knex';
import path from 'path';

const connection = knex({
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'database.sqlite'), //une caminhos, de acordo com o sistema operacional. Aqui vai cirar esse arquivo database.sqlite
    },
    useNullAsDefault: true,
});

export default connection;