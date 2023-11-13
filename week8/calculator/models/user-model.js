const db = require('../database/pg-db');

const tbName = 'User';

module.exports = class User {
    constructor ({id, email, first_name, last_name, avatar}){
        this.id = id;
        this.email = email;
        this.first_name = first_name;
        this.last_name = last_name;
        this.avatar = avatar;
    }
    static async run () {
        const rsF = await fetch('https://reqres.in/api/users?per_page=2');
        const data = await rsF.json();
        return data.data.map(p => {
            return new User(p);
        });
    }
    static async getAll () {
        const data = await db.getAll(tbName);
        return data;
    }
    static async insert(person) {
        const rs = await db.insert(tbName, person);
        return rs;
    }
}