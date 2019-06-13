const Express = require('express');
const Cors = require('cors');
const BodyParser = require('body-parser');

const Port = 5000;

const App = Express();
App.use(Cors());
App.use(BodyParser.json());
App.use(BodyParser.urlencoded({ extended: true }));

App.post('/sendForm', (req, res) => {
  console.log('req.body', req.body);
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const company = req.body.company;
  const text = req.body.text;
  const email = req.body.email;
  const subject = req.body.subject;
  const job = req.body.job;
  const nodemailer = require("nodemailer");

  let transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    auth: {
      type: "login",
      user: "jeannywcs@gmail.com",
      pass: "Enigmhatik777",
    }
  });
  let mailOptions = {
    from: `${email}`,
    to: '"JeanVernus"<jeannywcs@gmail.com>',
    subject: "analyFeu",
    text: "",
    html: `${firstName}""${lastName}<br />${company}""${job}<br />${subject}<br />${text}`
  };
  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      res.status(500).json("error")
      console.log(err.message);
      return process.exit(1)
    }
    else {
      res.status(200).json("send")
      console.log(info);
    }
  });
});

App.listen(Port, () => {
  console.log(`server started on ${Port}`);
})