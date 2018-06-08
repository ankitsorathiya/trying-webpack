import {Person} from "./person";
import {colors,ColorOperation} from "./colors";
const welcomeMessage=`Welcome to log ${Person.firstName},

This is ES6 trying out app.,
You can see things are getting written in new line.`;
console.log(welcomeMessage);
//learning destruction;
console.log("We are exporing  ES6 features [templates,destruction]");
const[primaryColor,secondaryColor,terneryColor]=colors;
console.log(`%c Primary colors ${primaryColor.color}`,`background:${primaryColor.code.hex};color:black`);
console.log(`%c Secondary colors ${secondaryColor.color}`,`background:${secondaryColor.code.hex};color:black`);
console.log(`%c Ternary colors ${terneryColor.color}`,`background:${terneryColor.code.hex};color:black`);

const{color,category}=primaryColor;
console.log(`primary color is ${color}, and it falls in ${category} category`);


//eliminating repetitive work.
const clonedPrimaryColor={color,category,getColor(){
            return this.color;
    }};
console.log(clonedPrimaryColor.getColor());

//for of loop.
for(const colorObj of colors){
    console.log(colorObj);
}
//use spread
const duplicateColors=[...colors,...colors.reverse()];
console.log(...duplicateColors);


let colorOperation= new ColorOperation();
console.log(colorOperation.concatColors(primaryColor,secondaryColor));