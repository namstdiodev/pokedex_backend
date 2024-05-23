import { Expose, plainToClass } from 'class-transformer';

// tim hieu abstract
export abstract class BaseDTO {
  @Expose()
  _id: number;

  @Expose()
  createdAt: Date;

  @Expose()
  updatedAt: Date;

  // tim hieu staic funtion
  static plainToClass<T>(this: new (...args: any[]) => T, obj: T): T {
    return plainToClass(this, obj, { excludeExtraneousValues: true });
  }
}
