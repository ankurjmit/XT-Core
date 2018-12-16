class ShoppingCartItem {
    constructor(itemDetails) {
        this.itemDetails = itemDetails;
    }
    render() {
        return `<div class="shoppingCartItem">
                    <div class="itemDetailBox">
                        <div class="itemImage">
                            <img src="${this.itemDetails.imageUrl}" alt="T-Shirt 1">
                        </div>
                        <div class="itemDetail">
                            <div class="descriptionBox">
                                <div class="description">
                                    <div class="name">${this.itemDetails.name}</div>
                                    <div class="style">Style # : ${this.itemDetails.style}</div>
                                    <div class="style">Color : ${this.itemDetails.color}</div>
                                </div>
                                <div class="desktopButtons">
                                    <button id = "editItem">EDIT</button>
                                    <button class="remove">X REMOVE</button>
                                    <button>SAVE</button>
                                </div> 
                            </div>
                            <div class="size">
                                Size : ${this.itemDetails.size}
                            </div>
                            <div class="qty">
                                Qty : ${this.itemDetails.quantity}
                            </div>
                            <div class="price">
                                $ ${this.itemDetails.price}
                            </div>
                        </div>
                        
                    </div>
                    <div class="mobileButtons">
                        <button id = "editItem">EDIT</button>
                        <button>X REMOVE</button>
                        <button>SAVE</button>
                    </div>
                </div>`
    }
}

module.exports = ShoppingCartItem