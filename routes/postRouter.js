const postRouter = require('express').Router()
const Post = require('../models/post')



postRouter.get('/', (req, res) => {
    Post
        .find()
        .then(post => res.json(post))
        .catch(err => console.log(err))
})

postRouter.post('/', (req, res) => {
    Post
        .create(req.body)
        .then(post => res.json(post))
        .catch(err => console.log(err))

})

postRouter.get('/:id', (req, res) => {
    Post
        .findOne({ _id: req.params.id }) //get the id from req params and 
        .then(post => res.json(post))
        .catch(err => console.log(err))
})

postRouter.put('/:id', async (req, res) => {
    let postFind = await Post.findOne({ _id: req.params.id })//we get the post by id
    await Post.updateOne({ $set: req.body })//update the post
    postFind = await Post.findOne({ _id: req.params.id })//fetch again updated post by id
        .then(newPost => res.json(newPost))
        .catch(err => console.log(err))
})

postRouter.delete('/:id', (req, res) => {
    Post
        .deleteOne({ _id: req.params.id })
        .then(() => res.json(`The post has been deleted`))
        .catch(err => console.log(err))
})



module.exports = postRouter