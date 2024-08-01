// src/services/UserService.ts
import { UserRepository } from '../repositories/UserRepository';
import { User } from '../models/User';

export class UserService {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  public createUser = async (data: any): Promise<User> => {
    const user = new User();
    user.name = data.name;
    user.email = data.email;
    return await this.userRepository.save(user);
  };
}
