const characterMiddleware = (req, res, next) => {
  if (req.method === 'POST') {
    req.body = {
      ...req.body,
      thumbNailUrl: 'rickandmortyapi.com/api/character/avatar/361.jpeg"',
    };
  }
  next();
};

module.exports = (req, res, next) => {
  if (req.path === '/character') {
    characterMiddleware(req, res, next);
  } else {
    next();
  }
};
