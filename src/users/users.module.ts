import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { User, UserSchema } from "src/users/schemas/User.schema";
import { UserServices } from "./users.service";
import { UsersController } from "./users.controller";
import { Settings, SettingsSchema } from "src/settings/schemas/Settings.schema";

@Module({
    imports: [
        MongooseModule.forFeature([{
            name: User.name,
            schema: UserSchema
        },
        {
            name: Settings.name,
            schema: SettingsSchema
        },
        ])
    ],
    providers: [UserServices],
    controllers: [UsersController]
})

export class UsersModule { }