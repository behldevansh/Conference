import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config(); // Load .env file contents into process.env

export async function POST(req: Request) {
  if (req.method === "POST") {
    try {
      const {
        first_name,
        last_name,
        email,
        university_name,
        help,
        info,
      } = await req.json();

      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      const mailOptions = {
        from: email,
        to: process.env.EMAIL_USER,
        subject: "Contact Form Submission",
        html: `
          <h1>Contact Form</h1>
          <p>First Name: ${first_name}</p>
          <p>Last Name: ${last_name}</p>
          <p>Email: ${email}</p>
          <p>University Name: ${university_name}</p>
          <p>Help: ${help}</p>
          <p>Info: ${info}</p>
        `,
      };

      await transporter.sendMail(mailOptions);

      return NextResponse.json("email has been sent");
    } catch (error) {
      return NextResponse.json("email has not been sent");
    }
  } else {
    return NextResponse.json("method not allowed");
  }
}
