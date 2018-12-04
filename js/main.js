var message = 'Hello!',
	myNumber = Math.floor(22.5),
	myBool = true,
	array = [1,2,3],
	obj = {name:"Somename"};
console.log(message);
console.log(myNumber);
console.log(myBool);
console.log(array);
console.log(obj);

var i = 1;

console.log(++i);
console.log(i);
console.log(i++);
console.log(i);

i += 2;
console.log(i);
i -= 2;
console.log(i);
i *= 2;
console.log(i);
i /= 2;
console.log(i);
i %= 2;
console.log(i);

i = Math.PI;
console.log(i);
i = Math.floor(89.279);
console.log(i);
i = Math.floor(Math.random()*11);
console.log(i);
i = Math.pow(2,5);
console.log(i);

var str = "jQuery js";
console.log(str.length );
console.log(str.indexOf("js",2));
console.log(str.replace('js', 'javascript'));
console.log(str.toUpperCase());
console.log(str.toLowerCase());