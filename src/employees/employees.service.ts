import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EmployeeDto } from './employees.dto';
import { Employee } from './model/model';
@Injectable()
export class EmployeesService {
    constructor(@InjectRepository(Employee) private employeeRepository: Repository<Employee>){}

    getAll(){
        const getAllEmployees = this.employeeRepository.find()

        if(!getAllEmployees){
            throw new NotFoundException("No employees yet")
        }

        return getAllEmployees;
    }

    async createEmployee(employeeDto:EmployeeDto):Promise<Employee>{

        const createEmployee = await this.employeeRepository.save(employeeDto)

            if(!createEmployee){
                throw new NotFoundException("Employee has not created successfully")
            }
        return createEmployee;
    }

    updateEmployee(id:number, employeeDto:EmployeeDto){
        const updatedEmployeeDto = this.employeeRepository.update({id},employeeDto);

        if(!employeeDto){
            throw new NotFoundException("Update failed");
        }

        return employeeDto;
    }

    async deleteEmployee(id: number){
        const result = await this.employeeRepository.delete({id});

        if(!result){
            throw new NotFoundException("Deletion failed");
        }
    }


}
