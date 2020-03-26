const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {
  const authHeader = req.headers.authorization; // token
  // const token = req.headers['x-access-token'];

  if (!authHeader) {
    return res.status(401).json({ error: 'Token not provided.' });
  }

  const [, token] = authHeader.split(' '); // spliting token "Bearer krjr329rJJ0j0OAkpijpoNnOnio"
  // return array ['Bearer', 'krjr329rJJ0j0OAkpijpoNnOnio']
  // [, token] // destructuring array, ignoring the first variable index. Now the first array item is token

  try {
    jwt.verify(token, 'saltTest#', (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: 'Failed to authenticate token.' });
      }

    req.userIdToken = decoded.id;
    });

    return next();
  } catch (err) {
    return res.status(401).json({ error: 'Invalid token' });
  }
};
