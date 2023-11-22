import { Resolver, Query } from '@nestjs/graphql';
import { TeacherService } from './teacher.service';
import { Teacher } from './teacher.entity';


@Resolver(of => Teacher)
export class TeacherResolver {
    constructor(private teacherService: TeacherService) { }

    @Query(returns => [Teacher])
    teachers(): Promise<Teacher[]> {
        return this.teacherService.findAll();
    }
}
