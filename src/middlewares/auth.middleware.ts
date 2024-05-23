import { verifyToken } from "../utils/helper";

const validateAuth = (req, res, next) => {
    const auth = req.headers.authorization;
    if (auth && auth.startsWith('Bearer')) {
      const token = auth.slice(7);
  
      try {
        const tokenData = verifyToken(token);
        req.body.tokenData = tokenData;
        next();
      } catch (error) {
        next(error)
      }
    } else {
        throw new Error('Unauthenticated');
    }
};

export default validateAuth;
