import db from '../../../database/connection.js';
//import { dbQuery } from '../../database/connection.js';

export const actions = {
    default: async ({ request }) => {
        const formData = await request.formData();
        const email = formData.get('email');
        const password = formData.get('password');

        console.log("SERVER RECEIVED:", email, password);

        try {
            db.run('INSERT INTO users (email, password) VALUES (?, ?)', [email, password]);
            return { success: true };
        } catch (err) {
            if (err) {
                return console.log(err);
            }
        }

        console.log("DATABASE REQ DONE");

        // Do login logic here...
        if (email !== 'test@example.com' || password !== 'secret') {
            return { success: false, message: 'Invalid credentials' };
        }

        return { success: true };
    }
};
