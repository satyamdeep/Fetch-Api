let url = "https://dog.ceo/api/breeds/image/random";
let btnn = document.getElementById("myBtn");
let para = document.getElementById("para");
let pic = document.getElementById("pic");







const getDogs = async()=>{
    console.log("getting data");
    let res =await fetch(url);
    let data = await res.json();
   
    // console.log(data.message);
    let result = data.message;
    console.log(typeof(result));
    if(result){
        pic.src = result;
    }
     para.innerText = result;
}
// getDogs();


let fruit = document.querySelector("#fruit");

const fruits =["banana","apple","orange","mango"];

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

