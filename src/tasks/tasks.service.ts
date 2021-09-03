import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
  private tasks = [];

  public getAllTasks() {
    return this.tasks;
  }
}
