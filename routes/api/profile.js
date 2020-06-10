const express = require('express');
const router = express.Router();
const Profile = require('../../models/Profile');
const User = require('../../models/User');
const auth = require('../../middleware/auth');

//@route GET api/profile/me
//@desc Get current user profile
//@access Private
router.get('/me', auth, async (req, res) => {
    try {

        const profile = await Profile.findOne({ user: req.user.id })
            .populate('user', ['name', 'avatar']);

        if (!profile) {
            return res.status(400).json({
                message: "There is no profile for this user"
            });
        }

    } catch (err) {
        console.error(err.message);
        res.status(500).send('server error');
    }
});

module.exports = router;