const Hoot = require('../models/hoot');

const create = async (req, res) => {
  try {
    // grab the user id from the token and add it to the form submission
    req.body.author = req.user._id;

    // Create the new Hoot
    const newHoot = await Hoot.create(req.body);

    // dont populate, becuase we will expose the password (password scrum is on teh user model, but we call .json on the hoot model)

    // newHoot._doc.author = req.user;
    await newHoot.populate('author', 'username');

    res.status(201).json(newHoot);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ err: error.message });
  }
};

module.exports = { create };
