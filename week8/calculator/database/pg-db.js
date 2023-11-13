const HttpError = require('../models/http-error')
require ('dotenv').config();

const pgp = require ('pg-promise')(
    {
        capSQL : true
    }
);

const cn = {
    host : process.env.PG_HOST,
    port : process.env.PG_PORT,
    database : process.env.PG_DATABASE,
    user : process.env.PG_USER,
    password : process.env.PG_PASSWORD,
    max : 30
}

const db = pgp(cn);

module.exports = {
    getAll : async (tbName) => {
        let dbcn = null;
        try {
            dbcn = await db.connect();
            const data = await dbcn.any(`SELECT * FROM ${{tbName}}`);
            return data;
        }
        catch (error) {
            throw new HttpError(error.message, 500);
        }
        finally {
            dbcn.done();
        }
    }, 
    insert : async (tbName, entity) => {
        const query = pgp.helpers.insert(entity, null, tbName);
        console.log(query);
        const data = await db.one(query + 'RETURNING id');
        return data;
    }
}