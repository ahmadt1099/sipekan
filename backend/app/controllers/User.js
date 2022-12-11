const db = require("../models");
const User = db.user;
const hash = require('password-hash');

// Create and Save a new User
exports.create = async (req, res) => {
  const { name, email, password, confirmPassword, role, point } = req.body;
  if (password !== confirmPassword) return res.status(400).json({ status: 'Gagal', pesan: 'Password Tidak Cocok' });
  const hashPassword = await hash.generate(password);
  const checkEmail = await User.findOne({
    where: {
      email: email,
    },
  });
  if (checkEmail) return res.status(400).json({ status: 'Gagal', pesan: 'User dengan email ini sudah terdaftar' });
  try {
    await User.create({
      name: name,
      email: email,
      password: hashPassword,
      role: role,
      point: point,
    });
    res.status(201).json({ status: 'Berhasil', pesan: 'User Berhasil Ditambahkan' });
  } catch (error) {
    res.status(400).json({ status: 'Gagal', pesan: error.message });
  }
};

// Retrieve all Users from the database.
exports.getAll = async (req, res) => {

  try {
    const user = await User.findAll({
      attributes: ['user_id', 'name', 'email', 'role', 'point'],
    });
    res.status(200).json({ status: 'Berhasil', pesan: 'Menampilkan User', user });
  } catch (error) {
    res.status(500).json({ status: 'Gagal', pesan: error.message });
  }
};

// Find a single User with an id
exports.findOne = async (req, res) => {
  const getUser = await User.findOne({
    where: {
      user_id: req.params.id,
    },
  });
  if (!getUser) return res.status(404).json({ status: 'Gagal', pesan: 'User Tidak Ditemukan' });
  try {
    const user = await User.findOne({
      where: {
        user_id: req.params.id,
      },
      attributes: ['user_id', 'name', 'email', 'role', 'point'],
    });
    res.status(200).json({ status: 'Berhasil', pesan: 'Menampilkan User', user });
  } catch (error) {
    res.status(500).json({ status: 'Gagal', pesan: error.message });
  }
};

// Update a User by the id in the request
exports.update = async (req, res) => {
  const user = await User.findOne({
    where: {
      user_id: req.params.id,
    },
  });
  if (!user) return res.status(404).json({ status: 'Gagal', pesan: 'User Tidak Ditemukan' });
  const { name, email, password, confirmPassword, role, point } = req.body;
  let hashPassword;
  if (password === '' || password === null) {
    hashPassword = user.password;
  } else {
    hashPassword = await hash.generate(password);
  }
  if (password !== confirmPassword) return res.status(400).json({ status: 'Gagal', pesan: 'Password Tidak Sama' });
  try {
    await User.update(
      {
        name: name,
        email: email,
        password: hashPassword,
        role: role,
        point: point
      },
      {
        where: {
          id: user.id,
        },
      }
    );
    res.status(200).json({ status: 'Berhasil', pesan: 'Data User Telah Diubah' });
  } catch (error) {
    res.status(400).json({ status: 'Gagal', pesan: error.message });
  }
};

// Delete a User with the specified id in the request
exports.delete = async (req, res) => {
  const user = await User.findOne({
    where: {
      user_id: req.params.id,
    },
  });
  if (!user) return res.status(404).json({ status: 'Gagal', pesan: 'User Tidak Ditemukan' });
  try {
    await User.destroy({
      where: {
        id: user.id,
      },
    });
    res.status(200).json({ status: 'Berhasil', pesan: 'User Telah Dihapus' });
  } catch (error) {
    res.status(400).json({ status: 'Gagal', pesan: error.message });
  }
};