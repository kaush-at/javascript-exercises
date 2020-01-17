// 01).identity(x) ⇒ any
// Write a function identity that takes an argument and returns that argument

function identity(x){
    return x;
}

identity1 = x => x;

console.log(identity("y"));
console.log(identity1("A"));
//----------------------------------------------------------------------------

//02). addb(a, b) ⇒ number
// Write a binary function addb that takes two numbers and returns their sum
addb = (a,b) => a + b;
console.log(addb(2,3));

//----------------------------------------------------------------------------

// 03).subb(a, b) ⇒ number
// Write a binary function subb that takes two numbers and returns their difference

subb = (a,b) => a - b;
console.log(subb(3,2));

//----------------------------------------------------------------------------

// 04).mulb(a, b) ⇒ number
// Write a binary function mulb that takes two numbers and returns their product
mulb = (a,b) => a * b
console.log(mulb(7,5));

//-----------------------------------------------------------------------------

// 05).minb(a, b) ⇒ number
// Write a binary function minb that takes two numbers and returns the smaller one

minb = (a,b) => a > b ? b : a;
console.log(minb(2,5));
console.log(minb(7,5));

//------------------------------------------------------------------------------

