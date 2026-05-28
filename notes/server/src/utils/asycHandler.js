
const asycHandler = (requestHandler) => {
    return (req, res , next) => {
        Promise.resolve(requestHandler(req, res)).catch(error => next(error))
    }
}

export default asycHandler