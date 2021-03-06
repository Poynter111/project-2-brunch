const router          = require('express').Router();
const posts           = require('../controllers/posts');
const registrations   = require('../controllers/registrations');
const sessions        = require('../controllers/sessions');
const users           = require('../controllers/users');

function secureRoute(req, res, next){
  if(!req.session.userId){
    return req.session.regenerate(() =>{
      req.flash('danger', 'You must be logged in');
      res.redirect('/');
    });
  }

  return next();
}

router.get('/', (req,res) => res.render('home'));
//----------------Posts-Start---------------------------------------------------
router.route('/posts')
  .get(posts.index)
  .post(posts.create);
router.route('/posts/new')
  .get(secureRoute, posts.new);
router.route('/posts/:id')
  .get(posts.show)
  .put(posts.update)
  .delete(posts.delete);
router.route('/posts/:id/edit')
  .get(posts.edit);
//----------------Posts-End-----------------------------------------------------
//----------------Registrations-Start-------------------------------------------
router.route('/signup')
  .get(registrations.new)
  .post(registrations.create);
router.route('/signin')
  .get(sessions.new)
  .post(sessions.create);
router.route('/logout')
  .get(sessions.delete);
//----------------Registrations-End---------------------------------------------
//----------------Users-Start---------------------------------------------------
router.route('/users/:id')
  .get(users.show);
//----------------Users-End-----------------------------------------------------
router.route('/*').get((req, res) => {
  res.render('statics/404');
});

module.exports = router;
