function acharFatorial(num){
    let total = 1;
    for(i = 1; i <= num; i++){
        total = total * i;
    }
    return console.log(total);
}

module.exports = acharFatorial;
