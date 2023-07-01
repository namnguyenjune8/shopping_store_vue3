const express = require('express');
const router = express.Router();
const {findOneAdmin, saveAdmin} = require('../schema_table/user_Admin');

router.post('/signup_admin', async (req, res) => {
    let email = await findOneAdmin(req.body.email);
    if (email) 
    return res.status(400).json({ message: 'Username already exists' });

    await saveAdmin(req.body.email, req.body.password);

    return res.status(200).json({ message: 'Sign Up Success!' });
});
module.exports = router;
