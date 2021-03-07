const Card = require('./Card');
class CardManager{
    constructor(db,domElement){
        this.db = db.products;
        this.domElement = domElement;
        this.innerHTML = ''
        for (const key in this.db) {
            if (Object.hasOwnProperty.call(this.db, key)) {
                const cardData = this.db[key];
                this.innerHTML+=this.manage(cardData)
            }
        }
        this.domElement.innerHTML += this.innerHTML;
        // debugger
    }
    manage(data){
        const card = new Card(data);
        return card.getInnerHTML()
    }
}
module.exports= CardManager;