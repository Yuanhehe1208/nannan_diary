// var name = "windowsName";

// function a() {
//     var name = "Cherry";
//     console.log(this.name); // windowsName
//     console.log("inner:" + this); // inner: Window
// }
// a();
// console.log("outer:" + this) // outer: Window

// var a = {
//     name : "Cherry",
//     fn: function (a,b) {
//         console.log(a + b)
//     }
// }
// var b = a.fn;
// b.apply(a, [1, 2])


var a = {
    name: 'Cherry',
    fn: function (a, b) {
        console.log(a + b)
    }
}
var b = a.fn;
b.bind(a, 1, 2)()