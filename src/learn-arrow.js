export const upercaseColor=(color)=>{
                return color.color.toUpperCase();
};
export const reverseString=(string)=>{
                return string.split("").reverse().join("");
};

export function IceCream(){
    this.scoop=0;
}
IceCream.prototype.increaseScoop=function(){
    setTimeout(()=>{
            this.scoop++;
    },100);
}


export const defaultParams=({firstName='Ankit', lastName='sorathiya'}={})=>`Welcome ${firstName} ${lastName}`;



