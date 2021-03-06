const mongoose  = require('mongoose');
mongoose.Promise = require('bluebird');


const { databaseURI } = require('../config/environment');
mongoose.connect(databaseURI);

const Post = require('../models/post');
const User = require('../models/user');

Post.collection.drop();
User.collection.drop();


User
  .create([
    {
      username: 'Kenny',
      email: 'kenny@ga.co',
      password: 'p',
      passwordConfirmation: 'p'
    },
    {
      username: 'Billy',
      email: 'billy@ga.co',
      password: 'p',
      passwordConfirmation: 'p'
    },
    {
      username: 'Tom',
      email: 'tom@ga.co',
      password: 'p',
      passwordConfirmation: 'p'
    },
    {
      username: 'Alice',
      email: 'Alice@ga.co',
      password: 'p',
      passwordConfirmation: 'p'
    },
    {
      username: 'Kate',
      email: 'kate@ga.co',
      password: 'p',
      passwordConfirmation: 'p'
    },
    {
      username: 'Greg',
      email: 'greg@ga.co',
      password: 'p',
      passwordConfirmation: 'p'
    }
  ])
  .then(users => {
    console.log(`${users.length} users were created.`);

    return Post.create([
      {
        name: 'Caravan',
        location: 'Kings-cross',
        date: new Date(2015, 07, 15),
        photo: 'https://lh6.googleusercontent.com/-b0q2IGJX_WI/USIZDOR6v4I/AAAAAAAAFLw/sFNDy6qyI_k/s720/caravan+%286+of+8%29.jpg',
        rating: 4,
        service: 2,
        price: 2,
        food: 5,
        user: users[0]._id
      },{
        name: 'Breakfast-Club',
        location: 'Soho',
        date: new Date(2016, 09, 23),
        photo: 'http://www.oubruncher.com/photos1/1456_1.jpg',
        rating: 5,
        service: 2,
        price: 2,
        food: 5,
        user: users[1]._id
      },{
        name: 'Notes',
        location: 'Kings-cross',
        date: new Date(2015, 08, 02),
        photo: 'https://s3-media2.fl.yelpcdn.com/bphoto/7NKgygXE45a_BkdZuV0BqQ/348s.jpg',
        rating: 3,
        service: 1,
        price: 4,
        food: 2,
        user: users[1]._id
      },{
        name: 'The Golden Chippy',
        location: 'Barnet',
        date: new Date(2015, 06, 02),
        photo: 'https://static.standard.co.uk/s3fs-public/thumbnails/image/2016/08/05/16/allstarbeere.jpg?w968h681',
        rating: 1,
        service: 1,
        price: 1,
        food: 1,
        user: users[2]._id
      },{
        name: 'R & H cafe gallery',
        location: 'Chelsea',
        date: new Date(2015, 01, 01),
        photo: 'https://gq-images.condecdn.net/image/31jQRbOzxK1/crop/405/landscape/f/Egg-Asparagus-GQ-25May17_b.jpg',
        rating: 1,
        service: 1,
        price: 1,
        food: 1,
        user: users[2]._id
      },{
        name: 'Bar 61 Restaurant',
        location: 'Paris',
        date: new Date(2018, 08, 02),
        photo: 'https://hips.hearstapps.com/harpersbazaaruk.cdnds.net/17/08/2560x1280/landscape-1487675827-brunch.jpg?resize=768:*',
        rating: 5,
        service: 5,
        price: 1,
        food: 5,
        user: users[3]._id
      },{
        name: 'The Clink Restaurant',
        location: 'Oxford Circus',
        date: new Date(2018, 02, 09),
        photo: 'https://assets.londonist.com/uploads/2017/01/i875/cinnamon_soho-s_parathas_with_fried_eggs__tomatoes_and_pomegranate_raita.jpg',
        rating: 4,
        service: 3,
        price: 1,
        food: 5,
        user: users[4]._id
      },{
        name: 'The Lounge Cafe',
        location: 'Dalston',
        date: new Date(2015, 08, 02),
        photo: 'https://www.squaremeal.co.uk/~/media/Import/C2/BC_008_resized.jpg?h=400&w=700&useCustomFunctions=1&centerCrop=1',
        rating: 4,
        service: 3,
        price: 1,
        food: 5,
        user: users[2]._id
      },{
        name: 'Zeret Kitchen',
        location: 'Eping',
        date: new Date(2018, 12, 30),
        photo: 'http://www.abouttimemagazine.co.uk/wp-content/uploads/2015/05/KW9C0705.jpg',
        rating: 4,
        service: 3,
        price: 1,
        food: 5,
        user: users[4]._id
      },{
        name: 'Gastronhome',
        location: 'Soho',
        date: new Date(2015, 08, 02),
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzg6b7UwGN5DPkD1DxueaI8iJ3jFmhQHiKtd9h3dn-IY1gD2YI',
        rating: 4,
        service: 4,
        price: 2,
        food: 5,
        user: users[4]._id
      },{
        name: 'The Ledbury',
        location: 'Kings-cross',
        date: new Date(2018, 01, 01),
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2kIb6XoyhuTzXNm0q1aDG-UKaTcIzkKToLEOYQQdDg4nSEdyTKA',
        rating: 2,
        service: 1,
        price: 5,
        food: 5,
        user: users[5]._id
      },{
        name: 'Camilya of Mensa',
        location: 'Kings-cross',
        date: new Date(2017, 06, 30),
        photo: 'http://badegg.london/wp-content/uploads/2014/03/BadEgg_0007_Bad-Egg-Food-21.jpg',
        rating: 4,
        service: 3,
        price: 1,
        food: 5,
        user: users[2]._id
      },{
        name: 'Loro di Napoli',
        location: 'Angel',
        date: new Date(2018, 10, 15),
        photo: 'http://1.bp.blogspot.com/-JWzcmPMyNbY/VLB4L5wIYdI/AAAAAAAAB04/w_X-XJpI4rI/s1600/Early%2BBird%2BBreakfast.jpg',
        rating: 4,
        service: 3,
        price: 2,
        food: 5,
        user: users[3]._id
      },{
        name: 'Pizzetta Pizza',
        location: 'Croydon',
        date: new Date(2017, 04, 09),
        photo: 'https://images.oyster.com/articles/10176-8281606433-cdc4056b55-z.jpg',
        rating: 4,
        service: 5,
        price: 5,
        food: 2,
        user: users[4]._id
      },{
        name: 'Raison Detre',
        location: 'Elephant and castle',
        date: new Date(2018, 04, 20),
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDQxELBDy96SKbUccL9YPw-_ubJGUTtJb3AAzXhI4_iE0vhYeY',
        rating: 4,
        service: 3,
        price: 5,
        food: 5,
        user: users[0]._id
      }
    ])
  })
  .then(posts => {
    console.log(`${posts.length} posts were created.`);
  })
  .catch(err => console.log(err))
  .finally(()=> mongoose.connection.close());
