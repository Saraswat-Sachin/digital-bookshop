import asyncHandler from '../middlewares/asyncHandler.js'
import User from '../models/userModel.js'
import generateToken from '../utils/generateToken.js'

// @desc auth user & get token
// @route POST /api/users/login
// @access public
const authUser = asyncHandler(async(req, res)=>{
    const {email, password} = req.body
    const user = await User.findOne({email})
    if (user && await user.matchPassword(password)) {
        
        generateToken(res, user._id)

        res.status(200).json({
            name: user.name,
            email: user.email,
        })
    } else {
        res.status(401)
        throw Error('Invalid email or password.')
    }
    res.send('got user profile')
})

// @desc register user & get token
// @route POST /api/users
// @access public
const registerUser = asyncHandler(async(req, res)=>{
    const { name, email, password } = req.body
    const exists = await User.findOne({email})
    if (exists) {
        res.status(400)
        throw Error('User already exists.')
    }

    const user = await User.create({
        name,
        email,
        password
    })

    if (user) {
        generateToken(res, user._id)
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
        })
    }
    else{
        res.status(400)
        throw Error('Invalid data.')
    }
})

// @desc logout user & clear cookies
// @route POST /api/users/logout
// @access private
const logoutUser = asyncHandler(async(req, res)=>{
    //clearing cookie
    res.cookie('jwt', '', {
        httpOnly: true,
        expires: new Date(0)
    })
    res.status(200).json({message: "Logged out succesfully."})
})


export {
    authUser, registerUser, logoutUser
}