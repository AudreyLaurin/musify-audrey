const express = require("express");
const router = express.Router();
const multer = require('multer');
const AWS = require('aws-sdk');
const s3 = new AWS.S3();

// Multer setup to store files in memory
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Upload file route
router.post('/', upload.single('file'), (req, res) => {
    const file = req.file;
    const username = req.body.username;

    const base64File = file.buffer.toString('base64');

    if (!file || !username) {
        return res.status(400).send('No file or username provided.');
    }

    const uploadParams = {
        Bucket: 'dawt',
        Key: `audrey/${username}/${file.originalname}`,
        Body: Buffer.from(base64File, 'base64'),
        ContentType: file.mimetype,
    };

    s3.upload(uploadParams, (err, data) => {
        if (err) {
            console.error('Error uploading file:', err);
            return res.status(500).send('Error uploading file.');
        }

        res.send(`File uploaded successfully. ${data.Location}`);
    });
});

module.exports = router;