function processData(input) {
    var n = 14;
    for (var i = 0; i < n; i++) {
        var line = "";
        for (var j = 0; j < n; j++) {
            if (j % 2 == 0) {
                line += String.fromCharCode(9585);
            } else {
                line += String.fromCharCode(9586);
            }
        }
        console.log(line);
    }

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
