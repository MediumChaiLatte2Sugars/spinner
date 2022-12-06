const animationArray = ['\r|', '\r/', '\r-', '\r\\', '\r|'];
let timer = 100;

for (let iteration = 0; iteration < 2; iteration++) {
  for (let animation = 0; animation < animationArray.length; animation++) {
    setTimeout(() => {
      animation === animationArray.length - 1 && iteration === 1 ? process.stdout.write(animationArray[animation] + '\n') : process.stdout.write(animationArray[animation] + '  ');
    }, timer);
    timer += 200;
  }
}