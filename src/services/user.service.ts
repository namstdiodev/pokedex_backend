import { UserRepo } from "../repositories/user.repository";
import bcrypt from "bcrypt";
import { createToken } from "../utils/helper";
import { UserDTO } from "../dto/user.dto";
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
        user.token = token
        return UserDTO.plainToClass(user);
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

  async getAllUsers() {
    const user = await this.userRepo.find({});
    return UserDTO.plainToClass(user);
  }

  async getUserById(id) {
    const user = await this.userRepo.findById(id)
    return UserDTO.plainToClass(user);
  }
}

const userService = new UserService();
export default userService;
