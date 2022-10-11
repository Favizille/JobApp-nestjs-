import { Controller, Get, Post, Param, Body, Patch, ParseIntPipe, Delete} from '@nestjs/common';
import { JobDto } from './jobs.dto';
import { JobsService } from './jobs.service';

@Controller('jobs')
export class JobsController {
    constructor (private jobService: JobsService){}
    
    @Get()
    getAll()
    {
        return this.jobService.getAll();
    }

    @Get('/:id')
    async getJobById(@Param('id') id:number)
    {
        return this.jobService.getJobById(id);
    }

    @Post()
    async createJob(@Param('id') id:number, @Body() jobDto:JobDto)
    {
        return await this.jobService.createJob(jobDto);
    }

    @Patch('/:id')
    async updateJob(@Param('id') id:number, @Body() jobDto:JobDto) 
    { 
        return await this.jobService.updateJob(id, jobDto);
    }

    @Delete('/:id')
    deleteJob(@Param('id', ParseIntPipe) id:number): Promise<string>
    {
        return this.jobService.deleteJob(id);
    }
}
