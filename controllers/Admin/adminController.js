const Admin = require("../../models/AdminDetails/adminModel");
const mongoose = require("mongoose");

// GET all Admins
const getAdmins = async (req, res) => {
  try {
    const Admins = await Admin.find({}).sort({ createdAt: -1 });
    res.status(200).json({ message: "Admins retrieved successfully", Admins });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET a single Admin
const getAdmin = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Invalid Admin ID" });
  }
  try {
    const admin = await Admin.findById(id);
    if (!admin) {
      return res.status(404).json({ error: "No such Admin" });
    }
    res.status(200).json({ message: "Admin retrieved successfully", admin });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// POST create a new Admin
const createAdmin = async (req, res) => {
  const { firstName, middleName, lastName, phoneNumber, email, password, cpassword, firmName, firmEmail, streetAddress, city, state, postalCode, country, firmPhoneNumber, website, firmSize, referenceFrom, services, role, firmURL, currency, language } = req.body;

  try {
    //check the email already exists
    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin) {
      return res.status(400).json({ message: "Admin with this Email already exists" });
    }

    const admin = await Admin.create({
      firstName,
      middleName,
      lastName,
      phoneNumber,
      email,
      password,
      cpassword,
      firmName,
      firmEmail,
      streetAddress,
      city,
      state,
      postalCode,
      country,
      firmPhoneNumber,
      website,
      firmSize,
      referenceFrom,
      services,
      role,
      firmURL,
      currency,
      language,
    });
    res.status(200).json({ message: "Admin created successfully", admin });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// DELETE a Admin
const deleteAdmin = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Invalid Admin ID" });
  }

  try {
    const Admin = await Admin.findOneAndDelete({ _id: id });

    if (!Admin) {
      return res.status(404).json({ error: "No such Admin" });
    }

    res.status(200).json({ message: "Admin deleted successfully", Admin });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// UPDATE a Admin
const updateAdmin = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Invalid Admin ID" });
  }

  try {
    const updatedAdmin = await Admin.findOneAndUpdate(
      { _id: id },
      { ...req.body },
      { new: true } // This option ensures that the updated document is returned
    );

    if (!updatedAdmin) {
      return res.status(404).json({ error: "No such Admin" });
    }

    res.status(200).json({ message: "Admin updated successfully", admin: updatedAdmin });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createAdmin,
  getAdmins,
  getAdmin,
  deleteAdmin,
  updateAdmin,
};
