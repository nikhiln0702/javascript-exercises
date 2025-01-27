const fibonacci = function(num) {
    num=parseInt(num);
    if(num>=0){
    if(num==0){
        return 0;
    }
    else if(num==1){
        return 1;
    }
    else{
        let f=0;
        let s=1;
        let t=0;
        for(let i=2;i<=num;i++){
            t=f+s;
            f=s;
            s=t;
        }
        return t;
    }}
    else{
        return "OOPS";
    }

};

// Do not edit below this line
module.exports = fibonacci;
