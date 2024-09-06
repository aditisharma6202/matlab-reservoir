import mongoose from 'mongoose';

// Define the outputDetails schema
const outputDetailsSchema = new mongoose.Schema({
  inputDetailsId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'InputDetails', // Reference to the InputDetails model
    required: true
  },
  resultValue: {
    type: Number,
    required: true,
  },
  // Add other fields as necessary
  additionalField: {
    type: String,
    // Define any additional fields here
  }
}, {
  timestamps: true,   // Automatically adds createdAt and updatedAt fields
});

// Create the outputDetails model
const OutputDetails = mongoose.model('OutputDetails', outputDetailsSchema);

export default OutputDetails;
