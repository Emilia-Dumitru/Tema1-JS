//How to check if a number is divisible by 10
//Method 1

function divisiblenumber (number, a) {
    if (number % a === 0) {
        return true;
    }
    else {
        return false;
    }
};
console.log(divisiblenumber(100,10));
console.log(divisiblenumber(23,10));

//Method 2 de scriere a unei functii

const divisiblenumber2 = (number,a) => {
    if(number % a ===0){
        return true;
    }
    else{
        return false;
    }
};
console.log(divisiblenumber2(100,10));
console.log(divisiblenumber2(23,10));