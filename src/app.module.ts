import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JobsModule } from './jobs/jobs.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Job } from './model/model';
import { EmployeesModule } from './employees/employees.module';
import { Employee } from './employees/model/model';
import { Connection } from 'typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'jobs',
      entities: [Job, Employee],
      synchronize: true,
    }),
    JobsModule,
    EmployeesModule
    ],
  controllers: [AppController],
  providers: [AppService],
  
})
export class AppModule {
  constructor(private readonly connection: Connection){

  }
}
