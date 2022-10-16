import { forwardRef, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JobsModule } from './jobs/jobs.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Job } from './model/model';
import { EmployeesController } from './employees/employees.controller';
import { EmployeesService } from './employees/employees.service';
import { EmployeesModule } from './employees/employees.module';
import { Employee } from './employees/model/model';

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
  controllers: [AppController, EmployeesController],
  providers: [AppService, EmployeesService],
  
})
export class AppModule {}
