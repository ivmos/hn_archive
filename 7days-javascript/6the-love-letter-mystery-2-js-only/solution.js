function processData(input) {
    var t = input.split(/\r?\n/)[0];
    for (var i = 0; i < t; i++) {
        var word = input.split(/\r?\n/)[i + 1];
        if (isPalindrome(word)) {
            console.log(0);
        } else {
            var array = word.split("");
            var j = 0;
            var operations = 0;
            for (j = 0; j < word.length / 2; j++) {
                if (array[j] > array[array.length - 1 - j]) {
                    while(array[j] > "a") {
                        array[j] = prevChar(array[j]);
                        operations++;
                        if (array[j] == array[array.length - 1 - j]) {
                            break;
                        }
                    }
                } else if (array[j] < array[array.length - 1 - j]) {
                    while(array[array.length - 1 -j] > "a") {
                        array[array.length - 1 -j] = prevChar(array[array.length - 1 -j]);
                        operations++;
                        if (array[j] == array[array.length - 1 - j]) {
                            break;
                        }
                    }
                }
            }
            console.log(operations);

        }
    }
}

function isPalindrome(word) {
    return word == word.split("").reverse().join("");
}


function prevChar(c) {
    return String.fromCharCode(c.charCodeAt(0) - 1);
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
