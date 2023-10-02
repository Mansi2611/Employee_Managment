const User = require("../models/User");


exports.editUser = async (req, res) => {
    const userId = req.params.id;
    console.log("userId here : ", userId);
    try {
        const response = await User.findById(userId);
        console.log("response :", response.name);

        if (!response) {
            console.log("user not found....");
            return res.status(404).json({ message: "User not found" });
        }

        // Return the user data as a JSON response
        return res.status(200).json(response);

    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};
