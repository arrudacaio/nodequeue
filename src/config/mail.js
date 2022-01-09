const {
  MAIL_HOST,
  MAIL_PORT,
  MAIL_AUTH_USER,
  MAIL_AUTH_PASS
} = process.env

export default {
  host: MAIL_HOST,
  port: MAIL_PORT,
  auth: {
    user: MAIL_AUTH_USER,
    pass: MAIL_AUTH_PASS
  }
}
