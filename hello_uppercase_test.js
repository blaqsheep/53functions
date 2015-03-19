TestMyCode.run("testing hello world function", function(assert){
    var result = hello_uppercase();
    // is the result as we expected?
    assert.equals("hello, ", result);
});