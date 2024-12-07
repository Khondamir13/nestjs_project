import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from './dto/createUserDto';
import { UserService } from './user.service';
import { CommentService } from 'src/comment/comment.service';

@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService, private readonly commentService : CommentService){}

    @Get("all")

    findAll(){
        return "All users"
    }

    @Get(':id')
    findOneUser(@Param("id") id:number){
        return  this.userService.findOne(id)
    }

    @Post()
    createUser(@Body() user:CreateUserDto) {
        return this.userService.createUser(user)
    }

    @Get(":id/comments")
    findUserComments(@Param("id") id:string){
        return this.commentService.findUserComments(id)
    }

    @Put(':id')
    updateUser(@Param("id") id:number, @Body() updateUserDto: UpdateUserDto){
        return this.userService.updateUser(id,updateUserDto)
    }
}
