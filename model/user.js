const mongoose = require("mongoose");
const mongooseDelete = require("mongoose-delete");
const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
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
    verificationCode:{
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


