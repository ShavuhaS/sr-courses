import { IsNotEmpty, IsString, IsEnum, IsInt, IsNumber, Min, IsPositive } from 'class-validator'
import { Category } from '@prisma/client'

export class CreateProductDTO {
    @IsString()
    @IsNotEmpty()
    name: string

    // Замість цих тут стояв IsEnum, але я не знайшов шляху зробити так, щоб при проваленні цієї валідації
    // код відповіді був 403, тому я цю помилку ловив в пайпі (з IsEnum ця валідація все одно тригерилась раніше пайпа).
    // Я правильно розумію, що зазвичай таке ловлять тут і не створюють для цього спеціальний код?
    @IsString()
    @IsNotEmpty()
    category: Category

    @IsInt()
    @Min(0)
    amount: number

    @IsNumber({
        maxDecimalPlaces: 2,
        allowInfinity: false,
        allowNaN: false
    })
    @IsPositive()
    price: number
}