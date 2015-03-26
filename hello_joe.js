var userName = prompt("Input your username ");
var bob = "Bob";
var joe = "Joe";

function hello_joe(){
	return ("hello! ");
}

if(userName === bob||userName ===joe){
	document.write (hello_joe());
}
else{
	document.write("Hello, " + userName);
};