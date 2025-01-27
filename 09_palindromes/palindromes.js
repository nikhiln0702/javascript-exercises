const palindromes = function (string) {
    string = string.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    for(let i=0;i<((string.length/2)|0);i++){
        // console.log(string[i]);
        // console.log(string[string.length-i-1]);
        if(string[i]!=string[string.length-i-1]){
            return false;
            break;
        }
    }
    return true;

};

// Do not edit below this line
module.exports = palindromes;
