FlowRouter.route('/', {
  name: 'home',
  action() {
    GAnalytics.pageview();
    // refers to HomeLayout template in HomeLayout.html
    BlazeLayout.render('HomeLayout');
  }
});

FlowRouter.route('/recipe-book', {
  name: 'recipe-book',
  action() {
    GAnalytics.pageview();
    // refers to MainLayout template in MainLayout.html
    // main: Recipes, Recipes refers to template in recipes.html
    BlazeLayout.render('MainLayout', {main: 'Recipes'});
  }
});