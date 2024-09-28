import { createFakeContact } from "../utils/createFakeContact.js";
import { PATH_DB } from "../constants/contacts.js";
import fs from 'node:fs/promises';


export const addOneContact = async () => {

    const data = await fs.readFile(PATH_DB, 'utf-8');
    const newContact = createFakeContact();
    const contacts = JSON.parse(data);

    contacts.push(newContact);
    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));

};

addOneContact();
