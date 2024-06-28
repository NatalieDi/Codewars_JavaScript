function nthFibo(n) {
    let f = [];
    f[0] = 0;
    f[1] = 1;
    let i = 2;
    for(i; i <= n; i++) {
        f[i] = f[i-1] + f[i-2];
    }
    return f[i-2]
  }
  console.log(nthFibo(1)) // 0,"1-st Fibo"
  console.log(nthFibo(2)) // 1,"2-nd Fibo"
  console.log(nthFibo(3)) // 1,"3-rd Fibo"
  console.log(nthFibo(4))// 2,"4-th Fibo"