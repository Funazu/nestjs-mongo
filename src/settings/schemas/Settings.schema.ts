import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Settings {
    @Prop({ required: false })
    receiveNotifications?: boolean;

    @Prop({ required: false })
    receiveEmails?: boolean;

    @Prop({ required: false })
    receiveSMS?: boolean;
}

export const SettingsSchema = SchemaFactory.createForClass(Settings);