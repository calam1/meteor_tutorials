Meteor.subscribe('Recipes');//recipes is name of mongo collection 

Template.Recipes.helpers({
  recipes: () => {
    return Recipes.find({});
  }
})