import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { User } from "./schemas/User.schema";
import { Model } from "mongoose";
import { CreateUserDto } from "./dto/CreateUser.dto";
import { UpdateUserDto } from "./dto/UpdateUser.dto";
import { Settings } from "src/settings/schemas/Settings.schema";

@Injectable()
export class UserServices {
    constructor(@InjectModel(User.name) private userModel: Model<User>,
        @InjectModel(Settings.name) private settingsModel: Model<Settings>) { }

    async createUser({ settings, ...createUserDto }: CreateUserDto) {
        if (settings) {
            const newSettings = new this.settingsModel(settings);
            const savedNewSettings = await newSettings.save();
            const newUser = new this.userModel({
                ...createUserDto,
                settings: savedNewSettings._id
            });
            return newUser.save();
        }
        const newUser = new this.userModel(createUserDto);
        return newUser.save();
    }

    getUsers() {
        return this.userModel.find().populate(['settings', 'posts']);
    }

    getUserById(id: string) {
        return this.userModel.findById(id).populate(['settings', 'posts']);
    }

    updateUser(id: string, updateUserDto: UpdateUserDto) {
        return this.userModel.findByIdAndUpdate(id, updateUserDto, { new: true });
    }

    deleteUser(id: string) {
        return this.userModel.findByIdAndDelete(id);
    }
}