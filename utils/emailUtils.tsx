import nodemailer from 'nodemailer';
const transporter = nodemailer.createTransport({
  service: 'gmail', // You can use any other service here
  auth: {
    user: process.env.EMAIL_USER,
  },
});

export const sendOtpEmail = async (to: string, otp: string) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject: 'Your OTP Code',
    text: `Your OTP code is: ${otp}`,
  };

  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Failed to send email');
  }
};
  