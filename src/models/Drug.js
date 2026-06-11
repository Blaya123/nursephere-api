import mongoose from 'mongoose';

const drugSchema = new mongoose.Schema({
  name: { type: String, required: true },
  genericName: String,
  category: String,
  dosages: [String],
  routes: [String],
  sideEffects: [String],
  indications: [String],
  contraindications: [String],
  nursingConsiderations: [String],
});

export default mongoose.model('Drug', drugSchema);
