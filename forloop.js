{
    let sum = 0;
    let num = 5;
    for(let i = 1 ; i <= num ; i++) {
        sum = sum + i;
    }
    console.log("The sum of all individual no = " + sum);
    
}
{
    let num = 5;
    let i = 1;
    let sum = 0;
    
    while(i <= num)
        {
            for(let m = 1 ; i <= num ; m++){
            sum = sum + i;
            console.log(" the sum of all individual element " + i + " + " + m + " = " + sum);
            i++;
        }}
        
        
}

{
    for(let num = 0 ; num < 100 ; num++)
        {
            if(!(num % 2 == 0)){
                
            console.log("num = " + num);
            
            }
            
        }
}
{

    // this game about guessing the number 
    alert("guess the number between 1 to 10 you will be given 10 turn")
    let gamenum = 9
    for(let i = 0 ; i < 5 ; i++){
    let num = parseInt(prompt("guess the number"))
    if(num ==  gamenum){
        alert("you won")
        break;

        }
    
    else
    {
        if(i === 4)
        alert("you lose do wanna restart ")
    }
    }
    
}

for (let i = 0; i < 10; i++) {
    let num = parseInt(prompt("Guess the number:"));
    
    if (num === 5) {
        alert("You won!");
        break;
    } else {
        console.log("Wrong guess. Try again.");
        
    }
}



{   // this is appicable for string and array
    //syntax for(let variblename of varible_string)
    // this will gonna print each letter of string i mean character
    let name = "wasim";
    // by this we can calculate length of string 
    let size = 0 ;
    for (let val of name)
        {
            // using val variable it will print character of string
            console.log(" value = " + val);
            size++;
        }
        //this statment will print the size of string
        console.log("the size of string is " + size);
}
{
    //this is applicable for object and array
    //for(let variable in objectname)
    // it used to print the key of an object

    const employee = {// employee is a object
        //this are key and it's value
        name : "waseem",
        phone_no : 987654321,
        email : "abc@gmail.com",
        age : 22,
    };// dont forget to put semi colon at end of curly brasis of an object
    for (let key in employee)
        {// it only print key's of an object 
            console.log("this is key "+ key + " and it's value = " + employee[key]);// if you wanna print value of it 
            //this is how it is printed on console                                      objectname[key]
        }
}

{
    
    let str = prompt("enter the string");
    let target = prompt("enter the character you wanna search");
    for (let i of str)
        if(i == target){
            // this is called template literals and this stuff is called ${expression} string interpolation
            let found = `character found at index ${i.length} which is ${i}`;
            console.log(found);
        }
        else 
        {
            if (find != 1)
                {
                    console.log("character not found");
                }
        }
}
// escape character 
// \t is used to provide space between string 
// \n is used to give put string on next line 
 {
    //string are immutable
    
    let str = "these are\nthe escape\tcharacter ";
    // but wont gonna change first string it will create a new value of same string that we can store in different 
    // variable
    // here it is
    let newstr = str.toUpperCase(); // it will just provide us with new value we can store in different 
    // variable
    console.log(str);// this statement will print old string because string are immutable
    console.log(newstr); // this gonna print the new one which is upper case
    let sentence = "    waseem bagwan     "
    let check = sentence.trim();
    console.log(sentence)
    console.log(check);
 }
 // they are certain method of string
 /*
    str.toUpperCase()
    str.toLowerCase()
    str.trim() to remove spaces 
 */

    // {
    //     const Umair = {
    //         height : 5.9,
    //         weight : 55,
    //         skin : "fair",
    //         metrimonial : "single",

    //     };

    //     for(let i = 0; Object.keys(Umair).lenght;i++)
    //         {
    //             console.log( "character" + Object.keys(Umair)[i] + " are " +Umair(Object.keys(Umair)[i]));
    //         }
    // }
    {
        // var variable can be gobally accessed 
        let star = 5
        for(var i = 0; i < star.lenght; i++)
            {
                for(let m = 1;m < star.lenght ;m++)
                    {
                        console.log("*");
                    }
                console.log("*");
            }
    }

    {
        let name1 = "waseem";
        for(let i of name1)
            {
                console.log(i);
            }
    }