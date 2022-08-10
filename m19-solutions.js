/*
    Note TODO: 
    =========================//=========================//=========================
    প্রাকটিস চ্যালেঞ্জ-1: 
    =========================//=========================//=========================
    ১. একটা ফাংশন লিখবা যেটা ১৩ এর নামতা (multiplication table) আউটপুট হিসেবে দেখাবে। 
 */
// ---------------Answer
/* 
    function namta(num) {
        for (var i = 1; i <= 10; i++){
            var sum = i * num
            console.log(i,'x', num,'=',  sum);
            
        }
        return sum;
        
    }
    namta(13)
*/
/* 
    =========================//=========================//=========================
    প্রাকটিস চ্যালেঞ্জ-2: 
    =========================//=========================//=========================
    ২. একটা ফাংশন লিখবা যেটা যেকোন নামকে uppercase বা রেগুলার কেইস হিসেবে নিবে আর আউটপুট হিসেবে সেই নাম lowercase করে রিটার্ন করবে।
*/
/* 
    function upperCaseToLowerCase(textInput) {
        let upperTolower = textInput.toLowerCase();
        console.log(upperTolower);
        return upperTolower;
    }

    let text = 'Hello MY NAME Is ismail'
    upperCaseToLowerCase(text)

    let text1 = 'KUAKATA'
    upperCaseToLowerCase(text1) 
*/

/* 
    =========================//=========================//=========================
    প্রাকটিস চ্যালেঞ্জ-3: 
    =========================//=========================//=========================
    ৩. fullName নামে একটা ফাংশন তৈরী কর যেটা তোমার নামের প্রথম অংশ এবং তোমার নামের শেষের অংশ প্যারামিটার হিসেবে নিবে। আর তোমার নামের দুই অংশ জোড়া দিয়ে আউটপুট হিসেবে তোমার পূর্ন নাম রিটার্ন করে দিবে। যেমন ধরো, hablu এবং kanto ইনপুট প্যারামিটার হিসেবে দিলে আউটপুট হিসেবে hablu kanto রিটার্ন করবে। 
*/
/* 
    function fullName(fName, lName) {
        const output = fName + ' ' + lName;
        console.log(output);
        return output;
    }
    const inputFName = 'hablu';
    const inputLName = 'kanto';
    fullName(inputFName, inputLName); 
*/
/*
    =========================//=========================//=========================
    প্রাকটিস চ্যালেঞ্জ-4: 
    =========================//=========================//=========================
    ৪. একটা ফাংশন লিখবা যেটাকে তুমি কোন সংখ্যাকে ইনপুট হিসেবে দিলে সে সেই সংখ্যার square করে সেই square কে রিটার্ন করবে।
    অর্থাৎ তুমি ইনপুট হিসেবে 5 দিলে সেটাতে স্কয়ারে হিসেবে 25 আউটপুট হিসেবে পাবে।  
*/
/*
    function square(input) {
        let sumSquare = input * input;
        console.log(sumSquare);
        return sumSquare;
    }
    const inputText = 6;
    square(inputText) 
*/
/* 
    =========================//=========================//=========================
    প্রাকটিস চ্যালেঞ্জ-5: 
    =========================//=========================//=========================
    ৫) pizza নামের একটা object কে নিচের উদাহরণ মতো define করবা :

    const pizza = {
    toppings: ['cheese', 'sauce', 'pepperoni'],
    crust: 'deep dish',
    serves: 2
    }
    এবং pepperoni প্রিন্ট করবা। 
    */
/*    const pizza = {
        toppings: ['cheese', 'sauce', 'pepperoni'],
        crust: 'deep dish',
        serves: 2
    }
    console.log(pizza.toppings[2]);
*/
/* প্রাকটিস চ্যালেঞ্জ-1: 
    =========================//=========================//=========================
    Write a function called foo() which prints “foo” and a function called bar() which prints
    “bar”. Call function bar() in the foo() function after printing. What will be the output? Now call
    the foo() to see the output. 
*/
/* 
    function foo() {
        console.log('foo')
        bar()
    }
    function bar() {
        console.log('bar')
    }
    foo()
    // print is 
    // foo
    // bar
 */
/*
    =========================//=========================//=========================
    প্রাকটিস চ্যালেঞ্জ-2: 
    =========================//=========================//=========================
    Write a function called make_avg() which will take an three integers and return the
    average of those values.
*/
/*
    function make_avg(int1, int2, int3) {
        let sum = int1 + int2 + int3;
        avarage = sum / 3;
        console.log(avarage)
        return avarage;
    }

    make_avg(10,10,10) 
*/
/*
    =========================//=========================//=========================
    প্রাকটিস চ্যালেঞ্জ-3: 
    =========================//=========================//=========================
    Challenging: Write a function called make_avg() which will take an array of integers and
    the size of that array and return the average of those values.
*/
/*
    function make_avg(intInput) {
        var sum = 0;
        for (let i = 0; i < intInput.length ; i++){
            index = intInput[i];
            sum = sum + index;
        }
        let avg = sum / intInput.length;
        return avg;
    }
    var numbers = [10, 10, 10,50]
    let output = make_avg(numbers) 
    console.log(output);
*/
/*
    =========================//=========================//=========================
    প্রাকটিস চ্যালেঞ্জ-4: 
    =========================//=========================//=========================
    Write a function called odd_even() which takes an integer value and tells whether this
    value is even or odd. You need to do it in 4 ways:
    ● Has return + Has parameter
    ● No return + Has parameter
    */
/*    // ● Has return + Has parameter
    function odd_even(input) {
        if (input % 2 === 0) {
            console.log('even')
            return input;
        }
        else {
            console.log('odd')
        }
    }    
    const output = odd_even(200)
    
    // ● no return + Has parameter
    function odd_even(input) {
        if (input % 2 === 0) {
            console.log('even')
        }
        else {
            console.log('odd')
        }
    }
    odd_even(99)
*/
/*
    =========================//=========================//=========================
    প্রাকটিস চ্যালেঞ্জ-5: 
    =========================//=========================//=========================
    5) You are in a hurry to go to your school on time. But when you are crossing the road, the
    traffic signal is red coloured. In this situation, if you try to cross the road, you may be in
    danger.If you notice a yellow coloured traffic signal, you should stop. If you notice a green
    coloured traffic signal, you should cross the road. So write a JS code, where there is a
    variable called signal. Its value can be green, yellow or red & we will get different activities as
    output depending on the variable. So, hurry up. 
*/
/* 
    let trafficColor = 'red';

    if (trafficColor == 'red') {
        console.log('maybe in danger')
    }
    else if (trafficColor == 'yellow') {
        console.log('you should stop.')
    }
    else if(trafficColor === 'green') {
        console.log('you should cross the road')
    }
    else {
        console.log('wrong info ')
    } 
*/