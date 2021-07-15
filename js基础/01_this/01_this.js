var name = "windowsName";

function a() {
    var name = "Cherry";
    console.log(this.name); // windowsName
    console.log("inner:" + this); // inner: Window
}
a();
console.log("outer:" + this) // outer: Window