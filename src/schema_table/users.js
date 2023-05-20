const db = require('../database/mysql');
const bcrypt = require('bcrypt');
async function findOneUser(user) {
    try {
        const [rows, fields] = await db.query('SELECT * FROM user_table WHERE user = ?', [user]);
        if (rows.length === 0) {
            return null;
        }
        return rows[0];
    } catch (error) {
        console.log(error);
        return null;
    }
}

async function saveUser(user, password) {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        await db.query('INSERT INTO user_table (user, password) VALUES (?, ?)', [user, hashedPassword]);
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
}

module.exports = {
    findOneUser,
    saveUser,
};
