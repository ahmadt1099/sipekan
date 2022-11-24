import Tugas from '../models/TugasModel.js';
import User from '../models/Usermodel.js';

export const getTugas = async (req, res) => {
  try {
    const tugas = await Tugas.findAll({
      attributes: ['uuid', 'judul', 'deskripsi', 'selesai', 'point'],
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

export const getTugasById = async (req, res) => {
  try {
    const checkTugas = await Tugas.findOne({
      where: {
        uuid: req.params.id,
      },
    });
    if (!checkTugas) return res.status(404).json({ status: 'Gagal', pesan: 'Tugas Tidak Ditemukan' });
    const tugas = await Tugas.findOne({
      attributes: ['uuid', 'judul', 'deskripsi', 'selesai', 'point'],
      where: {
        uuid: req.params.id,
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

export const createTugas = async (req, res) => {
  const { judul, deskripsi, point } = req.body;
  try {
    await Tugas.create({
      judul: judul,
      deskripsi: deskripsi,
      point: point,
      userId: req.userId,
      selesai: false,
    });
    res.status(201).json({ status: 'Berhasil', pesan: 'Tugas Berhasil Ditambahkan' });
  } catch (error) {
    res.status(500).json({ status: 'Gagal', pesan: error.message });
  }
};

export const updateTugas = async (req, res) => {
  try {
    const tugas = await Tugas.findOne({
      where: {
        uuid: req.params.id,
      },
    });
    if (!tugas) return res.status(404).json({ status: 'Gagal', pesan: 'Tugas Tidak Ditemukan' });
    const { judul, deskripsi, point, selesai } = req.body;
    const response = await Tugas.update(
      { judul, deskripsi, point, selesai },
      {
        where: {
          id: tugas.id,
        },
      }
    );
    res.status(200).json({ status: 'Berhasil', pesan: 'Data Tugas Telah Diubah' });
  } catch (error) {
    res.status(500).json({ status: 'Gagal', pesan: error.message });
  }
};

export const deleteTugas = async (req, res) => {
  const tugas = await Tugas.findOne({
    where: {
      uuid: req.params.id,
    },
  });
  if (!tugas) return res.status(404).json({ status: 'Gagal', pesan: 'Tugas Tidak Ditemukan' });
  try {
    await Tugas.destroy({
      where: {
        id: tugas.id,
      },
    });
    res.status(200).json({ status: 'Berhasil', pesan: 'Tugas Telah Dihapus' });
  } catch (error) {
    res.status(400).json({ status: 'Gagal', pesan: error.message });
  }
};
