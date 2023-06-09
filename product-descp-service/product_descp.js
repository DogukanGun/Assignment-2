module.exports = function (options) {
    //Import the mock data json file
    const mockData = require('./MOCK_DATA.json');

    //Add the patterns and their corresponding functions
    this.add('role:product,cmd:getProductURL', productURL);
    this.add('role:product,cmd:getProductName', productName);

    let data = JSON.parse(mockData);
    //To DO: add the pattern functions and describe the logic inside the function
    function productURL(msg, respond) {
        try{
            for (var i = 0; i < data.length; i++) {
                var item = data[i];
                if(item.product_id == msg.productId){
                    respond(null, { result: item.product_url });
                }
            }
        }catch(err){
            console.log(err);
        }
        respond(null, { result: ''});
    }
    function productName(msg, respond) {
        try{
            for (var i = 0; i < data.length; i++) {
                var item = data[i];
                if(item.product_id == msg.productId){
                    respond(null, { result: item.product_name });
                }
            }
        }catch(err){
            console.log(err);
        }
        respond(null, { result: ''});
    }
}