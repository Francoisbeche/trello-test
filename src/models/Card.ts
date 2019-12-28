
export default class CardEntity {
    'id': string;
    "content": string;
    "name": string;
    "listId": string;

    constructor(fields?: Partial<CardEntity>) {
        if (fields) {
            Object.assign(this, fields);
        }
    }

}