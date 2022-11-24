import Submit from '../models/SubmitModel.js';
import Tugas from '../models/TugasModel.js';
import User from '../models/Usermodel.js';
import path from 'path';

export const getSubmit = async (req, res) => {
  try {
    const submit = await Submit.findAll({
      attributes: ['uuid', 'komentar', 'file', 'url'],
      include: [
        {
          model: User,
          attributes: ['name'],
        },
        {
          model: Tugas,
          attributes: ['judul'],
        },
      ],
    });
    res.status(200).json({ status: 'Berhasil', pesan: 'Menampilkan Submit', submit });
  } catch (error) {
    res.status(500).json({ status: 'Gagal', pesan: error.message });
  }
};

export const getSubmitById = async (req, res) => {
  try {
    const getSubmit = await Submit.findOne({
      where: {
        uuid: req.params.id,
      },
    });
    if (!getSubmit) return res.status(404).json({ status: 'Gagal', pesan: 'Submit Tugas Tidak Ditemukan' });
    const submit = await Submit.findOne({
      attributes: ['uuid', 'komentar', 'file', 'url'],
      where: {
        uuid: req.params.id,
      },
      include: [
        {
          model: User,
          attributes: ['name'],
        },
        {
          model: Tugas,
          attributes: ['judul'],
        },
      ],
    });
    res.status(200).json({ status: 'Berhasil', pesan: 'Menampilkan Submit', submit });
  } catch (error) {
    res.status(500).json({ status: 'Gagal', pesan: error.message });
  }
};

export const createSubmit = async (req, res) => {
  const { komentar } = req.body;
  if (req.files === null) return res.status(400).json({ status: 'Gagal', pesan: 'File Tidak Ada' });
  // const fileSize = file.data.lenght;
  const berkas = req.files.file;
  const ext = path.extname(berkas.name);
  const fileName = berkas.md5 + ext;
  const url = `${req.protocol}://${req.get('host')}/submit/${fileName}`;
  berkas.mv(`./public/submit/${fileName}`, async (err) => {
    if (err) return res.status(500).json({ status: 'Gagal', pesan: err.message });
    try {
      const tugas = await Tugas.findOne({
        where: {
          uuid: req.params.id,
        },
      });
      const user = await User.findOne({
        where: {
          uuid: req.session.userId,
        },
      });
      const submit = await Submit.findOne({
        where: {
          tugasId: tugas.id,
        },
      });
      if (submit) return res.status(404).json({ status: 'Gagal', pesan: 'Tugas Sudah Disubmit' });
      if (!tugas) return res.status(404).json({ status: 'Gagal', pesan: 'Tugas Tidak Ditemukan' });
      if (!user) return res.status(404).json({ status: 'Gagal', pesan: 'User Tidak Ditemukan' });
      await Submit.create({
        komentar: komentar,
        file: fileName,
        url: url,
        userId: req.userId,
        tugasId: tugas.id,
      });
      await Tugas.update(
        {
          selesai: 1,
        },
        {
          where: {
            id: tugas.id,
          },
        }
      );
      await User.update(
        {
          point: user.point + tugas.point,
        },
        {
          where: {
            id: user.id,
          },
        }
      );
      res.status(201).json({ status: 'Berhasil', pesan: 'Tugas Berhasil disubmit' });
    } catch (error) {
      res.status(500).json({ status: 'Gagal', pesan: error.message });
    }
  });
};

export const updateSubmit = async (req, res) => { };

export const deleteSubmit = async (req, res) => { };
