import { Body, Controller, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { CreatePostDto } from "./dto/CreatePost.dto";
import { PostsService } from "./post.service";

@Controller('posts')
export class PostsController {
    constructor(private postsService: PostsService) {}

    @Post()
    @UsePipes(new ValidationPipe())
    createPost(@Body() createPostDto: CreatePostDto) {
        return this.postsService.createPost(createPostDto);
    }
}