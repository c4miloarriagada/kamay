import { createTransport } from 'nodemailer'

export const transporter = createTransport({
  //@ts-ignore
  service: 'gmail',
  auth: {
    type: 'OAuth2',
    user: process.env.MAIL,
    pass: process.env.PASS,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    refreshToken: process.env.REFRESH_TOKEN
  }
})
