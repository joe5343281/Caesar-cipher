README
---

[![Build Status](https://travis-ci.org/joe5343281/Caesar-cipher.svg?branch=master)](https://travis-ci.org/joe5343281/Caesar-cipher)

This module written by javascript is divided into three parts, encoding, decoding and selftesting(mocha).

## Usage Flow

### Step 1.
First, User make the program execute, and program will print "(1)Encoding Mode", "(2)Decoding Mode", and "(3)Run Sample" on the screen to help user to select the options.

Info: character encoding should be utf8.

### Step 2. 
In Encoding Mode, the program will print "Please type letters, words, or sentences".

### Step 2.1 
Randonly choose (chosen by rand()) a number as a offset and it is less than 26. Shift english alphabet [offset] digits.

Example
```
Clear Code:  ABCD...WXYZ
Secret Code: WXYZ...STUV
**** // if the offset is 4, stars will be 4.
```

### Step 2.2
if you finish Step 2.1, clear code and secret code like Step 2.1 example will be printed on scrren and output (don't append) to a file named cesa.txt without clear code.

### Step 3. 
In decoding Mode, the program will read cesa.txt to get the secret code and stars and shift secret code the number of stars to rebuild clear code.

### Step 3.1 
Print the clear code on screen but don't output it to cesa.txt
