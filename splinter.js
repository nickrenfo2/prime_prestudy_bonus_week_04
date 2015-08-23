1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
var theNumber = 1;
 
var michelangelo = function(value){
    value = (value * 2);
    return value;
}
 
var donatello = function(value, anotherValue){
    value = anotherValue + value;
    anotherValue = value * anotherValue;
    return anotherValue;
}
 
var leonardo = function(value){
    var anotherValue = value;
    value *= 4;
    theNumber = value / 2;
    return (value + anotherValue);
}
 
var raphael = function(value, anotherValue, yetAnotherValue){
    value = value * anotherValue + yetAnotherValue;
    return yetAnotherValue;
}
 
//In your email, tell me what the answer to this expression would be:
michelangelo(theNumber) + leonardo(theNumber);
 
theNumber = theNumber * 2;
 
//In your email, tell me what the answer to this expression would be:
(donatello(theNumber, 2)) - (raphael(3, 2, theNumber));

function Splinter(num1,num2) {
    var z = num1 * num2;
    return [num1,num2,z];
}

console.log(Splinter(1,2));