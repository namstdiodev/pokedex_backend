import userService from "../services/user.service";

export const signup_post = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await userService.create(email, password);
    res.success(user);
  } catch (err) {
    next(err);
  }
};

export const login_post = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await userService.login(email, password);
    res.success(user)
  } catch (err) {
    next(err);
  }
};