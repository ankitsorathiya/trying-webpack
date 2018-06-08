import {Person} from "./person";
let p=document.getElementById("p");
p.innerHTML=p.innerHTML+Person.firstName;
p.innerHTML+=" "+Person.lastName;