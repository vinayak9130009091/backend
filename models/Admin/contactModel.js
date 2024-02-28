const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "First name is required"],
    },
    middleName: {
      type: String,
      required: [true, "Middle name is required"],
    },
    lastName: {
      type: String,
      required: [true, "Last name is required"],
    },
    contactName: {
      type: String,
      required: [true, "Contact name is required"],
    },
    companyName: {
      type: String,
      required: [true, "Company name is required"],
    },
    note: {
      type: String,
      required: [true, "Note is required"],
    },
    ssn: {
      type: String,
      required: [true, "SSN is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      validate: {
        validator: (value) => /\S+@\S+\.\S+/.test(value),
        message: "Invalid email format",
      },
    },
    login: {
      type: Boolean,
      required: [true, "Login is required"],
    },
    notify: {
      type: Boolean,
      required: [true, "Notify is required"],
    },
    emailSync: {
      type: Boolean,
      required: [true, "Email sync is required"],
    },
    tags: [
      {tag:
                {
          type: Array
          type: mongoose.Types.ObjectId, // Update to an array of strings
          required: [true, "Tags are required"],
          ref: "tag",
        }
             },
    ],

    country: {
      type: String,
      required: [true, "Country is required"],
    },
    streetAddress: {
      type: String,
      required: [true, "Street address is required"],
    },
    city: {
      type: String,
      required: [true, "City is required"],
    },
    state: {
      type: String,
      required: [true, "State is required"],
    },
    postalCode: {
      type: Number,
      required: [true, "Postal code is required"],
    },
    active: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

const contactModel = mongoose.model("contact", contactSchema);
module.exports = contactModel;
