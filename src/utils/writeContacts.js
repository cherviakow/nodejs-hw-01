import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';


export const writeContacts = async (updatedContacts) => {

    try{
        const updatedContacts = 'Some text!';
        await fs.writeFile(PATH_DB, updatedContacts);
    } catch(error){
        console.log(error);
    }

    }


console.log(writeContacts());
