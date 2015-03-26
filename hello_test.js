//hellow world test
TestMyCode.run("testing hello world function", function(assert){
    var result = helloWorld();
    // is the result as we expected?
    assert.equals("hello world!", result);
});

TestMyCode.run("testing hello_uppercase function", function(assert){
	var result = hello_uppercase();
	assert.equals("hello, ", result);
});

TestMyCode.run("testing hello_joe", function(assert){
	var result = hello_joe();
	assert.equals("hello! ", result);
})

TestMyCode.run("testing number_list function",function(assert){
	var result = number_list(10);
	assert.equals(result.toString(),[0,1,2,3,4,5,6,7,8,9,10].toString());

});

TestMyCode.run("testing sum_numbers function", function(assert){
	var result = sum_number(8);
	assert.equals(result.toString(),[0+1+2+3+4+5+6+7+8].toString());
});