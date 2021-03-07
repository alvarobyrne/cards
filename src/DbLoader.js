const Event = require('events').EventEmitter;
class DbLoader extends Event {
    constructor() {
        super();
    }
    async init(path) {
        this.path = path;
        const db = await this.load();
        this.emit('loaded', db)
    }
    async load() {
        const response = await (await fetch(this.path)).json();
        return response
    }
}
module.exports = new DbLoader;