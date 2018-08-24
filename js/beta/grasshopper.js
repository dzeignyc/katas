function main (input) {
  switch(input) {
    case "forward": return forward();
    break;
    case "backward": return backward();
    break;
    default: return "Not a valid input."
  }
}
