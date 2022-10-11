import { Injectable, NotFoundException} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Job } from 'src/model/model';
import { Repository } from 'typeorm';
import { JobDto } from './jobs.dto';

@Injectable()
export class JobsService {
    constructor(@InjectRepository(Job) private jobRepository: Repository<Job>){}

    getAll(){
        const getAllValues = this.jobRepository.find()
        return getAllValues;
    }

    async createJob(jobDto:JobDto):Promise<Job>{
        const createSpecJob = await this.jobRepository.save(jobDto)
        return createSpecJob;
    }

    async getJobById(id: number):Promise<Job>{
        const found= await this.jobRepository.findOne({
            where: {id}
        });
        if(!found){
            throw new NotFoundException("Task with id not found");
        }

        return found;
    }

    async updateJob(id:number, jobDto:JobDto) :Promise<Job> {
       const jobDtoId = this.getJobById(id);

    //    jobDtoId = jobDt;

        const updatedJobDto = await this.jobRepository.save(jobDto)

        return updatedJobDto;

    }

    async deleteJob(id: number):Promise<string>{
        const result = await this.jobRepository.delete(id);

        return "Deleted successfully";

    }

}
