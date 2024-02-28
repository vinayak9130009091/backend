const User = require("../../models/Common/userModel");
const mongoose = require("mongoose");
const express = require("express");

const clientSignup = async (req, res) => {
  const { username, password, email, role, cpassword, token, active } = req.body;
  console.log(req.body);

  try {
    const user = await User.signup({ username, password, email, role, cpassword, token, active });
    res.status(200).json({ username, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//todo SOP api
//GET all Users

const getUsers = async (req, res) => {
  const user = await User.find({}).sort({ createdAt: -1 });
  res.status(200).json(user);
};

//GET a single User

const getUser = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "no such User " });
  }

  const user = await User.findById(id);
  if (!user) {
    return res.status(404).json({ error: "no such User " });
  }

  res.status(200).json(user);
};

//create new user

const createUser = async (req, res) => {
  const { username, password, role } = req.body;
  console.log(req.body);

  try {
    const user = await User.create({ username, password, role });
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//delete a User

const deleteUser = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "no such User " });
  }

  const user = await User.findOneAndDelete({ _id: id });

  if (!user) {
    return res.status(404).json({ error: "no such User " });
  }

  res.status(200).json(user);
};

//update a User

const updateUser = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "no such User " });
  }

  const user = await User.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!user) {
    return res.status(404).json({ error: "no such User " });
  }

  res.status(200).json(user);
};

module.exports = { createUser, getUsers, getUser, deleteUser, updateUser, clientSignup };
