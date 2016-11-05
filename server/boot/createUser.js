module.exports = function(app) {
  // to create user to keep apis protected
  app.dataSources.Mongo.automigrate('user', function(err) {
    if (err) throw err;
    var userParams = {
      username: "username",   //anyusername with which u want to access the apis of ur portfolio
      password: "password"    //ur own password
    };

    app.models.user.create(userParams, function(err, user) {
      if (err) throw err;
    });
  });
};
