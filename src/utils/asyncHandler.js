const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        // Wrap the requestHandler in a Promise.resolve to ensure it's a promise
        Promise.resolve(requestHandler(req, res, next))
            // If the promise is rejected (an error occurs), catch it
            .catch((error) => next(error)); // Pass the error to Express's error handler
    };
};


// cleaner way of writing the above function:
// const asyncHandler = (requestHandler) => (req, res, next) => 
//     Promise.resolve(requestHandler(req,res,next)).catch(next);


export { asyncHandler }





// another way:
// const asyncHandler = (fn) => async (req, res, next) => {
//     try {
//         await fn(req, res, next)
//     } catch (error) {
//         res.status(error.code || 500).json({
//             success: false,
//             message: error.message
//         })
//     }
// }