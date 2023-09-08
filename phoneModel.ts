import { Schema, model } from "mongoose";

const phoneSchema = new Schema(
  {
    brand: { type: String, required: true },
    ram: { type: Number, required: true },
    release: { type: Date, default: Date.now },
  },
  {
    versionKey: false,
  }
);

const Phone = model("Phone", phoneSchema);

export { Phone };
