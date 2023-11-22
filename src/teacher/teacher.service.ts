import { Injectable } from '@nestjs/common';
import { Teacher } from './teacher.entity';

@Injectable()
export class TeacherService {
    async findAll(): Promise<Teacher[]> {
        const teacher = new Teacher();
        teacher.id = 1;
        teacher.name = "Walter";

        return [teacher];
    }
}
