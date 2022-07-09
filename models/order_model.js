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
        type : Boolean,
        require : true,
    },
    paymentStatus : {
        type : Boolean,
        require : true,
    },
    deliveredStatus : {
        type : Boolean,
        require : true,
    }
    
});

module.exports = mongoose.model('order',orderSchema);