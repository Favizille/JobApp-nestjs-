import { Injectable, NotFoundException, Param} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Job } from 'src/model/model';
import { arrayBuffer } from 'stream/consumers';
import { Repository } from 'typeorm';
import { JobDto } from './jobs.dto';

@Injectable()
export class JobsService {
    constructor(@InjectRepository(Job) private jobRepository: Repository<Job>){}

    getAll(){
        const getAllValues = this.jobRepository.find()

        if(typeof Array !== 'undefined' && Array.length === 0){
            throw new NotFoundException("No jobs yet")
        }

        return getAllValues;
    }

    async createJob(jobDto:JobDto):Promise<Job>{
        const createSpecJob = await this.jobRepository.save(jobDto)

        if(!createSpecJob){
            throw new NotFoundException("Job creation Failed")
        }

        return createSpecJob;
    }

    async getJobById(id: number):Promise<Job>{
        const found= await this.jobRepository.findOne({
            where: {id}
        });
        if(!found){
            throw new NotFoundException("Job with id not found");
        }

        return found;
    }

    updateJob(id:number, jobDto:JobDto) {
    //    const jobDtoId = this.getJobById(id);

    //    jobDtoId = jobDt;

        const updatedJobDto = this.jobRepository.update({id},jobDto);

        if(!updatedJobDto){
            throw new NotFoundException("Update failed");
        }

        return updatedJobDto;

    }

    async deleteJob(id: number){
        const result = await this.jobRepository.delete({id});

        if(!result){
            throw new NotFoundException("Deletion failed");
        }

    }

}
