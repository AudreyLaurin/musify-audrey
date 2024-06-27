const express = require("express");
const router = express.Router();
const AWS = require('aws-sdk');
const s3 = new AWS.S3();

router.get('/:username', async (req, res) => {
    const username = req.params.username;
    const params = {
        Bucket: 'dawt',
        Prefix: `audrey/${username}/`
    };

    try {
        const data = await s3.listObjectsV2(params).promise();
        const files = data.Contents.map(file => ({
            Key: file.Key,
            LastModified: file.LastModified,
            Size: file.Size,
            Url: s3.getSignedUrl('getObject', { Bucket: 'dawt', Key: file.Key, Expires: 60 })
        }));

        res.json(files);

    } catch (err) {
        console.error('Error listing files:', err);
        res.status(500).send('Error listing files.');
    }
});

module.exports = router;