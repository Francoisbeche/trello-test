
export default class Team {
    'id': string;
    'teamName': string;
    constructor(fields?: Partial<Team>) {
        if (fields) {
            Object.assign(this, fields);
        }
    }

}