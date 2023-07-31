function example() {
  let i = 10;
  if (i > 5) {
    console.log(i)
  }
  const hi = () => {
    let i = 20;
    console.log(i);
    const good = () => {
      let i = 30;
      console.log(i);
    }
    for (let i = 0; i < 5; i++) {
      console.log(i);
      let good = 40000;
      for (let i = 0; i < 5; i++) {
        console.log(i);
        console.log(good);
      }
    }
    good();
  }
  hi();
}

example();