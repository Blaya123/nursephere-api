import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER || '',
    pass: process.env.SMTP_PASS || '',
  },
});

export async function sendOTPEmail(email, otp) {
  const msg = {
    from: `"Nursphere" <${process.env.SMTP_FROM || 'noreply@nursphere.app'}>`,
    to: email,
    subject: 'Your Nursphere OTP Code',
    text: `Your OTP code is: ${otp}\n\nThis code expires in 10 minutes.\n\nIf you did not request this, please ignore this email.\n\n- Nursphere Team`,
    html: `<div style="font-family:Arial;max-width:480px;margin:0 auto;padding:24px;background:#f5f8f6;border-radius:16px">
      <h2 style="color:#008751;margin-bottom:16px">Nursphere</h2>
      <p style="color:#333;font-size:16px">Your OTP code is:</p>
      <div style="font-size:36px;font-weight:900;color:#008751;text-align:center;padding:20px;background:white;border-radius:12px;letter-spacing:8px;margin:16px 0">${otp}</div>
      <p style="color:#666;font-size:14px">This code expires in <strong>10 minutes</strong>.</p>
      <hr style="border:none;border-top:1px solid #e0e0e0;margin:20px 0">
      <p style="color:#999;font-size:12px">If you did not request this, please ignore this email.</p>
    </div>`,
  };

  try {
    await transporter.sendMail(msg);
    return true;
  } catch (err) {
    console.error('Email send failed:', err.message);
    return false;
  }
}

export async function sendResetEmail(email, token) {
  const msg = {
    from: `"Nursphere" <${process.env.SMTP_FROM || 'noreply@nursphere.app'}>`,
    to: email,
    subject: 'Reset Your Nursphere Password',
    text: `Your password reset token is: ${token}\n\nThis token expires in 1 hour.\n\nIf you did not request this, please ignore this email.\n\n- Nursphere Team`,
    html: `<div style="font-family:Arial;max-width:480px;margin:0 auto;padding:24px;background:#f5f8f6;border-radius:16px">
      <h2 style="color:#008751;margin-bottom:16px">Nursphere</h2>
      <p style="color:#333;font-size:16px">Use the token below to reset your password:</p>
      <div style="font-size:24px;font-weight:900;color:#008751;text-align:center;padding:20px;background:white;border-radius:12px;letter-spacing:4px;margin:16px 0">${token}</div>
      <p style="color:#666;font-size:14px">This token expires in <strong>1 hour</strong>.</p>
      <hr style="border:none;border-top:1px solid #e0e0e0;margin:20px 0">
      <p style="color:#999;font-size:12px">If you did not request this, please ignore this email.</p>
    </div>`,
  };

  try {
    await transporter.sendMail(msg);
    return true;
  } catch (err) {
    console.error('Email send failed:', err.message);
    return false;
  }
}
