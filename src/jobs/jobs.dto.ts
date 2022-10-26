import { IsNotEmpty } from "class-validator"

export class JobDto{
    @IsNotEmpty()
    title:string

    @IsNotEmpty()
    description:string

    @IsNotEmpty()
    nationality:string
}