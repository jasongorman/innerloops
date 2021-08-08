class Item {
    _price;
    _quantity;

    constructor(price, quantity) {
        this._price = price;
        this._quantity = quantity;
    }

    subtotal() {
        return this._price * this._quantity;
    }
}

module.exports = Item;