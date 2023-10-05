import { UserRepo } from "../repositories/user.repository";
import bcrypt from "bcrypt";
import { createToken } from "../utils/helper";

class UserService {
  protected userRepo;
  constructor() {
    this.userRepo = UserRepo.getInstance();
  }

  async login(email, password) {
    const user = await this.userRepo.findUserByEmail({ email: email });
    if (user) {
      const auth = await bcrypt.compare(password, user.password);
      if (auth) {
        const token = createToken(user?._id);
        return {
          user,
          token: token,
        };
      }
      throw Error("incorrect password");
    }
    throw Error("incorrect email");
  }

  async create(email, password) {
    const salt = await bcrypt.genSalt();
    const hasPassword = await bcrypt.hash(password, salt);
    return await this.userRepo.create({ email, password: hasPassword });
  }
}

const userService = new UserService();
export default userService;
