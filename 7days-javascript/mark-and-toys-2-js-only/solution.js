function processData(input) {
    var firstLine = input.split("\n")[0];
    var secondLine = input.split("\n")[1];
    var n = firstLine.split(" ")[0];
    var k = firstLine.split(" ")[1];

    var toys = secondLine.split(" ").map(a => parseInt(a));
    toys.sort(function(a, b) {
        return a - b;
    });

    var sum = 0;
    var i = 0;
    while (i < toys.length) {
        if (sum + toys[i] <= k) {
            sum += toys[i];
            i++;
        } else {
            break;
        }
    }
    console.log(i);
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
