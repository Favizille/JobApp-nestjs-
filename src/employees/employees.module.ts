import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppModule } from 'src/app.module';
import { EmployeesController } from './employees.controller';
import { EmployeesService } from './employees.service';
import { Employee } from './model/model';

@Module({
    imports: [TypeOrmModule.forFeature([Employee])],
    providers:[EmployeesService],
    controllers:[EmployeesController],
})
export class EmployeesModule {}
