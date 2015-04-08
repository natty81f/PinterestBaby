//helper function to retrieve categories from the database.
Template.categories.helpers({
  Categories:function() {
    return Categories.find();
  }
});

//States what catnotselected means. We basically need to say — look at category Session and if it’s null, the category isn’t selected yet
Template.books.helpers({
  catnotselected:function() {
    return Session.equals("category",null);
  },
  category:function() {
    return  Session.get('category');
  }
});

//helper function to retrieve books from the database.
Template.books.helpers({
  booklist:function(){
    return Books.find({catName:Session.get("category")});
  }
});

//helper function to display number of likes and whether users have already liked it
Template.bok.helpers({
  numLikes:function() {
    return Likes.find({book:this._id}).count();
  },
  likesThis:function() {
    var doeslike = Likes.findOne({muser:Meteor.userId(), book:this._id});
    if (doeslike) {
      return 'You liked this';
    }
  }
});

//Use username as credential instead of an email as a way to login
Accounts.ui.config({
  passwordSignupFields: "USERNAME_ONLY"
});