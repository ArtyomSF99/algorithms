function longest(s1, s2) {
    let res = s1 +s2;
    let res1 = new Set(res)
    let res2 = Array.from(res1)
    console.log(res2.sort().join(''))
  }

  longest("aretheyhere", "yestheyarehere")