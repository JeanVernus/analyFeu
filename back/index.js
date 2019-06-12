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
  const Text = req.body.Text;
  const Email = req.body.Email;
  const nodemailer = require("nodemailer");

  let transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    auth: {
      type: "login",
      user: "",
      pass: ""
    }
  });
  let mailOptions = {
    from: `${Email}`,
    to: '"JeanVernus"<jeannywcs@gmail.com>',
    subject: "Portefolio",
    text: "",
    html: `${firstName}"..."${lastName}<br />${job}"..."${company}<br />${Text}`,
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