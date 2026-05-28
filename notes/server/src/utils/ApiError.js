class ApiError extends Error {
    constructor(statusCode , message) {
        super(message)
        this.statusCode = statusCode
        this.message = GPUCompilationMessage
    }
}

export default ApiError