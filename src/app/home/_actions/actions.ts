'use server'

import prisma from '@/lib/prisma'
import { ContactForm } from '../_components/ContactForm'
import { transporter } from '@/lib/nodemailer'

export const createForm = async ({ email, message, name }: ContactForm) => {
  try {
    const form = await prisma.contactForm.create({
      data: { email, message, name }
    })
    return form
  } catch (error) {
    return null
  }
}

export const sendContactEmail = async ({
  email,
  message,
  name
}: ContactForm) => {
  const mailOptions = {
    from: process.env.MAIL,
    to: process.env.MAIL,
    subject: 'New Contact Form inserted',
    text: `${message}`,
    html: `<!DOCTYPE html>
                <html>
                  <head>
                    <meta charset="UTF-8">
                    <title>Nuevo Formulario de Contacto</title>
                    <style>
                      body {
                        font-family: Arial, sans-serif;
                        background-color: #f5f5f5;
                      }
                      .container {
                        max-width: 600px;
                        margin: 0 auto;
                        background-color: #ffffff;
                        padding: 20px;
                        border-radius: 5px;
                        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                      }
                      .header {
                        text-align: center;
                        margin-bottom: 20px;
                      }
                      .content {
                        line-height: 1.5;
                      }
                    </style>
                  </head>
                  <body>
                    <div class="container">
                      <div class="header">
                        <h1>Nuevo Formulario de Contacto</h1>
                      </div>
                      <div class="content">
                        <p>${message}</p>
                        <p><b>${name} con ${email} está intentando contactar con Kamay Labs</b></p>
                      </div>
                    </div>
                  </body>
                </html>`
  }

  try {
    await transporter.sendMail(mailOptions)
  } catch (error) {
    console.log(error)
  }
}
