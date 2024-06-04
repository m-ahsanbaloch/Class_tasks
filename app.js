



// function myFunc(value){
  
//     var input = document.getElementById('input')
//     var sett = []
// //     for(i = 0 ; i < input.value.length; i++){
// //         var brack = input.value[i]
// //         // console.log(brack)
// //         if(brack == '[' || brack == '{' || brack == '('){
// //             sett.push(brack)
// //             console.log(sett)
// //         }
// //         else if(
// //             brack == '}' || brack == ')' || brack == "]"
// //         ){
// //             sett.pop()
// //             if(sett == 0){
// //                 console.log("balance")
// //             }

// //         }
// //     }
// for( var i = 0 ; i < input.value.length; i++){
//     var brack = input.value[i]
//     if(brack == "(" || brack == "[" || brack == "{"){
//         sett.push(brack[i])
//         console.log("balanced")
//     }
//     if(brack == ")" || brack == "]" || brack == "}"){
//         sett.pop()
//         if(sett.length == 0){
            
//             console.log("unbalanced")
//         }
//     }
//     }
//     // if(sett.length == 0){
//     // console.log("balance")
//     // }
//     // else{
//     //     console.log("unbalanced")
//     // }
    
// }

// function checkk(){
//     console.log("Ahsan")
// }
// console.log(check())

// var arr = []
// arr.push("[ahsan]","[baloc]")
// console.log(arr)

// function keyLong(event){
//     var count = 1
//     //  console.log(event)
//     if(event.keyCode >= "65" && event.keyCode <=  "90"){
//         console.log("upper")
//         var length = document.getElementById('a')
//         for(i = 0 ; i < length.value.length ; i++){

//             count++
//         }
//         document.getElementById('display').innerHTML = `you press ${event.key} ${count} times`
    
// }
// // console.log(event)
// }

// document.getElementById('a').addEventListener( "keydown" ,function(){
//     keyLong(event)
// })




// ==========================================================
//  var input = document.getElementById('input')
//  var count = 0
// function abc(event){
//     // console.log(event)
//     var check = true
//     setTimeout(function(){
//         if(event.type === "keydown"){
//             check = false
//             clearTimeout()  
//                 count++
//                 console.log(count)
//             }
//         },1000)
//    if(event.type === "keyup"){

//      setTimeout(function(e){
//         console.log("Completed")
//         // check = true
//         document.write(input.value)
//     },2000)
// }
// }
// ==========================================================
var main = document.getElementById("main")
function updatebtn(){
    // alert("ahsan")
    // main.innerHTML = "<p>hi this is ahsan</p>"
    // main.className += " green"
    // if(event.type == "mouseout"){
    //     main.className = "box"
    // }
    // console.log(event)
} 
// main.innerHTML = ' <button onclick="updatebtn()" onmouseout="updatebtn(event)">click</button>'
// var count = 5
// var btn = document.getElementById('btn')
// var stp = document.getElementById('stp')
// var start = document.getElementById('strt')
// function move(){
//     count += 5
//     btn.style.left = count + "px"
//     if(btn.style.left == "150px"){
//         count = 0
//     }
// }
// setInterval(move,1000)

var car = document.getElementById('car')
var count = 0
function move(){
    count += 10
    car.style.left = count + "px"
    if(car.style.left == "600px"){
        count = 0
        console.log("asan")
    }
}

function go(event){
    var ref = setInterval(move,100)
    
}
function stopp(event){
    
   
    clearInterval(ref)
}
car.focus()
function moveUp(event){
    // car.tabIndex = 1
    console.log(event)
    var count = 110
    
    if(event.keyCode == "32"){
        count++
        car.style.bottom = count + "px"
        car.style.border = 0 + "px"
        // car.style.bottom = 0 + "px"

    
}
    if(event.keyCode == "115"){
count++
    car.style.bottom = 30 + "px"
    }
    if(event.type == "keyup"){
            car.style.bottom = 30 + "px"

    }
}

// car.addEventListener('keydown',function moveUp(event){
//     console.log("event")

// })

// car.addEventListener('onkeydown',function(){
//     console.log("ahsan")
// })