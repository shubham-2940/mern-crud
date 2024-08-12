import UserModels from "../models/Users.js"

//creating user
const Createuser = async (req, res) => {
    try {
        const { name, email, phone, address } = req.body;

        const NewUser = new UserModels({
            name,
            email,
            phone,
            address
        });

        await NewUser.save();
        res.status(200).json({
            success: true,
            message: 'User created successfully',
            NewUser
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error in creating user',
            error: error.message // Include the error message for more clarity
        });
    }
}

//read api
const GetUser=async (req, res) => {
    try {
        const user  = await UserModels.find()
        if (!user){
            return res.status(404).json({success:false, message: "user not found"})
        }
        res.status(200).json({success:true, user})
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error in reading user',
            error: error.message // Include the error message for more clarity
        });
    }
}

//update api
const UpdateUser=async (req, res) => {
    try {
       const UserId=req.params.id
        const updatedUser = await UserModels.findByIdAndUpdate(UserId, req.body, {
            new:true
        })
        if (!updatedUser){
            return res.status(404).json({success:false, message: "user not found"})
        }
        res.status(200).json({success:true,message:'user updated successfully', updatedUser})
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error in update user',
            error: error.message // Include the error message for more clarity
        });
    }
}

//delete
const DeleteUser=async (req, res) => {
    try {
        const UserId = req.params.id
        const deletedUser = await UserModels.findByIdAndDelete(UserId)
        if (!deletedUser) {
            return res.status(404).json({success:false, message: "user not found"})
        }  
        res.status(200).json({success:true,message:'user deleted successfully'})
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error in delete user',
            error: error.message // Include the error message for more clarity
        });
    }
}

export { Createuser, GetUser, UpdateUser, DeleteUser };
