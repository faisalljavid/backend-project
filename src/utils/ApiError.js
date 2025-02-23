class ApiError extends Error {
    constructor(
        statusCode, // HTTP status code (e.g., 400, 404, 500)
        message = "Something went wrong", // Default error message
        errors = [], // Array of detailed error messages (optional)
        stack = "" // Stack trace (optional)
    ) {
        super(message);
        this.statusCode = statusCode;
        this.data = null; // Reserved for future use (can hold response data if needed).
        this.message = message;
        this.success = false;
        this.errors = errors;

        if (stack) {
            this.stack = stack;
        } else {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}


export { ApiError }