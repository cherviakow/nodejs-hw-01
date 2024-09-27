import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

// const data = fs.readFile(PATH_DB);
// console.log(data);


export const readContacts = async () => {
    try{
        const data = await fs.readFile(PATH_DB, 'utf-8');
        console.log(data);

    } catch(error){
        console.log(error);
    }
};

console.log(readContacts(PATH_DB));


