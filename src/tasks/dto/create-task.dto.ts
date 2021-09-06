import { IsNotEmpty } from 'class-validator';

export class CreateTaskDto {
  @IsNotEmpty()
  public title: string;

  @IsNotEmpty()
  public description: string;
}
