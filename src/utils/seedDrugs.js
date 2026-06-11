import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Drug from '../models/Drug.js';

dotenv.config();

const drugs = [
  { name: 'Paracetamol', genericName: 'Acetaminophen', category: 'Analgesic/Antipyretic', dosages: ['500mg', '650mg', '1g'], routes: ['Oral', 'IV'], sideEffects: ['Nausea', 'Rash', 'Liver toxicity (overdose)'], indications: ['Fever', 'Mild to moderate pain'], contraindications: ['Severe liver disease'], nursingConsiderations: ['Monitor liver function', 'Do not exceed 4g daily'] },
  { name: 'Amoxicillin', genericName: 'Amoxicillin', category: 'Antibiotic (Penicillin)', dosages: ['250mg', '500mg', '875mg'], routes: ['Oral', 'IV'], sideEffects: ['Diarrhea', 'Rash', 'Nausea'], indications: ['Bacterial infections', 'UTI', 'Respiratory infections'], contraindications: ['Penicillin allergy'], nursingConsiderations: ['Take with food', 'Complete full course'] },
  { name: 'Artemether-Lumefantrine', genericName: 'Artemether/Lumefantrine', category: 'Antimalarial', dosages: ['20/120mg', '40/240mg', '80/480mg'], routes: ['Oral'], sideEffects: ['Headache', 'Dizziness', 'Nausea'], indications: ['Uncomplicated malaria'], contraindications: ['Severe malaria'], nursingConsiderations: ['Take with fatty food', 'Complete 3-day course'] },
  { name: 'Magnesium Sulfate', genericName: 'Magnesium Sulfate', category: 'Anticonvulsant', dosages: ['1g', '2g', '4g', '10g'], routes: ['IV', 'IM'], sideEffects: ['Flushing', 'Drowsiness', 'Respiratory depression'], indications: ['Preeclampsia/eclampsia', 'Hypomagnesemia'], contraindications: ['Myasthenia gravis'], nursingConsiderations: ['Monitor respiratory rate', 'Keep calcium gluconate ready'] },
];

async function seed() {
  await mongoose.connect(process.env.MONGODB_URI);
  await Drug.deleteMany({});
  await Drug.insertMany(drugs);
  console.log('Drugs seeded');
  process.exit();
}

seed().catch(console.error);
