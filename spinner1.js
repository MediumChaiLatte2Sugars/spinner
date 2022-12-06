const animationArray = ['\r|', '\r/', '\r-', '\r\\', '\r|'];

let timer = 100;

for (let iteration = 0; iteration < 2; iteration++) {
  for (let animation of animationArray) {
    setTimeout(() => {
      process.stdout.write(animation + '  ');
    }, timer);

    timer += 200;
  }
}

setTimeout(() => {
  process.stdout.write('\r');
}, timer + 50);
