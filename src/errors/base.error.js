export default class BaseError extends Error {
    constructor(name, statusCode, description, details) {
        super(description);
        this.name = name;
        this.statusCode = statusCode;
        this.details = details;
    }
}
