const db = require('../database/mysql');
const bcrypt = require('bcrypt');
async function findOneAdmin(admin) {
    try {
        const [rows, fields] = await db.query('SELECT * FROM account_admin WHERE email = ?', [admin]);
        if (rows.length === 0) {
            return null;
        }
        return rows[0];
    } catch (error) {
        console.log(error);
        return null;
    }
}

async function saveAdmin(email, password) {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        await db.query('INSERT INTO account_admin (email, password) VALUES (?, ?)', [email, hashedPassword]);
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
}

module.exports = {
    findOneAdmin,
    saveAdmin,
};
