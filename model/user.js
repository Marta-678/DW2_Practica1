const mongoose = require("mongoose");
const mongooseDelete = require("mongoose-delete");
const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      // required: true
    },
    email: {
      type: String,
      unique: true,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user"
    },
    status:{
      type: Boolean,
      default: false
    },
    verificationCode:{
      type: String
    },
    verificationAttempts:{
        type:Number,
        default:3
    }
  },
  {
    timestamps: true, 
    versionKey: false
  }
);

UserSchema.plugin(mongooseDelete, { overrideMethods: "all" });
module.exports = mongoose.model("users", UserSchema);


