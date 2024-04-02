Array.prototype.myFilter = function(callback){
    const newArr = [];
    for(let i = 0; i < this.length; i++){
        if(callback(this[i],i,this) === true){
            newArr.push(this[i])
        }
    }
    return newArr;
}
function evenNumber(x){
    return x % 2 === 0;
}
const arr = [1,2,3,4,5,6,7,8];
console.log(arr);
console.log(arr.myFilter(evenNumber));

function add(pre, cur){
    return pre + cur;
}

Array.prototype.myReduce = function(callback){
    let res = 0;
    for(let i = 0; i < this.length; i++){
        res = callback(res, this[i], i, this);
    }
    return res;
}
console.log(arr);
console.log(arr.myReduce(add));