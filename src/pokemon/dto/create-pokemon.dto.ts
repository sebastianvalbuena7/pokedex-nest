import { IsInt, IsPositive, IsString, Min, MinLength } from "class-validator";

export class CreatePokemonDto {
    @IsInt({ message: 'Debe ser un numero entero' })
    @IsPositive({ message: 'Debe ser un numero positivo' })
    @Min(1, { message: 'El no debe ser de minimo 1' })
    no: number;

    @IsString({ message: 'Debe ser un string' })
    @MinLength(1, {
        message: 'Debe tener una longitud de minimo 1'
    })
    name: string;
}