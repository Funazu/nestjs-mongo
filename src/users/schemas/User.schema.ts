import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { Post } from "src/post/schemas/Post.schemas";
import { Settings } from "src/settings/schemas/Settings.schema";

@Schema()
export class User {
    @Prop({ unique: true, required: true })
    username: string;

    @Prop({ required: false })
    displayName?: string;

    @Prop({ required: false })
    avatarUrl?: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Settings' })
    settings?: Settings;

    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }] })
    posts: Post[];
}

export const UserSchema = SchemaFactory.createForClass(User);