function diamondPattern(size) {
  for (let i = 1; i <= size; i++) {
    let rows = "";

    for (let j = 1; j <= size - i; j++) {
      rows += " ";
    }

    for (let k = 1; k <= 2 * i - 1; k++) {
      rows += "*";
    }

    console.log(rows);
  }

  for (let i = size - 1; i >= 1; i--) {
    let rows = "";
    for (let j = 1; j <= size - i; j++) {
      rows += " ";
    }

    for (let k = 1; k <= 2 * i - 1; k++) {
      rows += "*";
    }
    console.log(rows);
  }
}

diamondPattern(5);
