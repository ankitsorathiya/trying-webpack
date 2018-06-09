export class Desserts{
    constructor({type="Ice cream",price=10}={}){
        this.type=type;
        this.price=price;
    }
    getType(){
        return this.type;
    }
    setType(type="ice creame"){
        this.type=type;
    }
    setPrice(price=10){
        this.price=price;
    }
    getPrice(){
        return this.price;
    }
}

export class GulabJamun extends  Desserts{
     constructor({type="gulab jamun",price=10}={}){
         super({type,price});
     }
}