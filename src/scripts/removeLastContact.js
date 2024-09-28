import { PATH_DB } from "../constants/contacts.js";
import fs from 'node:fs/promises';


export const removeLastContact = async () => {

    const data = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(data);
    if (contacts === 0){
        console.log('There is no contacts');
    }
    contacts.pop();
    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
    console.log('Last contact have been removed');


};

await removeLastContact();
