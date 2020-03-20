
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let bArr=[];
    if (matrix===[] || matrix===undefined)
    {return bArr;}

    let aArr=matrix;
    for (let i=1;i<aArr.length; i=i+2)
        aArr[i].reverse();
    aArr.forEach(function (item1) {
       item1.forEach(function (item2) {
           bArr.push(item2);
       })
    });
    return bArr;
};
