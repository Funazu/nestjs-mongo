import { IsBoolean, IsOptional } from "class-validator";

export class CreateSettingsDto {
    @IsOptional()
    @IsBoolean()
    receiveNotifications?: boolean;

    @IsOptional()
    @IsBoolean()
    reveiveEmails?: boolean;
    
    @IsOptional()
    @IsBoolean()
    reveiveSMS?: boolean;
}