import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateExpenseDto {
    @IsNotEmpty()
    @IsString()
    category:string

    @IsNotEmpty()
    @IsNumber()
    price:number
}
