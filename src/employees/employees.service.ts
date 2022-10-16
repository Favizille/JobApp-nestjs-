import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Employee } from './model/model';
@Injectable()
export class EmployeesService {
    constructor(@InjectRepository(Employee) private employeeRepository: Repository<Employee>){}

    getAll(){
        const getAllEmployees = this.employeeRepository.find()

        return getAllEmployees;
    }


}
