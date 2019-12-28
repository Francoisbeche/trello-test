
export default class List {
    'id': string;
    'listName': string;
    'teamId': string;
    'cards': Array<any> = []

    constructor(fields?: Partial<List>) {
        if (fields) {
            Object.assign(this, fields);
        }
    }

}