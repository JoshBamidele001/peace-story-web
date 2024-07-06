import mongoose from 'mongoose';

const postSchema = new mongoose.Schema(
    {
        userId: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
            unique: true,
        },
        image: {
            type: String,
            default: 'https://firebasestorage.googleapis.com/v0/b/register-c737c.appspot.com/o/dphospen%2FBlack%20and%20White%20Illustrative%20Woman%20Autobiography%20Book%20Cover.jpg?alt=media&token=7ad97c07-a4dd-4ce8-93ad-23e848940be4',
        },
        genre: {
            type: String,
            default: 'uncategorized',
        },
        category: {
            type: String,
            default: 'uncategorized',
        },
        slug: {
            type: String,
            required: true,
            unique: true,
        },
    },
    { timestamps: true }
);

const Post = mongoose.model('Post', postSchema);

export default Post;
