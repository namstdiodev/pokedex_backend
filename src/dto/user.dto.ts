import { Expose, Exclude } from "class-transformer";
import { BaseDTO } from "../base/base.dto";

export class UserDTO extends BaseDTO {
  @Expose()
  email!: string;

  @Expose()
  token: string;

  @Exclude()
  password!: string;
}
