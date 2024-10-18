// // will create a wrapper function
// // using try catch

// const asyncHandler=(fn)= async(req,res,next)=>{
//     try {
//         await fn(req,res,next)
//     } catch (error) {
//         res.status(err.code|| 500).json({
//             success:false,
//             mesaage:err.mesaage
//         })
        
//     }
// }

const asynHandler=(requestHandler)=>{
    (req,res,next)=>{
        Promise.resolve(requestHandler(req,res,next)).catch((err)=>{next(err)})
    }
}

export {asyncHandler}

