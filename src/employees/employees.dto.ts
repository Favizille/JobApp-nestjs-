import { IsNotEmpty } from "class-validator"

export class JobDto {
    @IsNotEmpty()
    id:number

    @IsNotEmpty()
    first_name:string

    @IsNotEmpty()
    last_name:string

    @IsNotEmpty()
    email:string

    @IsNotEmpty()
    gender:string

    @IsNotEmpty()
    password:string
}