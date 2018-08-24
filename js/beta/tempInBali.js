function bareable(heat, humidity) {
  if (humidity > 0.5 || heat > 35) {
    return false;
  } else if (heat > 25 && heat < 36 && humidity > 0.4) {
      return false;
    } else if (heat <= 25) {
        return false;
      } else {
        return true;
      }
}
