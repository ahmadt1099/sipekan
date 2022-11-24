import Tukar from '../models/TukarModel.js';
import Hadiah from '../models/HadiahModel.js';
import User from '../models/Usermodel.js';
import path from 'path';

export const getTukar = async (req, res) => {
  try {
    const tukar = await Tukar.findAll({
      attributes: ['uuid', 'pesan'],
      include: [
        {
          model: Hadiah,
          attributes: ['name'],
        },
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });
    res.status(200).json({ status: 'Berhasil', pesan: 'Menampilkan Data Redeem', tukar });
  } catch (error) {
    res.status(500).json({ status: 'Gagal', pesan: error.message });
  }
};

export const getTukarById = async (req, res) => {
  try {
    const getTukar = await Tukar.findOne({
      where: {
        uuid: req.params.id,
      },
    });
    if (!getTukar) return res.status(404).json({ status: 'Gagal', pesan: 'Data Redeem Tidak Ditemukan' });
    const tukar = await Tukar.findOne({
      attributes: ['uuid', 'pesan'],
      where: {
        uuid: req.params.id,
      },
      include: [
        {
          model: Hadiah,
          attributes: ['name'],
        },
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });
    res.status(200).json({ status: 'Berhasil', pesan: 'Menampilkan Data Redeem', tukar });
  } catch (error) {
    res.status(500).json({ status: 'Gagal', pesan: error.message });
  }
};

export const createTukar = async (req, res) => {
  const { pesan } = req.body;
  const checkHadiah = await Hadiah.findOne({
    where: {
      uuid: req.params.id,
    },
  });
  const user = await User.findOne({
    where: {
      uuid: req.session.userId,
    },
  });
  if (!checkHadiah) return res.status(400).json({ status: 'Gagal', pesan: 'Hadiah Untuk Diredeem Tidak Ditemukan' });
  try {
    await Tukar.create({
      pesan: pesan,
      userId: req.userId,
      hadiahId: checkHadiah.id,
    });
    await User.update(
      {
        point: user.point - checkHadiah.harga,
      },
      {
        where: {
          id: user.id,
        },
      }
    );
    res.status(201).json({ status: 'Berhasil', pesan: 'Redeem Hadiah Berhasil' });
  } catch (error) {
    res.status(400).json({ status: 'Gagal', pesan: error.message });
  }
};

export const updateTukar = async (req, res) => { };

export const deleteTukar = async (req, res) => { };
