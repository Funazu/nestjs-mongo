import { Type } from "class-transformer";
import { IsNotEmpty, IsOptional, IsString, ValidateNested } from "class-validator";
import { CreateSettingsDto } from "src/settings/dto/CreateSettings.dto";

export class CreateUserDto {
    @IsNotEmpty()
    @IsString()
    username: string;

    @IsString()
    @IsOptional()
    displayName?: string;

    @IsOptional()
    @ValidateNested()
    @Type(() => CreateSettingsDto)
    settings?: CreateSettingsDto;
}