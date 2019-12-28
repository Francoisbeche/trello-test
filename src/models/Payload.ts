import PayloadI from '../interfaces/Payload-i';

export default class Payload implements PayloadI {
    'teams': any;
    'list': any;
    'team': any;
    'cards': any;
    'listId': string;
    'card': any;
    'oldListId': string;
    'cardId': string;
    'destListId': string;
    constructor(fields?: Partial<Payload>) {
        if (fields) {
            Object.assign(this, fields);
        }
    }

}