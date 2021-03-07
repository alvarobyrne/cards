class Card {
    constructor(data) {
        const subProducts = data['sub-products'];
        const currency = data.currency;
        const shipping = data.shipping;
        const subProductsString = this.buildSubProducts(subProducts,currency);
        const condition = data.price<1000;
        // debugger
        const cardClassString = condition?"card":"card text-white bg-dark";
        const moreClassString = condition?"btn-light":"btn-dark";
        this.innerHTML = `
<div class="${cardClassString} card-text">
    <div class="card-body grid-container">

    <h4 class="title card-title">${data.name}</h4>
    <div class="main-product">${data.amount} ${data.description} <button type="button" class="btn btn-warning"> ${data.price} ${data.currency}</button></div>
    <div class="sub-products card-text">${subProductsString.innerHTML}</div>
    <div class="total-price big-text"> ${data.currency}${subProductsString.total}</div>
    <div class="additionals text-muted">Envío: ${shipping.price},${shipping["delivery-time"]}</div>
    <div class="more"><button type="button" class="${moreClassString}">+</button></div>
  </div><!--card-body -->

</div><!--card -->
`

    }
    buildSubProducts(data,currency) {
        let processedData = data.map((x)=>this.buildSubProduct(x,currency));
        let total = 0;
        let innerHTML = '';
        for (const key in processedData) {
            if (Object.hasOwnProperty.call(processedData, key)) {
                const element = processedData[key];
                // console.log('element: ', element);
                total+=element.subTotal;
                innerHTML+=`<div>${element.innerHTML}</div>`;
            }
        }
        return {total,innerHTML};
    }
    buildSubProduct(datum,currency) {
        let output = '';
        let output2 = '';
        // console.log('datum : ', datum);
        let subTotal = 0;
        if (datum.name) {
            output2 = `${datum.amount} ${datum.descriptions} X ${datum.price} ${currency}/${datum.description} =  ${currency}${datum.amount*datum.price}`
            subTotal = datum.price*datum.amount
        } else {
            output2 = `${datum.amount} ${datum.descriptions} = ${currency}${datum.price}`
            subTotal = datum.price
        }
        return {innerHTML:output2, subTotal}

    }
    getInnerHTML() {
        return this.innerHTML;
    }
}
module.exports = Card;