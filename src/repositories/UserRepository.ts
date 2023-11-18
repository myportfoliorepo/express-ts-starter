import { BaseRepository } from "./BaseRepository";
import User, { IUser } from "../model/User";
import { RequestHandler } from "express";


export interface UserInterface{
    Login(req:RequestHandler,res:RequestHandler):any;
    Signup(req:RequestHandler,res:RequestHandler) : any;
}

export class UserRepository extends BaseRepository<typeof User> implements UserInterface{
    async Login(req: RequestHandler, res: RequestHandler) {
        
    }

    async Signup(req: RequestHandler, res: RequestHandler){
        
    }
}