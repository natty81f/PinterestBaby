//helper function to retrieve categories from the database
Template.categories.helpers({
  Categories:function() {
    return Categories.find();
  }
});