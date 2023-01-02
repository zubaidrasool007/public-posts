var express = require('express');
var router = express.Router();
const PostModel = require('../model/post.model');

/* GET All posts. */
router.get('/', async (req, res, next) => {
  const posts = await PostModel.find({});
  return res.status(201).send({ posts });
});

/* Create a post. */
router.post('/', async (req, res, next) => {
  const post = req.body;
  const newPost = new PostModel(post);
  const postCreated = await newPost.save();
  return res.status(200).send({ post: postCreated });
});

/* Update a post. */
router.put('/', async (req, res, next) => {
  const post = req.body;
  await PostModel.findOneAndUpdate({_id: post.id}, post);
  const posts = await PostModel.find({});
  return res.status(200).send({ posts });
});

module.exports = router;
