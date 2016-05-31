Meteor.publish('Recipes', function() {
  return Recipes.find({author: this.userId})
})