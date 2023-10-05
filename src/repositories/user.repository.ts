import { UserDoc } from "../models/docs/user.doc";
import UserModel from "../models/user.model";
import { BaseRepository } from "./base.repository";

export class UserRepo extends BaseRepository<UserDoc> {
  private static instance: UserRepo;

  private constructor() {
    super();
    this.model = UserModel;
  }

  static getInstance(): UserRepo {
    if (!UserRepo.instance) {
      UserRepo.instance = new UserRepo();
    }

    return UserRepo.instance;
  }

  findUserByEmail = async (email) => {
    return await this.model.findOne(email);
  };
}
