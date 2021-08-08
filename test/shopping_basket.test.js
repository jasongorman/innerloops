const assert = require('assert');
const Basket = require('../basket');
const Item = require('../item');

describe('Shopping Basket', () => {
    it('has total of zero when empty', () => {
        const basket = new Basket([]);
        assert.strictEqual(0.0, basket.total());
    });

    it('has total of price of single item', () => {
        const basket = new Basket([new Item(100.0, 1)])
        assert.strictEqual(100.0, basket.total())
    });

    it('has sum of prices of two single items', () => {
        const basket = new Basket([new Item(100.0, 1), new Item(50.0, 1)])
        assert.strictEqual(150.0, basket.total())
    });

    it('has total of price times quantity', () => {
        const basket = new Basket([new Item(100.0, 2)]);
        assert.strictEqual(200.0, basket.total());
    })
})