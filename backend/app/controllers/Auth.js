const db = require("../models");
const User = db.user;
const hash = require('password-hash');

exports.Register = async (req, res) => {
  const { name, email, password, confirmPassword } = req.body;
  if (password !== confirmPassword) return res.status(400).json({ status: 'Gagal', pesan: 'Password Tidak Cocok' });
  const hashPassword = await hash.generate(password);
  const checkEmail = await User.findOne({
    where: {
      email: email,
    },
  });
  const role = "admin";
  if (checkEmail) return res.status(400).json({ status: 'Gagal', pesan: 'User dengan email ini sudah terdaftar' });
  try {
    await User.create({
      name: name,
      email: email,
      password: hashPassword,
      role: role,
    });
    res.status(201).json({ status: 'Berhasil', pesan: 'User Berhasil Didaftarkan' });
  } catch (error) {
    res.status(400).json({ status: 'Gagal', pesan: error.message });
  }
};

exports.Login = async (req, res) => {
  const user = await User.findOne({
    where: {
      email: req.body.email,
    },
  });
  if (!user) return res.status(404).json({ status: 'Gagal', pesan: 'User Tidak Ditemukan' });
  const match = await hash.verify(req.body.password, user.password);
  console.log(hash.verify(user.password, req.body.password))
  if (!match) return res.status(400).json({ status: 'Gagal', pesan: 'Password Salah' });
  req.session.userId = user.user_id;
  const user_id = user.user_id;
  const name = user.name;
  const email = user.email;
  const role = user.role;
  res.status(200).json({ status: 'Berhasil', pesan: 'Anda Berhasil Login', data: { user_id, name, email, role } });
};


exports.Me = async (req, res) => {
  if (!req.session.userId) {
    return res.status(401).json({ status: 'Gagal', pesan: 'Anda Belum Login' });
  }
  const user = await User.findOne({
    attributes: ['user_id', 'name', 'email', 'role', 'point'],
    where: {
      user_id: req.session.userId,
    },
  });
  if (!user) return res.status(404).json({ status: 'Gagal', pesan: 'User Tidak Ditemukan' });
  res.status(200).json({ status: 'Berhasil', pesan: 'Anda Telah Login', user });
};

exports.Logout = async (req, res) => {
  req.session.destroy((err) => {
    if (err) return res.status(400).json({ status: 'Gagal', pesan: 'Tidak Dapat Logout' });
    res.status(200).json({ status: 'Berhasil', pesan: 'Anda Telah Logout' });
  });
};


