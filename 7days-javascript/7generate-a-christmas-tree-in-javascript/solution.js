function processData(input) {
    console.log("        *");
    var spaces = 8;
    for (var i = 0; i < 9; i++) {
        var line = "";
        for (var j = 0; j < 8; j++) {
            if (j < spaces) {
                line += " ";
            } else {
                line += "0";
            }
        }
        spaces --;
        line += "0" + line.split("").reverse().join("").trim();
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

