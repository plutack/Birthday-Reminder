import mongoose from "mongoose";
import moment from "moment";

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    birthday: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", function (next) {
  // Convert birthday string to Date object
  if (this.birthday) {
    this.birthday = moment(this.birthday, "YYYY-MM-DD").toISOString();
  }
  next();
});

const User = mongoose.model("User", userSchema);

export default User;
