import mongoose from "mongoose";

const analizaTrgaSchema = new mongoose.Schema({
    id: {type: String},
    naslov: { type: String, required: true },
    datum: { type: Date, default: Date.now },
    vsebina: { type: String, required: true },
    analitik: { type: mongoose.Schema.Types.ObjectId, ref: 'Zaposleni' }
  });
  
  const AnalizaTrga = mongoose.model('AnalizaTrga', analizaTrgaSchema);
  