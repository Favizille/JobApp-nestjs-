import{Column,Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Job{
    @PrimaryGeneratedColumn()
        id:number
    @Column()
        title: string
    @Column()
        descrption:string
    @Column()
        nationality: string
}