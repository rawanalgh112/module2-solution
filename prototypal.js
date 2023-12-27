//
// var parent = {
// value: "parentValue",
// obj: {
// objValue:"parentObjValue"
// },
// walk: function () {
// console.log("walking!");
//
// }
//
// };
//
//
// var child = Object.create(parent);
// console.log("CHILD - child.value: ", child.value);
// console.log("CHILD - child.obj.objValue: ", child.obj.objValue);
// console.log("PARENT - parent.value : ", parent.value);
// console.log("PARENT - parent.obj.objValue: ", parent.obj.objValue);
// console.log("PARENT : ", parent);
// console.log("CHILD : ", child);
//
//
//
// child.value = "childValue";
// child.obj.objValue ="childObjValue";
// console.log("AFTER CHANGE");
// console.log("CHILD - child.value: ", child.value);
// console.log("CHILD - child.obj.objValue: ", child.obj.objValue);
// console.log("PARENT - parent.value : ", parent.value);
// console.log("PARENT - parent.obj.objValue: ", parent.obj.objValue);
// console.log("PARENT : ", parent);
// console.log("CHILD : ", child);
//
//
//
// console.log("child.obj === parent.obj ? ", child.obj === parent.obj);
//
//
//
// var grandChild = Object.create(child);
// console.log("Grandchild: ", grandChild);
// grandChild.walk();


function Dog (name) {
this.name = name ;
  console.log("'this is:'", this);
}

var myDog = new Dog ("Max");
console.log("myDog: ", myDog );

Dog("Max2");
