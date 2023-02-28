const withAuth = (req, res, next) => {
    //The middleware function checks if the logged_in property is set in the session object of the req parameter. 
    if (!req.session.logged_in) {
    //If the logged_in property is not set, then the function redirects the user to the /login route using the res.redirect() method. 
      res.redirect('/login');
    } else {
    //If the logged_in property is set, then the function calls the next() function to allow the request to continue to the next middleware or route handler.
      next();
    }
  };
  
  module.exports = withAuth;

  
  
  