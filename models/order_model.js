const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
    userId : {
        type : String,
        require : true,
    },
    userName : {
        type : String,
        require : true,
    },
    tebleNo : {
        type : String,
        require : true,
    },
    productName : {
        type : String,
        require : true,
    },
    price : {
        type : String,
        require : true,
    },
    quantity : {
        type : String,
        require : true,
    },
    orderTime : {
        type : Date,
        default : Date.now(),
        require : true,
    },
    orderImage : {
        type : String,
        require : true,
    },
    orderStatus : {
        type : String,
        require : true,
    },
    paymentStatus : {
        type : String,
        require : true,
    },
    deliveredStatus : {
        type : String,
        require : true,
    }
    
});

module.exports = mongoose.model('order',orderSchema);