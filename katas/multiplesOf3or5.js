function multiplesOf3or5(num) {
    let sum = 0;
    if (num < 3){
        return 0;
    } else {
        for(let i = 0; i < num; i++){
            if (i % 3 === 0 || i % 5 === 0){
                sum += i;
            }
        }
        return sum;
    }
}

module.exports = { multiplesOf3or5 }