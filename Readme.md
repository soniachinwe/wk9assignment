JS ARRAY METHODS 

The Java Script array.length property returns the length size of an array. It is usually used in conjunction with a function or variable, but arrays or objects must be passed to it. The objects can be strings or numbers. In the array.length, the array is usually the name of the variable that has been assigned. 

Also, array.length can also be used in a for loop when a variable is declared and assigned a counter value.  

The Java Script toString() method converts an array to string. 

The variable name is attached to the front of the method with a dot separating them. 

Assuming we have a variable name called house. This variable can be converted to string by calling the toString method that is house.toString().  

There is another method that behaves like the toString() method called join() method which joins all the array methods to string but in addition you can specify a separator. 

 

The array pop() and push() method help you to add and remove items from an array. The pop() method can only remove the last items from an array while the push() method only adds items at the end of an array. 

The shift() method also behaves like the pop() method but removes the first item from the array rather than the last item while the unshift() method also behaves like the push() method but instead add items at the beginning of the array. 

All arrays have an index number which starts at zero(0). 

The array delete() method removes items from an array but its not best practice. Instead, the pop() or shift() method should be used.  

In merging arrays you use the concat method concat(). However, this creates a new array, and it does not change the existing array. 

Flattening an array is the process of reducing the dimensionality of an array. 

The flat() method creates a new array with sub-array elements concatenated to a specified depth. 

 

THE JAVA SCRIPT FUNCTIONS 

A JavaScript function is a block of code designed to perform a particular task.  

Declaring a function; 

Function functionName() { 

//Body of the function 

} 

It's important to remember that a function declaration on its own doesn’t execute the code. It's just specifying what operations should be performed. Once the function is executed to run the function code you need to call or invoke the function, and this is achieved by typing the function name by the opening and closing parenthesis. 

functionName() 

Functions area also able to accept parameters which can be strings or numbers. Parameters are like variable names. They allow us to set changeable values on each function call.  We can call it as many times as we want as long as we send values to them. Functions can also be reusable.  

JS CONTROL FLOW STATEMENTS 

The control flow allows you to control the order in which statements are executed in your program based on certain criteria or conditions. 

In Java Script there are 3 main types of control flow statements. 

If/else 

Switch 

Loops 

The if-else statement – if a condition is true do something, if it's not, do something else.  

The switch statements are used to execute a block of code based on the value of a variable or expression. 

Both if/else and switch are used to determine the program execution flow based on whether or not some conditions have been met. This is why they are sometimes referred to as control flow statements. 

Loops are sued to continuously execute repeated blocks of code until a certain condition is satisfied. 

Types of loop. 

FOR 

WHILE 

DO WHILE 

The for lop is used to loop a block of code a certain number of times. A counter variable must be set, then a condition must be specified and finally, the counter must be incremented. 

The while loop will also run as long as the condition remains true. However, the tart counter is set outside of the while loop and the incrementing is done inside the loops body. 

The Do while will first execute the code and then continue while the condition remains true. 

 
