const repeatString = function(string,count) {
    let word="";
    let flag=0
    if(count<0){
        flag=1;
    }
    for(let i=0;i<count;i++){
        word=word+string;
    }
    if(flag==0){
    return word;}
    else{
        return "ERROR";
    }
    
};

// Do not edit below this line
module.exports = repeatString;
