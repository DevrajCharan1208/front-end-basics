let jsonRes = '{"fact":"Normal body temperature for a cat is 102 degrees F.","length":51}';

let jsonPar = JSON.parse(jsonRes);
console.log(jsonPar.fact);

let JSobj = {
    a: "first data",
    b: "second data",
    c: 4
};

console.log(JSobj.c);
console.log(jsonRes);

let JSONobj = JSON.stringify(JSobj);
console.log(JSobj);
console.log(JSONobj);
