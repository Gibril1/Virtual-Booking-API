import mongoose, { Schema, Types } from  "mongoose"


export interface IUser {
    _id?: Types.ObjectId,
    email: string,
    password: string,
    role: string
}

const UserSchema = new Schema<IUser>({
    email:{
        type: String,
        unique: true,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    role:{
        type: String,
        required: true
    },
})

module.exports = mongoose.model<IUser>('User', UserSchema)
