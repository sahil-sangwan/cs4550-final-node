import mongoose from 'mongoose';
import routeTileSchema from './routeTileSchema.js'
const routeTileModel = mongoose
    .model('RouteTileModel', routeTileSchema);
export default routeTileModel;
