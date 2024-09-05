import mongoose from 'mongoose';

// Define the inputDetails schema
const inputDetailsSchema = new mongoose.Schema({
  time_series: {
    type: Number,
    required: true,
  },
  cycle: {
    type: Number,
    required: true,
  },
  Max_TWL: {
    type: Number,
    required: true,
  },
  Min_TWL: {
    type: Number,
    required: true,
  },
  start_day: {
    type: Number,
    required: true,
  },
  end_day: {
    type: Number,
    required: true,
  },
  int_irl_te: {
    type: Number,
    required: true,
  },
  int_irl_ko: {
    type: Number,
    required: true,
  },
}, {
  timestamps: true,   // Automatically adds createdAt and updatedAt fields
});

// Create the inputDetails model
const InputDetails = mongoose.model('InputDetails', inputDetailsSchema);

export default InputDetails;
