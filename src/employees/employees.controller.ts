import { Controller, Get, Post, Param, Patch, Body, ParseIntPipe, Delete} from '@nestjs/common';
import { EmployeeDto } from './employees.dto';
import { EmployeesService } from './employees.service';

@Controller('employees')
export class EmployeesController {
    constructor (private employeeService: EmployeesService){}

    @Get()
    getAll()
    {
        return this.employeeService.getAll();
    }

    @Post()
    createEmployee(@Param("id") id:number, @Body() employeeDto:EmployeeDto)
    {
        return this.employeeService.createEmployee(employeeDto);
    }

    
    @Patch('/:id')
    updateEmployee(@Param('id') id:number, @Body() employeeDto:EmployeeDto) 
    { 
        return this.employeeService.updateEmployee(id, employeeDto);
    }

    @Delete('/:id')
    deleteEmployee(@Param('id', ParseIntPipe) id:number)
    {
        this.employeeService.deleteEmployee(id);
        return 'Deleted'

    }
}
