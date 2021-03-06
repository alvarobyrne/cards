const Event = require('events').EventEmitter;
class DbLoader extends Event {
    constructor() {
        super();
    }
    async init(path) {
        this.path = path;
        const db = await this.load();
        console.log('db: ', db);
        this.emit('loaded', db)
    }
    async load() {
        const response = await (await fetch(this.path)).json();
        console.log('response: ', response);
        return response
    }
}
module.exports = new DbLoader;