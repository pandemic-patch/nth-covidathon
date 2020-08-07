import mongoose, { Document, Schema } from 'mongoose'

export interface IUser extends Document{
    userID: string
    email: string
    firstName: string
    lastName: string
    password: string
    interests: string[]
}

const UserSchema: Schema = new Schema({
    userID: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    password: {type: String, required: true},
    interests: {type: [String], requiredPaths: true}
})


// Export the model and return your IUser interface
export default mongoose.model<IUser>('User', UserSchema);