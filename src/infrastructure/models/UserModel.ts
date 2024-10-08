import mongoose, {
  Schema,
  Document,
  HydratedDocument,
  Model,
  model,
} from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

/**
 * interface defines the structure of a user document in the database. It includes properties like name, email, password, and tokens.
 */
interface IUser extends Document {
  id: string;
  _id: string;
  name: string;
  email: string;
  password: string;
  tokens: { token: string }[];
}

/**
 * Interface defines methods can be applied to user documents, such as generating authentication tokens and converting user object to JSON format
 */
export interface IUserMethods {
  generateAuthToken(): Promise<string>;
  toJSON(): IUser;
}

/**
 * Interface extends Mongoose Model interface and specifies additional methods available on the User model like finding user by their credentials
 */
interface UserModel extends Model<IUser, UserModel, IUserMethods> {
  findByCredentials(
    email: string,
    password: string,
  ): Promise<HydratedDocument<IUser, IUserMethods>>;
}

/**
 * UserSchema defines the schema for user modal. It spectifies structure of user documents, including required fields lijke name, email, password, tokens
 */
const UserSchema: Schema<IUser, {}, IUserMethods> = new Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  tokens: [{ token: { type: String, required: true } }],
});

/**
 * Pre middleware function is used yo hash the user's password before saving to the database.
 * This ensures that passwords are securely stored
 */
UserSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 8);
  }
  next();
});

UserSchema.methods.generateAuthToken = async function () {
  const user = this;
  const token = jwt.sign(
    { _id: user._id.toString() },
    process.env.JWT_KEY as string,
  );
  user.tokens = user.tokens.concat({ token });
  await user.save();
  return token;
};

UserSchema.methods.toJSON = function () {
  const user = this as IUser;
  const userObject = user.toObject();
  delete userObject.password;
  delete userObject.tokens;
  return userObject;
};

UserSchema.statics.findByCredentials = async (email, password) => {
  const user = await UserModel.findOne({ email });
  if (!user) {
    return null;
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return null;
  }
  return user;
};

const UserModel = model<IUser, UserModel>('User', UserSchema);
export default UserModel;
