import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TeacherModule } from './teacher/teacher.module';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [GraphQLModule.forRoot({
    autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
  }), TeacherModule,
  ]
})
export class AppModule { }
