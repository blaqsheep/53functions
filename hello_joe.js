var userName = prompt("Input your username ");
var bob = "Bob";
var joe = "Joe";

function hello_uppercase(){
	return ("hello! ");
}

if(userName === bob||userName ===joe){
	document.write (hello_uppercase());
}
else{
	document.write("Hello, " + userName);
};