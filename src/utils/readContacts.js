import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';


export const readContacts = async function readFile(filePath)  {

try{
    const data = await fs.readFile(PATH_DB, 'utf8');
    console.log(data);

} catch (err){
    console.log('error');
    console.log(err);
}

};
