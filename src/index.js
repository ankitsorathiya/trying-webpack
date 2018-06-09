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


const bowl = {
    [Symbol('apple')]: { color: 'red', weight: 136.078 },
    [Symbol('banana')]: { color: 'yellow', weight: 183.15 },
    [Symbol('orange')]: { color: 'orange', weight: 170.097 },
    [Symbol('banana')]: { color: 'yellow', weight: 176.845 }
};
console.log(bowl);


const digits=[0,1,2,3,4,5,6,7];
const digitIterator=digits[Symbol.iterator]();
let obj=digitIterator.next();
while(!obj.done){
    console.log(obj.value);
    obj=digitIterator.next();
}


let naturalNumbes=new Set([1,2,3,4]);
naturalNumbes.add(9);
naturalNumbes.add(9);
for(let number of naturalNumbes){
    console.log(number);
}

let person= new Map();
person.set("ankit",{name:"ankit sorahtiya"});
person.set("pankaj",{name:"pankaj sorahtiya"});
console.log(person);
person.forEach((value,key)=>console.log(value,key));


let testPromise= new Promise(function (resolve,reject) {
    window.setTimeout(function(){
            if(Math.random()<=0.5){
                resolve("Yuppie, things worked out");
            }else{
                reject("you suck!, go cry");
            }
    },100);
});
testPromise.then(function(response){
        console.log(response);
},function(err){
        console.log(err);
});

Promise.all([testPromise,testPromise]).then(function(response){
    console.log(response);
},function (err) {
});



//trying out proxies
let developer={name:"Ankit Sorathiya",chargerPerHour:10};
let proxyHandler={
            get(target,propName){
                if(target[propName]){
                    return target[propName];
                }
                return `No such property! ${propName}`
            }
};
let agent=new Proxy(developer,proxyHandler);
console.log(agent.name);
console.log(agent.doesntExist);
