const Users = require('../models/users.model')


const AddUser = async (req, res) => {
  try {
    await Users.create(req.body);
    res.status(201).json({ message: "User added with success" });
  } catch (error) {
    console.log(error.message);
  }
}

const FindAllUsers = async (req, res) => {
  console.log('FindAllUsers')
};

const FindSinglUser = async (req, res) => {
  console.log('FindSinglUser')
};

const UpdateUser = async (req, res) => {
  console.log('UpdateUser')
};

const DeleteUser = async (req, res) => {
  console.log('DeleteUser')
};

module.exports = {
  AddUser,
  FindAllUsers,
  FindSinglUser,
  UpdateUser,
  DeleteUser,
};