class Cart {
    constructor(_id, title, imageUrl, quantity, price, total, category) {
        this._id = _id;
        this.title = title;
        this.imageUrl = imageUrl;
        this.quantity = quantity;
        this.price = price;
        this.total = total;
        this.category = category;
    }
}
export default Cart;