# LoremForJS

This library allows users to generate lorem text for javascript projects along with other string manipulation functions.

# What you can do

## generateLorem - number > string

Generates random lorem text. Takes in number input for how long of a string you want.

```javascript
generateLorem(2); // lorem sit
```

## generateRandomId - number=10 > string

Generates an firestore style ID. Takes in number input and returns a string

```javascript
generateRandomId(); //5nvie30wsd
generateRandomId(20); //sfposnfpovsoinsverbe
```

## encodeString - string, number=4 > string

Generates an encrypted string from a provided string. Takes string input to be encrypted. Takes number input for resolution, returns encrypted string

```javascript
var text = "Hello World";
var enc = encodeString(text);
var encV2 = encodedString(text, 10);
```

## decodeString - string > string

Deconstructs and decodes encrypted string from the above function. Takes a string input.

```javascript
decodeString(enc); // Hello World
decodeString(encV2); // Hello World
```

## asciiConsole - string

Creates a ascii style text for the console log

```javascript
var text = "Hello World";
asciiConsole(text);
```

## countLetterOccurance - string, string > number

Takes string input and counts number of occurances for check value.

```javascript
var text = "Hello World";
countLetterOccurance("l", text); // returns(3)
```

## checkValidPassword - string > Error | true

Takes string input and checks for validity

```javascript
var pass = "0987654321"
var pass1 = "654321"
checkValidPassword(pass) // true
checkValidPassword(pass1) // Error: Password is small
```

## checkValidEmail - string > Error | true

Takes string input and checks for validity

```javascript
var email = "test@gmail.com"
var email1 = "654321"
checkValidEmail(pass) // true
checkValidEmail(pass1) // Error: Email is small
```

