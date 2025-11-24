import nodemailer from 'nodemailer';

const testAccount = await nodemailer.createTestAccount();

const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false,
    auth: {
        user: testAccount.user,
        pass: testAccount.pass,
    },
});

export async function welcomeEmail(email) {
    const sendEmail = {
        from: '"Your Name" <your.email@example.com>',
        to: email,
        subject: 'Hello ✔',
        text: 'Hello world?',
        html: '<b>Hello world?</b>',
    }

}

const info = await transporter.sendMail({
    from: '"Your Name" <your.email@example.com>',
    to: 'recipient@example.com',
    subject: 'Hello ✔',
    text: 'Hello world?',
    html: '<b>Hello world?</b>',
});

console.log('Message sent: %s', info.messageId);
console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));