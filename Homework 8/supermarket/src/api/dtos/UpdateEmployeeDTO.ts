import { IsOptional, IsString, NotContains } from 'class-validator'

export class UpdateEmployeeDTO {
    @IsOptional()
    @IsString()
    firstName?: string

    @IsOptional()
    @IsString()
    @NotContains('Вєчерковська', {
        message: "Шо там, в єпамі не пошло?)0)0)))"
    })
    lastName?: string

    @IsOptional()
    @IsString()
    middleName?: string

    @IsOptional()
    @IsString()
    position?: string
}