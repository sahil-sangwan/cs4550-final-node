const routeTileModel = require('./routeTileModel');

const findAllRoutes = () => {
    return routeTileModel.find();
}
const createRoute = (route) => {
    return routeTileModel.create(route);
}
const deleteRoute = (rid) => {
    return routeTileModel.deleteOne({_id: rid});
}
const updateRoute = (rid, route) => {
    return routeTileModel.updateOne({_id: rid}, {$set: route})
}
const findRoutesForCity = (city) => {
    return routeTileModel.find({network: city})
}

module.exports = {
    findAllRoutes, createRoute, deleteRoute, updateRoute, findRoutesForCity
}