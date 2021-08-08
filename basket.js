class Basket {
    _items;

    constructor(items) {
        this._items = items;
    }

    total(){
        return this._items.reduce((total, item) => total + item.subtotal(), 0);
    }
}

module.exports = Basket;