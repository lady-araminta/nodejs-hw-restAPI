const dotenv = require("dotenv");
const nodemailer = require("nodemailer");

dotenv.config();

const { META_PASSWORD } = process.env;

const nodemailerConfig = {
  host: "smtp.meta.ua",
  port: 465,
  secure: true,
  auth: {
    user: "erise@meta.ua",
    pass: META_PASSWORD,
  },
};

const transport = nodemailer.createTransport(nodemailerConfig);

const sendEmail = async (data) => {
  try {
    const email = { ...data, from: "erise@meta.ua" };
    await transport.sendMail(email);
    return true;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = sendEmail;
