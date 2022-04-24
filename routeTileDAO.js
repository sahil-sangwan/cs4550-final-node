import routeTileModel from './routeTileModel.js';
export const findAllRoutes = () => routeTileModel.find();
export const createRoute = (route) => routeTileModel.create(route);
export const deleteRoute = (rid) => routeTileModel.deleteOne({_id: rid});
export const updateRoute = (rid, route) => routeTileModel.updateOne({_id: rid}, {$set: route})