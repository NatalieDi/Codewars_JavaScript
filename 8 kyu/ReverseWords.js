function reverse(string){
    return string
      .split(" ")
      .reverse()
      .toString()
      .replaceAll(","," ");
 }
  console.log(reverse("hello world. I love you"))