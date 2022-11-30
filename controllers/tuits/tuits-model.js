import mongoose from 'mongoose';
import tuitsSchema from './tuits-schema.js'
const tuitsModel = mongoose
    .model('tuitModel', tuitsSchema);
export default tuitsModel;