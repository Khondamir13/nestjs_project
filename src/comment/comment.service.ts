import { Injectable } from '@nestjs/common';

@Injectable()
export class CommentService {

    findUserComments(id:string){
        return "These are comments of user"
    }
     
}
