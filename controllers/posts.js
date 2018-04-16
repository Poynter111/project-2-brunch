const Post = require('../models/post');

function postsIndex(req, res){
  Post
    .find()
    .populate('user')
    .exec()
    .then(post => {
      res.render('posts/index', {post});
    });
}

function postsShow(req, res){
  Post
    .findById(req.params.id)
    .populate('user')
    .exec()
    .then(post => res.render('posts/show', {post}));
}

function postsNew(req, res){
  res.render('posts/new', {error: null});
}

function postsCreate(req, res){
  req.body.user = req.currentUser;
  Post
    .create(req.body)
    .then(() => res.redirect('/posts'))
    .catch((error) => {
      if(error.name === 'ValidationError'){
        return res.badRequest('/posts/new', error.toString());
      }
    });
}

function postsEdit(req, res){
  Post
    .findById(req.params.id)
    .populate('user')
    .exec()
    .then(post => res.render('posts/edit', {post}));
}

function postsUpdate(req, res){
  console.log('before Post.findById');
  Post
    .findById(req.params.id)
    .exec()
    .then(post => {
      console.log('inside then after findById');
      post = Object.assign(post, req.body);
      return post.save();
    })
    .then(post => {
      console.log('in then postsUpdate');
      res.redirect(`/posts/${post.id}`);
    });
}

function postsDelete(req, res){
  Post
    .findById(req.params.id)
    .exec()
    .then(post => post.remove())
    .then(() => res.redirect('/posts'));
}
module.exports = {
  index: postsIndex,
  show: postsShow,
  delete: postsDelete,
  new: postsNew,
  create: postsCreate,
  edit: postsEdit,
  update: postsUpdate
};
