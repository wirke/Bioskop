const isLoggedIn = (req, res, next) => {
  if (req.session && req.session.userId) {
    return next();
  }
  return res.status(401).json({ message: 'You need to be logged in!' });
};

module.exports = {isLoggedIn};
