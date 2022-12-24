// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

const validateField = (value: string, field: string): boolean => {
  switch (field) {
    case "name":
      return /^[\w -]+$/.test(value) && value.length > 2;
    case "days":
      return /^[0-9]+$/.test(value);
    case "phone":
      return /^[\d]+$/.test(value) && value.length === 9;
    case "date":
      return /^[\d] [a-z]+ 2022|3$/i.test(value);
    case "email":
      return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        value
      );
    default:
      return /^[^{}*#|\\\][]+$/.test(value);
  }
};

const Contact: NextApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const message = {
    from: `Contact From (${process.env.NEXT_PUBLIC_BASE_URL}) <${process.env.MAILER_SENDER}>`,
    to: process.env.MAILER_RECEIVER,
    replyTo: "",
    subject: "",
    text: "",
    html: "",
  };

  const transport = nodemailer.createTransport({
    host: process.env.MAILER_HOST,
    port: Number(process.env.MAILER_PORT),
    secure: true,
    auth: {
      user: process.env.MAILER_SENDER,
      pass: process.env.MAILER_PASSWORD,
    },
  });

  // ensure transport is working
  await new Promise((resolve, reject) => {
    console.log("Attempting to verify nodemailer config");
    transport.verify((err, success) => {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        console.log("Server ready to send mail");
        resolve(success);
      }
    });
  });
  const errors: any[] = [];
  const body = JSON.parse(req.body);
  console.log(body);
  /**
    name,
    email,
    phone,
    fitness,
    group,
    date,
    journey
   */

  const keys = Object.keys(body).filter((key) =>
    body.isCustom ? !/isCustom/.test(key) : !/days|isCustom/.test(key)
  );
  // Validate the body
  keys.forEach((key) => {
    const field = body[key];
    const isValid = validateField(field, key);
    if (!isValid) {
      errors.push({ field: key, value: field });
    }
  });
  console.log(errors);

  if (errors.length > 0) {
    res.status(500).json({
      success: false,
      message: "Failed to validates fields",
      errors,
    });
  } else {
    message.replyTo = body.email;
    message.html = `<p>Name: ${body.name}</p>`;
    message.html += `<p>Email: ${body.email}</p>`;
    message.html += `<p>Phone: ${body.phone}</p>`;
    message.html += `<p>Activity Level: ${body.fitness}</p>`;
    message.html += `<p>Group Size: ${body.group}</p>`;
    message.html += `<p>Preferred Tour Date: ${body.date}</p>`;
    message.text = `Name: ${body.name}\n\n`;
    message.text += `Email: ${body.email}\n\n`;
    message.text += `Phone: ${body.phone}\n\n`;
    message.text += `Activity Level: ${body.fitness}\n\n`;
    message.text += `Group Size: ${body.group}\n\n`;
    message.text += `Preferred Tour Date: ${body.date}\n\n`;
    if (body.isCustom) {
      message.text += `Preferred Tour Length: ${body.days}\n\n`;
      message.html += `<p>Preferred Tour Length: ${body.days}</p>`;
    }
    message.subject = `New Booking for ${body.journey}`;

    await new Promise((resolve, reject) => {
      // Send message
      transport.sendMail(message, (err, info) => {
        if (err) {
          console.error(err);
          reject(err);
        } else {
          console.log(info);
          resolve(info);
        }
      });
    });

    // Respond to the user
    res.status(200).json({ success: true, message: "Success" });
  }
};

export default Contact;
