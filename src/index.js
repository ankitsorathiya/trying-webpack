import {Person} from "./person";
import {colors} from "./colors";
import {reverseString, upercaseColor,IceCream,defaultParams} from "./learn-arrow";
import {GulabJamun} from "./Desserts";
import {Maple,MapleES5} from "./Tree";

const welcomeMessage=`Welcome to log ${Person.firstName},

This is ES6 trying out app.,
You can see things are getting written in new line.`;
console.log(welcomeMessage);
//learning destruction;
console.log("We are exploring  ES6 features [templates,destruction]");
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


console.log(...colors.map(upercaseColor).map(reverseString));

let iceCream= new IceCream();
iceCream.increaseScoop();
console.log(defaultParams({firstName:"Wayne",lastName:"rooney"}));
console.log(defaultParams());
console.log(defaultParams({firstName:"Pankaj"}));

let gulabJamun= new GulabJamun();
console.log(gulabJamun.getType());
console.log(gulabJamun.getPrice());


console.log(MapleES5);
console.log(Maple);
const myMaple = new Maple(15, 5);
myMaple.changeSeason('fall');
myMaple.gatherSyrup();
myMaple.changeSeason('spring');
console.log(myMaple.getSyrunQty());


const myMaplees5 = new MapleES5(15, 5);
myMaplees5.changeSeason('fall');
myMaplees5.gatherSyrup();
myMaplees5.changeSeason('spring');
console.log(myMaplees5.getSyrunQty());