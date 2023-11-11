import { Module } from '@nestjs/common';
import { TeacherService } from './teacher.service';
import { TeacherResolver } from './teacher.resolver';

@Module({
  providers: [TeacherService, TeacherResolver]
})
export class TeacherModule {}
