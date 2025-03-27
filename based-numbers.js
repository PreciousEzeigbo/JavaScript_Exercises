// Write code below 💖

let binary = "";

for (let myNumber = 2; myNumber >= 0; myNumber--)
{
  if (myNumber % 2 === 0)
  {
    binary = binary + "0";
  }
  else
  {
    binary = binary + "1";
  }
}
console.log(binary)