const dbLoader = require('./DbLoader');
const CardManager = require('./CardManager');
class App{
    constructor(){
        console.log('new App')
        this.dbLoader = dbLoader;
        dbLoader.on('loaded',this.onLoaded)
        this.cardManager= null;
    }
    init(){
        console.log('initalizing')
        dbLoader.init('db.json')
    }
    onLoaded(db){
        console.log('db: ---', db);
        
        const mainContainer = document.getElementById("main-row");
        console.log('mainContainer: ', mainContainer);
        this.cardManager= new CardManager(db,mainContainer);
    }
}
module.exports = new App()