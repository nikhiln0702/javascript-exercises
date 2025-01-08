const sumAll = function(lower_num,higher_num) {
    let sum=0;
    let negativeflag=0;
    if(lower_num>higher_num){
        let temp=lower_num;
        lower_num=higher_num;
        higher_num=temp;
    }
    if(lower_num<0||higher_num<0||Number.isInteger(lower_num)==false||Number.isInteger(higher_num)==false||typeof(lower_num)!="number"||typeof(higher_num)!="number"){
        negativeflag=1;
    }
    if(negativeflag==0){
    for(let i=lower_num;i<=higher_num;i++){
        sum=sum+i;
    }
    return sum;}
    else{
        return "ERROR"
    }
};

// Do not edit below this line
module.exports = sumAll;
