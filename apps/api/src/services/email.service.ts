import nodemailer from "nodemailer";

// In a production environment, you would use a real email service
// For development, you can use a test account from Ethereal
let transporter: nodemailer.Transporter

// Initialize email transporter
const initializeTransporter = async () => {
  if (process.env.NODE_ENV === "production") {
    // Production email service
    transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number.parseInt(process.env.EMAIL_PORT || "587"),
      secure: process.env.EMAIL_SECURE === "true",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })
  } else {
    // Development test account
    const testAccount = await nodemailer.createTestAccount()
    transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass,
      },
    })
  }
}

// Initialize transporter when the service is imported
initializeTransporter()

/**
 * Generic function to send emails
 * @param to Recipient email address
 * @param subject Email subject
 * @param html HTML content of the email
 * @param text Optional plain text version of the email
 * @returns Information about the sent email
 */
export const sendMail = async ({to, subject, html, text}:{
  to: string
  subject: string
  html: string
  text?: string
}) => {
  const mailOptions = {
    from: `"RemoteDevKit" <${process.env.EMAIL_FROM || "noreply@remotedevkit.com"}>`,
    to,
    subject,
    html,
    text: text || undefined,
  }

  try {
    const info = await transporter.sendMail(mailOptions)

    if (process.env.NODE_ENV !== "production") {
      // Log preview URL for development
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info))
    }

    return info
  } catch (error) {
    console.error("Error sending email:", error)
    throw error
  }
}

export const sendPasswordResetEmail = async (email: string, token: string) => {
  const resetUrl = `${process.env.FRONTEND_URL}/reset-password?token=${token}`

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2>Reset Your Password</h2>
      <p>You requested a password reset for your RemoteDevKit account.</p>
      <p>Click the button below to reset your password. This link is valid for 1 hour.</p>
      <a href="${resetUrl}" style="display: inline-block; background-color: #4F46E5; color: white; padding: 10px 20px; text-decoration: none; border-radius: 4px; margin: 20px 0;">Reset Password</a>
      <p>If you didn't request this, you can safely ignore this email.</p>
      <p>Thanks,<br>The RemoteDevKit Team</p>
    </div>
  `

  return sendMail({to:email, subject: "Reset Your Password", html})
}

/**
 * Send email verification email
 * @param email Recipient email address
 * @param token Verification token
 * @returns Information about the sent email
 */
export const sendVerificationEmail = async (email: string, token: string) => {
  const verificationUrl = `${process.env.FRONTEND_URL}/verify-email?token=${token}`

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2>Verify Your Email</h2>
      <p>Thank you for registering with RemoteDevKit!</p>
      <p>Please click the button below to verify your email address. This link is valid for 24 hours.</p>
      <a href="${verificationUrl}" style="display: inline-block; background-color: #4F46E5; color: white; padding: 10px 20px; text-decoration: none; border-radius: 4px; margin: 20px 0;">Verify Email</a>
      <p>If you didn't create an account, you can safely ignore this email.</p>
      <p>Thanks,<br>The RemoteDevKit Team</p>
    </div>
  `

  return sendMail({to:email, subject:"Verify Your Email Address", html})
}

/**
 * Send team invitation email
 * @param email Recipient email address
 * @param teamName Name of the team
 * @param inviterName Name of the person who sent the invitation
 * @param invitationId Invitation ID for the acceptance link
 * @returns Information about the sent email
 */
export const sendTeamInvitationEmail = async (
  email: string,
  teamName: string,
  inviterName: string,
  invitationId: string,
) => {
  const invitationUrl = `${process.env.FRONTEND_URL}/teams/invitations/${invitationId}`

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2>Team Invitation</h2>
      <p>You've been invited to join the team <strong>${teamName}</strong> by ${inviterName}.</p>
      <p>Click the button below to accept the invitation and join the team.</p>
      <a href="${invitationUrl}" style="display: inline-block; background-color: #4F46E5; color: white; padding: 10px 20px; text-decoration: none; border-radius: 4px; margin: 20px 0;">Accept Invitation</a>
      <p>If you don't recognize this invitation, you can safely ignore this email.</p>
      <p>Thanks,<br>The RemoteDevKit Team</p>
    </div>
  `

  return sendMail({to:email, subject:`Invitation to join ${teamName}`, html})
}
