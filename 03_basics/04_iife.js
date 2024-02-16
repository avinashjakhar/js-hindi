// Immediately Invoked Function EXpression (IIFE)

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);

})();

( (name)=>{
    console.log(`DB CONNECTED TWO ${name}`);
})('Avinash')
