let url = "https://dog.ceo/api/breeds/image/random";
let btnn = document.getElementById("myBtn");
let para = document.getElementById("para");
let pic = document.getElementById("pic");


const getDogs = async()=>{
    console.log("getting data");
    let res =await fetch(url);
    let data = await res.json();
    let result = data.message;
    console.log(typeof(result));
    pic.src = result;
    // if(result){
        // pic.src = result;
    // }
     para.innerText = result;
}
getDogs();


//Practice 2

let fruit = document.querySelector("#fruit");

const fruits =["banana","apple","orange","mango","Papaya"];

let index= 0;

// const getFruits = ()=>{
//    if(fruits[index]!==undefined){
//     fruit.innerHTML = fruits[index];
//     // console.log();
//     index++;
//    }else{
//     index=0;
//    } 
// }


const getFruits = ()=>{  
     fruit.innerHTML = fruits[index];
     index = (index + 1) % fruits.length;    
 }

