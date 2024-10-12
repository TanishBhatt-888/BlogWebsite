import multer from 'multer';
import GridFsStorage from 'multer-gridfs-storage'; // Import as default

const storage = new GridFsStorage({
    url: `mongodb+srv://tanishbhatt888:Tanish@blogapp.fgfg9.mongodb.net/?retryWrites=true&w=majority&appName=BlogApp`,
    options: {
        useNewUrlParser: true, // Optional but recommended
        useUnifiedTopology: true // Optional but recommended
    },
    file: (req, file) => {
        const match = ["image/png", "image/jpg"];

        if (match.indexOf(file.mimetype) === -1) {
            return `${Date.now()}-blog-${file.originalname}`;
        }

        return {
            bucketName: "photos",
            filename: `${Date.now()}-blog-${file.originalname}`
        };
    }
});

export default multer({ storage });
