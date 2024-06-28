import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
    host:
    port:
    auth: {
        user: true,
        pass: 'TLSv1.2',
    }
});
