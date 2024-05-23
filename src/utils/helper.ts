import jwt from "jsonwebtoken";

export const createToken = (id) => {
  const maxAge = 3 * 24 * 60 * 60;
  return jwt.sign({ id }, "pokedex_secret", {
    expiresIn: maxAge,
  });
};

export const verifyToken = (token: string): { _id: string; email: string } => {
  try {
    const tokenData = jwt.verify(token, 'pokedex_secret');
    return tokenData as { _id: string; email: string };
  } catch (error) {
    throw new Error('Unauthenticated');
  }
};
