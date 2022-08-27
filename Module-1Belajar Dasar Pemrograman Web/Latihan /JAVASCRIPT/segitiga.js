function segitiga(params) {
  let str = "";
  for (let i = 1; i <= params.length; i++) {
    for (let j = 1; j <= i; j++) {
      str += "*";
    }
    str += "\n";
  }
  return str;
}
