function fibonacci(num) {
// your code here
let finonachi = [0, 1];
    for (let i = 2; i <= num; i++) {
        finonachi[i] = finonachi[i - 1] + finonachi[i - 2];
    }
    return finonachi[num];
}  
	


module.exports = fibonacci;
