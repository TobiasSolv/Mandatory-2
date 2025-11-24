import db from '../../../database/connection.js';
import bcrypt from 'bcrypt';
import { fail } from '@sveltejs/kit';
import { email, welcomeEmail } from '../welcome_email.js'
//import { dbQuery } from '../../database/connection.js';

export const actions = {
    default: async ({ request }) => {
        const formData = await request.formData();
        const email = formData.get('email');
        const password = formData.get('password');

        console.log("SERVER RECEIVED:", email, password);

        // Check if user already exists
        const checkUser = await db.all('SELECT * FROM users WHERE email = ?', [email]);
        if (checkUser.length > 0) {
            return fail(409, { message: 'Email already registered' });
        }

        // hash password
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        try {
            await db.run('INSERT INTO users (email, password) VALUES (?, ?)', [email, hashedPassword]);
            console.log("DATABASE REQ DONE - User created");

            welcomeEmail(email).catch(err => {
                console.log("Failed to send email: ", err)
            });


            return { success: true };

        } catch (err) {
            console.error("Database error:", err);
            return fail(500, { message: 'Failed to create account. Please try again.' });
        }

    }
};
