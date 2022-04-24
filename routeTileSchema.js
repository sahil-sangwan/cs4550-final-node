import mongoose from 'mongoose';
const schema = mongoose.Schema({
    origin: {
        location: String,
        bikes: Number,
    },
    destination: {
        location: String,
        docks: Number,
    },
    name: String,
    type: String,
    rating: Number,
    postedBy: {
        username: String,
        uid: String,
    }
}, {collection: 'routes'});
export default schema;
