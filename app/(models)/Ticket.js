import mongoose, { Schema } from "mongoose";

mongoose.connect("mongodb+srv://ticketing_app:prathmesh140503@cluster0.7b9gif6.mongodb.net/TicketDB");

const ticketSchema = new Schema(
  {
    title: String,
    description: String,
    category: String,
    priority: Number,
    progress: Number,
    status: String,
    active: Boolean,
  },
  {
    timestamps: true,
  }
);

const Ticket = mongoose.models.Ticket || mongoose.model("Ticket", ticketSchema);
export default Ticket;
