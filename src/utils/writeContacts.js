import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';



export const writeContacts = async (updatedContacts) => {

    try{
        const writeText = updatedContacts;
        await fs.writeFile(PATH_DB, writeText);
    } catch(error){
        console.log(error);
    }

    }

console.log(writeContacts('Text'));
