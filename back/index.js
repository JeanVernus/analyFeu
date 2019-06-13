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
  const text = req.body.Text;
  const email = req.body.Email;
  const sujet = req.body.Sujet;
  const nodemailer = require("nodemailer");

  let transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    auth: {
      type: "login",
      user: "",
      pass: "",
    }
  });
  let mailOptions = {
    from: `${email}`,
    to: '"JeanVernus"<jeannywcs@gmail.com>',
    subject: "analyFeu",
    text: "",
    html: `${firstName}""${lastName}<br />${sujet}""${company}<br />${text}`
  };
  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log(err.message);
      return process.exit(1)
    }
    else {
      console.log(info);
    }
  });
})

App.listen(Port, () => {
  console.log(`server started on ${Port}`);
})