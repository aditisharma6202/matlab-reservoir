import mongoose from 'mongoose';

// Define the user schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,   // Name is required
    trim: true,       // Removes any extra spaces from the name
  },
  email: {
    type: String,
    required: true,
    unique: true,     // Ensures email is unique
    match: [/.+\@.+\..+/, 'Please enter a valid email address'],
  },
  password: {
    type: String,
    required: true,
    minlength: 6,     // Set a minimum length for the password
  },
  inputDetails: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'InputDetails',  // Refers to the InputDetails model
    },
  ],
});

// Create the user model
const User = mongoose.model('User', userSchema);

export default User;
