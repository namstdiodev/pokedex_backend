import userService from "../services/user.service";

export const getAllUsers = async (req, res, next) => {
  try {
    const user = await userService.getAllUsers();
    res.success(user);
  } catch (err) {
    next(err);
  }
};

export const getUserById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const user = await userService.getUserById(id);
    res.success(user);
  } catch (err) {
    next(err);
  }
};
