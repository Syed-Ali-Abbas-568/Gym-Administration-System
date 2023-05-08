import mongoose from "mongoose";

const trainerSchema = mongoose.Schema({

  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  cnic: {
    type: String,
    required: true
  },
  joinDate: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  clients: [{
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    phone: {
      type: String,
      required: true
    }
  }],
  feeStatus: {
    type: String,
    required: true
  },

});


const trainer = mongoose.model("Trainer", trainerSchema);

export default trainer;