import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";

export const removeLastContact = async () => {

    try {
        const contacts = await readContacts();
        contacts.pop();
        return writeContacts(contacts);
    } catch (error){
        console.log(error);
    }
};

await removeLastContact();
