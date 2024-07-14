import mongoose from "mongoose";

mongoose.connect("mongodb://localhost/company-db",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
  .then(db => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));