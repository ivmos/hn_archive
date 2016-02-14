function dankmemes(r, c, maxr, maxc, lelarray){

    //Could obviously make more efficient by keeping
    //track of visited locations, but i'm too lazy lol

    //get rekt out of bounds hahahahahahahahahahahaha
    if(r >= maxr) r = maxr-1;
    if(c >= maxc) c = maxc-1;
    if(r < 0) r = 0;
    if(c < 0) c = 0;

    count = 0;
    var val = lelarray[r][c];
    if(val == -69) return 0; //OUT WITH YOU!
    if(val == 0) return 0; //GO AWAY
    if(val == 1){ //GOOD GOOD, YES
        count++;
        lelarray[r][c] = -69; //WE DON'T LOVE YOU ANYMORE

        //INCOMING COPYPASTA
        //SO MUCH RECURSION, RIP STACK LOL

        count += dankmemes(r+1, c, maxr, maxc, lelarray);
        count += dankmemes(r-1, c, maxr, maxc, lelarray);
        count += dankmemes(r, c+1, maxr, maxc, lelarray);
        count += dankmemes(r, c-1, maxr, maxc, lelarray);
        count += dankmemes(r+1, c+1, maxr, maxc, lelarray);
        count += dankmemes(r-1, c-1, maxr, maxc, lelarray);
        count += dankmemes(r-1, c+1, maxr, maxc, lelarray);
        count += dankmemes(r+1, c-1, maxr, maxc, lelarray);
    }
    return count;
}

function processData(input) {
    //Start of array acquisition

    var lines = input.split("\n");
    var r = Number(lines[0]);
    var c = Number(lines[1]);
    var arr = Array();
    var cur = 2;
    while(r - arr.push(lines[cur].split(" ").map(Number)) > 0) { cur++; }

    var counts = Array();
    for(var i = 0; i < r; i++){
        for(var j = 0; j < c; j++){
            if(arr[i][j] == 1){
                counts.push(dankmemes(i, j, r, c, arr));
            }
        }
    }

    var result = 0;
    for(var i = 0; i < counts.length; i++){
        if(counts[i] >= result){
            result = counts[i];
        }
    }
    console.log(result);
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
