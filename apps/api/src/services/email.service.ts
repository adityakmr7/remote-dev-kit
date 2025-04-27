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

export const sendPasswordResetEmail = async (email: string, token: string) => {
  const resetUrl = `${process.env.FRONTEND_URL}/reset-password?token=${token}`

  const mailOptions = {
    from: `"RemoteDevKit" <${process.env.EMAIL_FROM || "noreply@remotedevkit.com"}>`,
    to: email,
    subject: "Reset Your Password",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2>Reset Your Password</h2>
        <p>You requested a password reset for your RemoteDevKit account.</p>
        <p>Click the button below to reset your password. This link is valid for 1 hour.</p>
        <a href="${resetUrl}" style="display: inline-block; background-color: #4F46E5; color: white; padding: 10px 20px; text-decoration: none; border-radius: 4px; margin: 20px 0;">Reset Password</a>
        <p>If you didn't request this, you can safely ignore this email.</p>
        <p>Thanks,<br>The RemoteDevKit Team</p>
      </div>
    `,
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
