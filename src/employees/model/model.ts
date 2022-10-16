import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Employee{
    @PrimaryGeneratedColumn()
        id:number
    @Column()
        first_name:string
    @Column()
        last_name:string
    @Column()
        email:string
    @Column()
        gender:string
    @Column()
        password:string
}