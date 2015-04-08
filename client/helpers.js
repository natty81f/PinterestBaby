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