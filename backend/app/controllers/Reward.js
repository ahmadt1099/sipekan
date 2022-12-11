const db = require("../models");
const Reward = db.reward;
const User = db.user;
const path = require('path');

exports.create = async (req, res) => {
  const { title, description, price } = req.body;
  if (req.files === null) return res.status(400).json({ status: 'Gagal', pesan: 'File Tidak Ada' });
  // const fileSize = file.data.lenght;
  const berkas = req.files.image;
  const ext = path.extname(berkas.name);
  const fileName = berkas.md5 + ext;
  const url = `${req.protocol}://${req.get('host')}/images/${fileName}`;
  berkas.mv(`./public/images/${fileName}`, async (err) => {
    if (err) return res.status(500).json({ status: 'Gagal', pesan: err.message });
    try {
      await Reward.create({
        title: title,
        description: description,
        price: price,
        image: fileName,
        url: url,
        userId: req.userId,
      });
      res.status(201).json({ status: 'Berhasil', pesan: 'Hadiah Sudah Ditambahkan' });
    } catch (error) {
      res.status(500).json({ status: 'Gagal', pesan: error.message });
    }
  });
};

exports.getAll = async (req, res) => {
  try {
    const reward = await Reward.findAll({
      attributes: ['reward_id', 'title', 'description', 'price', 'image', 'url'],
      // include: [
      //   {
      //     model: User,
      //     attributes: ['name'],
      //   },
      // ],
    });
    res.status(200).json({ status: 'Berhasil', pesan: 'Menampilkan Hadiah', reward });
  } catch (error) {
    res.status(500).json({ status: 'Gagal', pesan: error.message });
  }
};

exports.findOne = async (req, res) => {
  try {
    const checkReward = await Reward.findOne({
      where: {
        reward_id: req.params.id,
      },
    });
    if (!checkReward) return res.status(404).json({ status: 'Gagal', pesan: 'Hadiah Tidak Ditemukan' });
    const reward = await Reward.findOne({
      attributes: ['reward_id', 'title', 'description', 'price', 'image', 'url'],
      where: {
        reward_id: req.params.id,
      },
      // include: [
      //   {
      //     model: User,
      //     attributes: ['name'],
      //   },
      // ],
    });
    res.status(200).json({ status: 'Berhasil', pesan: 'Menampilkan Hadiah', reward });
  } catch (error) {
    res.status(500).json({ status: 'Gagal', pesan: error.message });
  }
};

exports.update = async (req, res) => {
  const checkReward = await Reward.findOne({
    where: {
      reward_id: req.params.id,
    },
  });
  if (!checkReward) return res.status(404).json({ status: 'Gagal', pesan: 'Hadiah Tidak Ditemukan' });
  if (req.files === null) return res.status(400).json({ status: 'Gagal', pesan: 'File Tidak Ada' });
  // const fileSize = file.data.lenght;
  const berkas = req.files.image;
  const ext = path.extname(berkas.name);
  const fileName = berkas.md5 + ext;
  const url = `${req.protocol}://${req.get('host')}/images/${fileName}`;
  const { title, description, price } = req.body;
  berkas.mv(`./public/images/${fileName}`, async (err) => {
    if (err) return res.status(500).json({ status: 'Gagal', pesan: err.message });
    try {
      await Reward.update(
        {
          title: title,
          description: description,
          price: price,
          image: fileName,
          url: url,
        },
        {
          where: {
            reward_id: req.params.id,
          },
        }
      );
      res.status(201).json({ status: 'Berhasil', pesan: 'Hadiah Sudah Ditambahkan' });
    } catch (error) {
      res.status(500).json({ status: 'Gagal', pesan: error.message });
    }
  });
};

exports.delete = async (req, res) => {
  const checkReward = await Reward.findOne({
    where: {
      reward_id: req.params.id,
    },
  });
  if (!checkReward) return res.status(404).json({ status: 'Gagal', pesan: 'Hadiah Tidak Ditemukan' });
  try {
    await Reward.destroy({
      where: {
        reward_id: req.params.id,
      },
    });
    res.status(200).json({ status: 'Berhasil', pesan: 'Hadiah Telah Dihapus' });
  } catch (error) {
    res.status(400).json({ status: 'Gagal', pesan: error.message });
  }
};