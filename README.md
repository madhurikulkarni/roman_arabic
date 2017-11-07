# roman_arabic



This code is used to convert the Roam Numeral to Arabic Numeral.

Decimal	1	5	10	50	100	500	1000
Roman	  I	V	 X	 L	 C	 D	 M

Decimal	1	 2	 3	 4	5	 6	 7	  8	  9	10
Roman	  I	II	III	IV	V	VI	VII	VIII	IX	X


special cases 4 and 9. instead of adding values, we are subtracting the first value from the second. So the Roman numeral at 4 is effectively 5-1. 
In every other case, we are simply adding up all the numbers to build the sum. So VII is 5+1+1 = 7. 
no letter should be repeated more than 3 times. 
If its repeated it more than that, you should skip to the next letter and calculate the number using subtraction instead.

requirements / assumptions:::

=== A snippet to convert roman numeral to arabic with the conditions being kept n mind.


technical concepts and technology choice

=== https://www.mathsisfun.com/roman-numerals.html to understand the fundamentals.



programming

=== Used Bootstrap, CSS3 and Jquery. Nodejs as the framework, with the controller being the arabic controller and the EJS npm for rendering the views/html page.

tests
====
describe('tests/roman-to-arabic/RomanToArabic.spec.js',function(){
    var returnValue;
    describe('When I is passed in',function(){
        beforeEach(function(){
            returnValue = romanToArabic("I");
        });
        it('should return 1',function(){
            expect(returnValue).toBe(1);
        });
    })
});
or
var runTest = function (expected, num) {
    var container = document.getElementById("tests");
    var el = document.createElement("li");
    var actual = RomanNumeralConverter.convert(num) || "";    
    
    var message = "convert " + num + " to " + expected.toUpperCase() + ": <span>";
    
    if (expected.toLowerCase() !== actual.toLowerCase()) {
        el.innerHTML = message + "FAILED" + "</span>";
        el.className = "fail";
    } else {
        el.innerHTML = message + "PASSED" + "</span>";
        el.className = "pass";
    }
    
    container.appendChild(el);    
};
runTest("i", 1);

Check the converted value with the expected value


deployment / building (including how we should build the project)

=== Do an npm install for installing all the project dependencies

Then (npm start) or (node app) to get the app running on local host.
