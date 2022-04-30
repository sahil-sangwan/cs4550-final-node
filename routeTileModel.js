require('mongoose');
const routeTileSchema = require('./routeTileSchema');
const routeTileModel = mongoose
    .model('RouteTileModel', routeTileSchema);
module.exports = routeTileModel;
