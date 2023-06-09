module.exports = function (options) {
    //Import the mock data json file
    const mockData = require('./MOCK_DATA.json');
    //To DO: Add the patterns and their corresponding functions

    this.add('role:product,cmd:getProductPrice', productPrice);
    let data = JSON.parse(mockData);

    //To DO: add the pattern functions and describe the logic inside the function
    function productPrice(msg, respond) {
        for (var i = 0; i < data.length; i++) {
            var item = data[i];
            if(item.product_id == msg.productId){
                respond(null, { result: item.product_price });
            }
        }
        respond(null, { result: ''});
    }
}