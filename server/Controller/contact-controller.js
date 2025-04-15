const contact = require('../models/contact-model');

const contactForm = async(req, res) =>
{
   try {
    const response = req.body;
    await contact.create(response);
    res.status(200).json({message : "Contact form send Successfully"});

   } catch (error) {
      console.log(error);
    res.status(200).json({message: "server Error"})
   }


}

module.exports = contactForm;