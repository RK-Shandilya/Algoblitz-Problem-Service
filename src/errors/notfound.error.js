import BaseError from "./base.error.js";
import { StatusCodes } from "http-status-codes";

export default class NotFound extends BaseError {
    constructor(resourceName, resourceValue) {
        super("NotFound", StatusCodes.NOT_FOUND, ` The requested resource: ${resourceName} with value: ${resourceValue} was not found`, {
            resourceName,
            resourceValue
        });
    }
}