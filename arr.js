{
    arrstr = ["john will","max","harkirat", "harry"];
    for (let i = 0; i < arrstr.length; i++)
      {
        console.log(arrstr[i]);
      } 
}
// basically we are gonna add some templates and string interpoaltion to arr just learning 
// part of view 
/* 
typically we add some expression in console or in o/p statement 
we are appending back tik (``inserting the string ) and 
${here will adding varibleName later it gonna replace with real value}
console.log()
*/

str = `this is instance for string interpolation and template literals`
console.log(str);

name = "Max"
// This is real intances of string interpolation {placeholder} 
console.log(`${name} is winner of codeVilla`)

// this is alternate of for loop
{

    rank = 1;
    for(let item of arrstr){
        
        console.log(`he is  ${rank} winner of current competion ${item}`);
        rank++;
    }
}

//this is given array  and i have to bring avg of arr-element present in it
{
    sum = 0
    arrmarks = [34,45,46,76,76];
    for(let marks = 0 ; marks < arrmarks.length;marks++){
        sum  = sum + arrmarks[marks];
    }
    console.log(`The average marks of class is ${sum/arrmarks.length}`);
}
/*
 here i'm gonna give offer on product 
 10% off
*/
{
    
    productprice = [250,300,500,450,600]
    for(let items = 0; items < productprice.length;items++){
        offer = productprice[items] / 10;
        console.log(`after applying the offer is ${productprice[items] - offer}`)
    }
    num = [300,343,545,5454];
    for(let items of num){
        console.log("Applying offer ",num = items - (items / 10));
    }
    
    for(let ele of productprice){
        offerapplied = (ele * 10 / 100) 
    }
    
}
{
    //there are few bunch of methods which are used in array 
    // basically this is toString() which convert any type to string
    newarr = [23,34.54,454,54]
    console.log(newarr.toString())
    // this concat() it used to join multiple arr and return the result
    // we will be creating two array and concating them into one 



    let arrOne = ["this is example 1 "]
    let arrTwo = ["this is example 2 "]
    console.log(arrOne.concat(arrTwo))
}

