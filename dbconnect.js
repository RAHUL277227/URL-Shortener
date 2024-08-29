const mongoose = require("mongoose");

async function ConnectToDB(Uri) {
    await mongoose.connect(Uri);
}

module.exports = {
    ConnectToDB,
}