import mongoose from 'mongoose';

const Connection = async (DB_USERNAME, DB_PASSWORD) => {
    const URL = `mongodb://${DB_USERNAME}:${DB_PASSWORD}@blogapp-shard-00-00.fgfg9.mongodb.net:27017,blogapp-shard-00-01.fgfg9.mongodb.net:27017,blogapp-shard-00-02.fgfg9.mongodb.net:27017/?ssl=true&replicaSet=atlas-hzrdle-shard-0&authSource=admin&retryWrites=true&w=majority&appName=BlogApp`;
    const mongoURI = 'mongodb://localhost:/image-upload';
    try {
        await mongoose.connect(URL, {})
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;
