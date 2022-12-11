const db = require("../models");
const Task = db.task;
const User = db.user;
const hash = require('password-hash');

exports.create = async (req, res) => {
  const { title, description, point } = req.body;
  try {
    await Task.create({
      title: title,
      description: description,
      point: point,
      userId: req.userId,
      submited: false,
    });
    res.status(201).json({ status: 'Berhasil', pesan: 'Tugas Berhasil Ditambahkan' });
  } catch (error) {
    res.status(500).json({ status: 'Gagal', pesan: error.message });
  }
};

exports.getAll = async (req, res) => {
  try {
    const task = await Task.findAll({
      attributes: ['task_id', 'title', 'description', 'submited', 'point'],
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });
    res.status(200).json({ status: 'Berhasil', pesan: 'Menampilkan Tugas', task });
  } catch (error) {
    res.status(500).json({ status: 'Gagal', pesan: error.message });
  }
};

exports.findOne = async (req, res) => {
  try {
    const checkTask = await Task.findOne({
      where: {
        task_id: req.params.id,
      },
    });
    if (!checkTask) return res.status(404).json({ status: 'Gagal', pesan: 'Tugas Tidak Ditemukan' });
    const tugas = await Task.findOne({
      attributes: ['task_id', 'title', 'description', 'submited', 'point'],
      where: {
        task_id: req.params.id,
      },
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });
    res.status(200).json({ status: 'Berhasil', pesan: 'Menampilkan Tugas', tugas });
  } catch (error) {
    res.status(500).json({ status: 'Gagal', pesan: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    const task = await Task.findOne({
      where: {
        task_id: req.params.id,
      },
    });
    if (!task) return res.status(404).json({ status: 'Gagal', pesan: 'Tugas Tidak Ditemukan' });
    const { title, description, point, submited } = req.body;
    await Task.update(
      { title, description, point, submited },
      {
        where: {
          id: task.id,
        },
      }
    );
    res.status(200).json({ status: 'Berhasil', pesan: 'Data Tugas Telah Diubah' });
  } catch (error) {
    res.status(500).json({ status: 'Gagal', pesan: error.message });
  }
};

exports.delete = async (req, res) => {
  const task = await Task.findOne({
    where: {
      task_id: req.params.id,
    },
  });
  if (!task) return res.status(404).json({ status: 'Gagal', pesan: 'Tugas Tidak Ditemukan' });
  try {
    await Task.destroy({
      where: {
        id: task.id,
      },
    });
    res.status(200).json({ status: 'Berhasil', pesan: 'Tugas Telah Dihapus' });
  } catch (error) {
    res.status(400).json({ status: 'Gagal', pesan: error.message });
  }
};