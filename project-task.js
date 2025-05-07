/*
===========================================
🏨 JSON Syntax Debugging: Hotel Booking Data
===========================================

🎯 Objective:
Students will analyze a JSON file containing multiple syntax errors,
identify the issues, and correct them.

This activity helps practice spotting and fixing common JSON mistakes such as:
- Missing commas
- Incorrect use of quotation marks
- Unmatched brackets/braces
- Trailing commas
- Invalid data types
*/


// ============================================
// 🧭 Instructions:
// ============================================

/*
📘 Scenario:
You’re a developer on a team building a travel booking API.

A teammate submitted a JSON file to represent a hotel booking, 
but it contains multiple syntax errors that prevent it from being parsed.

🔧 Your Task:
1️⃣ Review the provided JSON file
2️⃣ Identify all syntax errors
3️⃣ Write down what each error is and why it causes a problem
4️⃣ Correct the JSON structure so that it is valid
5️⃣ Validate your corrected version using a JSON linter or validator

🧪 Deliverables:
- A corrected version of the JSON
- A list of the corrections made and why each was necessary
*/


// ============================================
// 🔍 Provided JSON File with Errors
// ============================================

const invalidBookingJSON = 
{
  "hotelName": "Grand City Hotel",
  "checkInDate": "2024-05-15",     
  "checkOutDate": "2024-05-20",
  "guests": [
    {
      "name": "Alice Johnson",
      "age": 30,
      "email": "alice.johnson@example.com"
    },
    {
      "name": "Bob Smith",
      "age": null,
      "email": "bob.smith@example.com"
    }
  ],
  "roomDetails": {
    "type": "Suite",
    "pricePerNight": 200,
    "amenities": ["WiFi", "Breakfast", "Parking"]
  }
}
;

//Added a comma on line 50 to separate checkInDate from checkOutDate
//Added double quotes on line 54 to the key name to follow proper JSON formatting
//Changed the value of age on line 60 to null, as undefined is not an allowed data type in JSON
//Not a syntax error but I noticed the email on line 61 doesn't have a domain, so I added one
//Removed the trailing comma after parking on line 67, which would cause a syntax error
//Removed the backticks that surrounded the entire object 

// ============================================
// ✅ Requirements
// ============================================

/*
- Use a JSON validator or linter (e.g., https://jsonlint.com/) to test your final version
- Keep track of each fix:
  • What was wrong?
  • Why is it a problem in JSON?
  • What did you change to fix it?
*/

//Originally included the variable declaration when using the validator and realized I had to not include that
//Then it pointed out the backticks around the entire object
//Once I omitted the variable declaration and removed the backticks, it was valid

// ============================================
// 🤔 Follow-Up Questions
// ============================================

/*
💬 Reflect and answer the following:

1️⃣ What tools or techniques did you use to identify the errors?

2️⃣ How did you confirm that your corrected JSON file was valid?

3️⃣ Which errors were the most difficult to spot? Why?

4️⃣ What strategies can help you avoid these kinds of errors in the future?
   (e.g., syntax highlighting, linters, writing JSON by example)
*/

//I first just looked through the code myself to spot the errors, then pasted it into JSONLint to find any
//additional errors and fix them. The linter confirmed that it was valid. The backticks were the most difficult to 
//spot not only because of how small they are but also because I wasn't sure at first if was necessary to have it there
//in the JavaScript. Using linters is extremely helpful in making sure every error is spotted and addressed. 