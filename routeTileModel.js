const routeTileSchema = require('./routeTileSchema');
const mongoose = require("mongoose");
const routeTileModel = mongoose
    .model('RouteTileModel', routeTileSchema);
module.exports = routeTileModel;
