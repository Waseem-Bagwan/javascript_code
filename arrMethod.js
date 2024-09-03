// Array methods

// {   
//     //this os push() add a item at end
//     arrNum = [10,20,30,40,50]
//     arrNum.push(60);
//     console.log(arrNum);

//     n = arrNum.length;
//     // for(let i = 0;i < arrNum.length;i++){
//         if(arrNum[i] != arrNum[n - 1])
//             console.log(`Adding item to array ${arrNum.push(i)*5}`);
    
// }
{
    //finding longest string in array
    let userinput = prompt("enter the any long strings");
    userArray = userinput.split(" ");

    function longstr(){
        for(let i = 0; i < userArray.length;i++){
            if (userArray[i].length > userArray[i + 1].length)  
                 console.log(userArray[i]);
        }
    }
    longstr();
}