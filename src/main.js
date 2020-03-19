let div = dom.create("<div>new_parent</div>");
//dom.after(test, span);

//dom.append(test, span);

//dom.wrap(test, div);

//console.log(dom.empty(test));

//dom.attr(test, "title", "大家好");
//const title_v = dom.attr(test, "title");
//console.log(`title:${title_v}`);

//dom.style(test, { border: "1px solid red", width: "400px" });
//console.log(dom.style(test, "border"));
//dom.style(test, "border", "1px solid blue");

//dom.class.add(test, "red");
//dom.class.remove(test, "red");
//console.log(dom.class.has(test, "red"));

//let fn = () => {
//console.log("我点击了");
//};
//dom.on(test, "click", fn);
//dom.off(test, "click", fn);

//const div1 = dom.find("#test")[0];
//console.log(div1);

let test1 = dom.find("#test1")[0];
let temp = dom.find(".blue", test1)[0];
console.log(temp);

let c1 = dom.find("#c1")[0];
let c3 = dom.find("#c3")[0];
console.log(dom.siblings(c1));
console.log(dom.previous(c3));

let t = dom.find("#travel")[0];
dom.travel(t.children, n => {
  dom.style(n, "color", "green");
});

let t3 = dom.find("#t3")[0];
console.log(dom.index(t3));
