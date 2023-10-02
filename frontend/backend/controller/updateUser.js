const User = require('../models/User'); 

exports.updateUser = async (req, res) => {
    const userId = req.params.id;
    // console.log("req body : ", req.body);
    // console.log("userId : ", userId);
    const { name, email, title, department } = req.body;

    try {
        // Construct an object containing only the fields that have been changed
        const updatedFields = {};
        if (name) updatedFields.name = name;
        if (email) updatedFields.email = email;
        if (title) updatedFields.title = title;
        if (department) updatedFields.department = department;

        // Find the user by userId and update the specified fields
        const updatedUser = await User.findByIdAndUpdate(
            userId,
            { $set: updatedFields },
            { new: true }
        );

        // If the user does not exist, return an error
        if (!updatedUser) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Return the updated user object as the response
        res.json(updatedUser);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
};





