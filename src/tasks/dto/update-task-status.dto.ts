import { IsEnum } from 'class-validator';
import { TaskStatus } from '../task.model';

export class UpsateTaskStatusDto {
  @IsEnum(TaskStatus)
  status: TaskStatus;
}
