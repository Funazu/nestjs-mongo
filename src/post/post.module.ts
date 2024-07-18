import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Post, PostSchema } from "./schemas/Post.schemas";
import { PostsController } from "./post.controller";
import { PostsService } from "./post.service";
import { User, UserSchema } from "src/users/schemas/User.schema";

@Module({
    imports: [
        MongooseModule.forFeature([{
            name: Post.name,
            schema: PostSchema
        },
        {
            name: User.name,
            schema: UserSchema
        }
    ])
    ],
    controllers: [PostsController],
    providers: [PostsService]
})

export class PostsModule {}