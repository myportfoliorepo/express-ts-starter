import { RequestHandler } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";

export interface BaseInterface<T> {
    getAll(): Promise<T[]>;
    getById(req:RequestHandler,res:RequestHandler,next:RequestHandler): Promise<T | null>;
    store(req:RequestHandler,res:RequestHandler,next:RequestHandler): Promise<T | []>;
    update(req:RequestHandler,res:RequestHandler,next:RequestHandler) : Promise<T | null>;
    delete(req:RequestHandler): Promise<T | null>;
}


export abstract class BaseRepository<T> implements BaseInterface<T>{

    async getAll(): Promise<T[]> {
        return [];
    }

    async getById(req: RequestHandler, res: RequestHandler, next: RequestHandler): Promise<T | null> {
        return null;
    }

    async store(req: RequestHandler, res: RequestHandler, next: RequestHandler): Promise<T | []> {
        return [];
    }

    async update(req: RequestHandler, res: RequestHandler, next: RequestHandler): Promise<T | null> {
        return null;
    }

    async delete(req: RequestHandler): Promise<T | null> {
        return null;
    }
}