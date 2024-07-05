{
    let n = 4;
  
    for(let row = 1 ; row <= n ;row++)
        {
            for(let col = 1 ; col <= row ;col++)
                {
                    console.log("* ");
                }
                console.log("\n");
        }
    
}
{
    let name1 = "javascript";
    let size = 0;
    for(let i of name1)
        {
          
            console.log(" i = " + i);
            size++;
        }
        console.log(" length of string is " + size)
}
{
    const employee = {
        name : "waseem bagwan",
        age : 22,
        email : "abc@gmail.com",
        phone_no : 9876543210,
    }

    for(let key in employee)
        {
            console.log(key+ "  : "+ employee[key]);
        }
}
function pattern1(n) {
    for (let row = 1; row <= n; row++) {
      let output = "";
      for (let col = 1; col <= n - row + 1; col++) {
        output += "* ";
      }
      console.log(output);
    }
  }
  
  function pattern2(n) {
    for (let row = 1; row <= n; row++) {
      let output = "";
      for (let col = 1; col <= row; col++) {
        output += col;
      }
      console.log(output);
    }
  }
  
  function pattern3(n) {
    for (let row = 0; row < 2 * n; row++) {
      let totalcol = row > n ? 2 * n - row : row;
      let output = "";
      for (let col = 0; col < totalcol; col++) {
        output += "* ";
      }
      console.log(output);
    }
  }
  
  function pattern4(n) {
    for (let row = 1; row <= n; row++) {
      let output = "";
      for (let col = 1; col <= n - row + 1; col++) {
        output += "* ";
      }
      console.log(output);
    }
  }
  
  function pattern5(n) {
    for (let row = 0; row < 2 * n; row++) {
      console.log(row);
      let totalcol = row > n ? 2 * n - row : row;
      let space = n - totalcol;
      let output = "";
      for (let s = 1; s <= space; s++) {
        output += " ";
      }
      for (let col = 1; col < totalcol; col++) {
        output += "* ";
      }
      console.log(output);
    }
  }
  
  pattern5(5);
  
  