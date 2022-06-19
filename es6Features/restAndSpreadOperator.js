let colour = ["red", "blue", "green", "orange", "violet"]

console.log(...colour);

function spread(a,b,c,d) {
    console.log(a,b,c,d)
}
spread(...colour)

function rest(a,b,...c) {
    console.log(a,b,c);
}
rest(52,63,94,75,82,16)
