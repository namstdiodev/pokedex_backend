import userService from "../services/user.service";
import { handleErrors } from "@utils/helper";

export const signup_post = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userService.create(email, password);
    res.status(201).json(user);
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).send({ errors });
  }
};

export const login_post = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userService.login(email, password);
    res.status(200).json(user);
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).send({ errors });
  }
};
