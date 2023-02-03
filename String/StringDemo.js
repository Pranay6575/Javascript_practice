// let fruit = 'Pineapp\nle'
// console.log(fruit)


// Qs.1.By the use of Template literals we can access variable inside variable

// let friend1 = "Michael";
// let friend2 = "Shaun";
// let relation = `${friend1} is Best-Friend of ${friend2}`
// console.log(relation)

// let Address = "Johnson lives in Los-Angeles";
// console.log(Address.length);
// console.log(Address.toUpperCase())
// console.log(Address.toLowerCase())

// Qs.2 Convert the word from Facebook to Microsoft

// let text = " I want to work at Facebook"
// let newText = text.replace(/Facebook/g, "Microsoft")
// console.log(newText)

// 3. Split a string into a character array

// let quote = "India is the best"
// let newQuote = quote.split(" ")  // with words
// let newQuote2 = quote.split("")  // without words or individual
// console.log(newQuote);
// console.log(newQuote2);

// Qs. 4 Split a string on multiple separators

// let library = "Bus,Taxi,Truck,Plane,Train"
// let seprate = library.split(",")
// console.log(seprate)

// let letters = "CHJDKHIJLJLJDLMLfkflK";
// console.log(letters.length)

// let text = "This is \"Vikings\" the Backslash"
// console.log(text)

// let name = "James";
// let name2 = new String("James");
// console.log(name)
// console.log(name2)

// let fruits = "Apple, Mango, Pineapple";
// let str = fruits.slice(7, 23)
// console.log(str)

// let vegies = "Tomato,Spinach,Potato,Onion,Capsicum";
// let str2 = vegies.slice(7, 14)
// console.log(str2)

// let cars = "isuzu, swift,Tigon,Tigun,Crysta"
// let str3 = cars.slice(-18)
// console.log(str3)

// let phones = "Samsung, Apple, Vivo, Oneplus"
// let str4 = phones.substr(9, 5)
// console.log(str4)

// let laptops = "HP,Dell,Apple,Sony,Lenovo"
// let str5 = laptops.substr(14, 4);
// console.log(str5)

// The replace() method replaces a specified value with another value in a string:

// let text = "Lets Visit Microsoft"
// let newtext = text.replace("Microsoft", "Google") // it can't chnage original String
// console.log(newtext);

// let str5 = "Plz visit Apple"
// let newstr = str5.replace("APPLE", "Sony")  // it doesn't change wheather it is case Sensitive
// console.log(newstr)

// let text = "I love cats. Cats are very easy to love. Cats are very popular";
// text = text.replaceAll(/Cats/g, "Dogs");
// ntext = text.replaceAll(/cats/g, "dogs");
// console.log(text)                          // we can replace the words of original string

// let pets = "I love Animals. I really like animals"
// pets = pets.replaceAll("Animals", "Birds")
// pets = pets.replaceAll("animals", "birds")
// console.log(pets)

// let day = "Sunday is the Special Common Holiday"
// let newday = day.toUpperCase();
// console.log(newday)

// let number = "Fifteen is  not the prime number"
// let newno = number.toUpperCase();
// console.log(newno)

// let vowel = "A E I O U"
// let newvowel = vowel.toLowerCase();
// console.log(newvowel);

// concat() joins two or more strings:

// let var1 = "Javascript";
// let var2 = "Programming"
// let var3 = var1.concat(" ", var2);
// console.log(var3);

// let str6 = "Machine learning "
// let str7 = "also known as Data Science"
// let str8 = str6.concat(" ", str7);
// console.log(str8)

// The trim() method removes whitespace from both sides of a string:
// The trimStart() method works like trim(), but removes whitespace only from the start of a string.
// The trimEnd() method works like trim(), but removes whitespace only from the end of a string.

// let trim = "Java and Javascript are diffrent               "
// let trim2 = trim.trim();
// console.log(trim2)

// let developmnt = "          Frontend and Backend both are important"
// let str8 = developmnt,.trim();
// console.log(str8)

// ECMAScript 2017 added two String methods: padStart() and padEnd() to support padding at the beginning and at the end of a string.

//The padStart() method pads a string with another string
// let password ="6";
// let padded = password.padStart(4,"*")
// console.log(padded);

// let debitcard = "4376";
// let newpadding = debitcard.padStart(12,"X")
// console.log(newpadding)

// let aadhar = "1658";
// let newaddhar = aadhar.padStart(14,"x")
// console.log(newaddhar)

// let pan  = "GEVTT37"
// let update = pan.padEnd(12,"X")
// console.log(update);

// The padStart() method is a string method.

// To pad a number, convert the number to a string first.

// let newstr = 8585
// let str9 = newstr.toString()
// let pad1 = str9.padStart(12,"X")
// console.log(pad1)

// let id = 4541
// let newid = id.toString();
// let pad2 = newid.padEnd(8,"_ ")
// console.log(pad2)

// let numbr = 786;
// let var3 = numbr.toString();
// let output = var3.padEnd(8,"$")
// console.log(output);

//The charAt() method returns the character at a specified index (position) in a string:
// let capital = "WashingtonDC"
// let find = capital.charAt(10)
// console.log(find)

// let company = "Berkshire_Hathway";
// let find1 = company.charAt(10)
// console.log(find1)

// let number = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
// let str10 = number.charCodeAt(11);
// console.log(str10)

// let num1 = "abcdefghijklmnopqrstuvwxyz"
// let num2 = num1.charCodeAt(0);
// console.log(num2)

//A string can be converted to an array with the split() method:

// let var4 = "Los-Angeles"
// let var5 = var4.split('');
// console.log(var5)


