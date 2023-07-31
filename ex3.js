function example() {
  let a = 5;
  var hello = 'hello';
  console.log(a);

  const mussg = "I'm Mussg";
  console.log(mussg); // I'm Mussg

  const developerMussg = () => {
    console.log(`${mussg}, and I'm a developer!`);
    // I'm Mussg, and I'm a developer!
  }
  function frontendMussg() {
    console.log(`${mussg}, and I'm a frontend developer!`);
    return "frontendMussg";
  }

  frontendMussg();
}

example();