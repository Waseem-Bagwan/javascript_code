// this some simple js problem given by AI


/*
    Full Form: isNaN stands for "is Not-a-Number."
   Purpose: It is a JavaScript function that checks whether a value is NaN (Not-a-Number).
   Usage: When you pass a value to isNaN, it returns true if the value is not a number, 
   and false if the value is a number
*/



let color;
let mode = "dark";
if(mode === "dark")
    {
        color = "light";
    } 

    function returnText() {
        let ageInput = document.getElementById("userInput").value;
        if (!isNaN(ageInput) && ageInput.trim() !== "") {
            
            if (ageInput >= 18)
                {
                    alert("Is eiligible to vote");
                }
                else 
                    {
                        alert("you are not capable");
                    }
        } else {
            alert("Please enter a valid age .");
        }
    }

    // divide by even number it should result in zero

    let num = 10;

    if (num % 2 === 0)
        {
            console.log("is even number");
        }
        else {
            console.log("is odd number");
        }
        {
            let num = 10;

            function checkNumber(num)
            {
             if (num > 0) 
                {
                    console.log("positive");
                }
                else if (num < 0 ) 
                    {
                        console.log("negative");
                    }
                    else 
                        {
                            console.log("is Zero");
                        }
            }
            checkNumber(num);
        }
        {
            let marks = 85;

            if(marks >= 85 && marks <= 100)
                {
                    console.log("Distinct+")
                }
                else if(marks >= 70 && marks <= 85)
                    {
                                console.log("First class")
                    }
                    else if(marks >= 60 && marks <= 70)
                        {
                            console.log("Second class");
                        }
                        else
                        {
                            console.log("try hard next time");
                        }
}

{
    let IdCard = true;
    let age = parseInt(prompt("Enter your age:"));
    /*
         prompt("Enter your age:") shows a dialog box that asks the user to enter their age 
         and returns a string. parseInt converts this string to an integer, which is then 
         stored in the age variable. This ensures that the age variable is treated as a number 
         for the subsequent comparison in the checkEligibility function
    */

    function checkEligiblity(age ,IdCard) //function Eligiblity(age,hasIdCard)
    {    //(!isNaN(age) && age >= 18 && typeof age === Number) this wht u hv written
        if (!isNaN(age) && typeof age === 'number' && age >= 18)
            /*
                The issue with the condition typeof age === Number is that typeof returns a string,
                so typeof age === 'number' is the correct way to check if age is of type number.
                Additionally, you should ensure the condition checks if age is a number and 
                is not NaN before comparing its value
            */

            {
                console.log("can obtain voter card");
            
            if (IdCard === true)
                {
                    console.log("eligible for voting and can vote in election");
                }
                /*
                alternate of it
                    if (hasIdCard) {
            console.log("You are eligible to vote in elections.");

                */
                
                else
                {
                    console.log("not eligible can't vote in election");
                }
            }
            else
            {
                console.log("still under 18 not applicable for voting ");
            }
    }
    checkEligiblity(age,IdCard);
}
// this is under error
// {
//     let person = parseInt(prompt("Enter your person age : "));

//     function checkCitizenLevel(person)
//     {
//         if(!isNaN(person) && typeof person ==='number' && person.trim() !== '' && person > 18 && person < 55 )
//             {
//                 console.log("junior citizen");
//             }
//             else if(!isNaN(person) && typeof person === 'number' && person.trim() !== '' && person > 55)
//                 {
//                     console.log("sinor level citizen");
//                     if(person < 150)
//                         {
//                             console.log("legend person");
//                         }
//                 }
//                 else
//                 {
//                     console.log("under age");
//                 }


//     }
//     checkCitizenLevel(person);
// }
{
    let age = 19;
    let result = age > 18 ? "adult" : "not an adult";
                //syntax of tenary operator
                //condition ? if true output : if false output ;
    console.log(result); 
}
{
    let num = parseInt(prompt("Enter the number"));
    if( num % 5 == 0)
        {
            console.log(num," comes under multiple of 5 ");
        }
        else
        {
            console.log(num," not comes under multiple of 5");
        }

}
