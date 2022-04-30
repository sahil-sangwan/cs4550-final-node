require('mongoose');
const routeTileSchema = mongoose.Schema({
    network: String,
    origin: {
        stationName: String,
        bikes: Number,
    },
    destination: {
        stationName: String,
        docks: Number,
    },
    routeName: String,
    type: String,
    rating: Number,
    postedBy: {
        username: String,
        uid: String,
    }
}, {collection: 'routes'});
module.exports = routeTileSchema;
