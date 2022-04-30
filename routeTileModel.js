import mongoose from 'mongoose';
const routeTileSchema = require('./routeTileSchema.js');
const routeTileModel = mongoose
    .model('RouteTileModel', routeTileSchema);
module.exports = routeTileModel;
