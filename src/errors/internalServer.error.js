import  BaseError  from "./base.error.js";
import { StatusCodes } from "http-status-codes";

export default class InternalServerError extends BaseError {
    constructor(details){
        super("InternalServerError", StatusCodes.INTERNAL_SERVER_ERROR, 'Something Went Wrong !!', details);
    }
}