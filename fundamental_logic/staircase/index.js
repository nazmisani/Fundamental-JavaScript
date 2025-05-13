function staircase(n) {
  // Write your code here
  for (let i = 1; i <= n; i++) {
    let spasi = " ".repeat(n - i);
    let pagar = "#".repeat(i);
    console.log(spasi + pagar);
  }
}

staircase(7);
//       #
//      ##
//     ###
//    ####
//   #####
//  ######
// #######
