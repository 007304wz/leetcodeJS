1. 
var convertToTitle = function(n) {
    if(n<=0) {
        return;
    }
    var arr = ['Z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    var result = [];
    var aaa = 0;
    while(n !== 0) {
        result.unshift(arr[n%26]);
        aaa = n/26;
        if(aaa === Math.floor(aaa)) {
            aaa = Math.floor(aaa)-1;
        }
        n = Math.floor(aaa);
    }
    return result.join('');
};
