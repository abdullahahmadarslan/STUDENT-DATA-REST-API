const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/students-reg-api').then(() => {
    console.log("database connected successfully");
}).catch((error) => {
    console.log(`error:${error}`);
});