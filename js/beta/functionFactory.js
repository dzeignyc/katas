function functionFactory(x,y,operation) {
  switch (operation) {
    case '+' : return () => x + y;
    case '-' : return () => x - y;
    case '*' : return () => x * y;
    case '/' : return () => x / y;
  }
}
