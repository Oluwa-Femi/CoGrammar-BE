const nodemailer = require('nodemailer');
const nodeMailerSendgrid = require('nodemailer-sendgrid');

const emailNotification = (req, res) => {
  const transporter = nodemailer.createTransport(
    nodeMailerSendgrid({
      apiKey: process.env.SENDGRID_API_KEY,
    }),
  );

  const mailOptions = {
    from: 'oluwatolablessing@gmail.com',
    to: 'oluwatolablessing@gmail.com',
    subject: `Contact name: ${req.body.name}`,
    html: `<h1>Contact details</h1>
    <h2> name:${req.body.name} </h2><br>
    <h2> email:${req.body.email} </h2><br>
    <h2> phonenumber:${req.body.phonenumber} </h2><br>
    <h2> message:${req.body.message} </h2><br>`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      res.send('error');
    } else {
      return res.status(200).json({
        message: 'Email sent sucessfully',
      });
    }
  });
};


module.exports = emailNotification;
