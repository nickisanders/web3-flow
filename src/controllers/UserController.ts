// src/controllers/UserController.ts
import { Request, Response } from 'express';
import { UserService } from '../services/UserService.js';

class UserController {
  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  public createUser = async (req: Request, res: Response): Promise<Response> => {
    const user = await this.userService.createUser(req.body);
    return res.status(201).json(user);
  };
}

export default new UserController();
