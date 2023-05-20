const express = require('express');
const router = express.Router();
const {findOneUser, saveUser} = require('../schema_table/users');

router.post('/signup', async (req, res) => {
    let user = await findOneUser(req.body.user);
    if (user) 
    return res.status(400).json({ message: 'Username already exists' });

    await saveUser(req.body.user, req.body.password);

    return res.status(200).json({ message: 'Sign Up Success!' });
});
module.exports = router;
