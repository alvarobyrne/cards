const dbLoader = require('./DbLoader');
const CardManager = require('./CardManager');
class App{
    constructor(){
        this.dbLoader = dbLoader;
        dbLoader.on('loaded',this.onLoaded)
        this.cardManager= null;
    }
    init(){
        dbLoader.init('db.json')
    }
    onLoaded(db){
        const mainContainer = document.getElementById("main-row");
        this.cardManager= new CardManager(db,mainContainer);
    }
}
module.exports = new App()