import Hadiah from '../models/HadiahModel.js';
import User from '../models/Usermodel.js';
import path from 'path';

export const getHadiah = async (req, res) => {
  try {
    const hadiah = await Hadiah.findAll({
      attributes: ['uuid', 'name', 'deskripsi', 'harga', 'gambar', 'url'],
      // include: [
      //   {
      //     model: User,
      //     attributes: ['name'],
      //   },
      // ],
    });
    res.status(200).json({ status: 'Berhasil', pesan: 'Menampilkan Hadiah', hadiah });
  } catch (error) {
    res.status(500).json({ status: 'Gagal', pesan: error.message });
  }
};

export const getHadiahById = async (req, res) => {
  try {
    const checkHadiah = await Hadiah.findOne({
      where: {
        uuid: req.params.id,
      },
    });
    if (!checkHadiah) return res.status(404).json({ status: 'Gagal', pesan: 'Hadiah Tidak Ditemukan' });
    const hadiah = await Hadiah.findOne({
      attributes: ['uuid', 'name', 'deskripsi', 'harga', 'gambar', 'url'],
      where: {
        uuid: req.params.id,
      },
      // include: [
      //   {
      //     model: User,
      //     attributes: ['name'],
      //   },
      // ],
    });
    res.status(200).json({ status: 'Berhasil', pesan: 'Menampilkan Hadiah', hadiah });
  } catch (error) {
    res.status(500).json({ status: 'Gagal', pesan: error.message });
  }
};

export const createHadiah = async (req, res) => {
  const { name, deskripsi, harga } = req.body;
  if (req.files === null) return res.status(400).json({ status: 'Gagal', pesan: 'File Tidak Ada' });
  // const fileSize = file.data.lenght;
  const berkas = req.files.gambar;
  const ext = path.extname(berkas.name);
  const fileName = berkas.md5 + ext;
  const url = `${req.protocol}://${req.get('host')}/images/${fileName}`;
  berkas.mv(`./public/images/${fileName}`, async (err) => {
    if (err) return res.status(500).json({ status: 'Gagal', pesan: err.message });
    try {
      await Hadiah.create({
        name: name,
        deskripsi: deskripsi,
        harga: harga,
        gambar: fileName,
        url: url,
        userId: req.userId,
      });
      res.status(201).json({ status: 'Berhasil', pesan: 'Hadiah Sudah Ditambahkan' });
    } catch (error) {
      res.status(500).json({ status: 'Gagal', pesan: error.message });
    }
  });
};

export const updateHadiah = async (req, res) => {
  const checkHadiah = await Hadiah.findOne({
    where: {
      uuid: req.params.id,
    },
  });
  if (!checkHadiah) return res.status(404).json({ status: 'Gagal', pesan: 'Hadiah Tidak Ditemukan' });
  if (req.files === null) return res.status(400).json({ status: 'Gagal', pesan: 'File Tidak Ada' });
  // const fileSize = file.data.lenght;
  const berkas = req.files.gambar;
  const ext = path.extname(berkas.name);
  const fileName = berkas.md5 + ext;
  const url = `${req.protocol}://${req.get('host')}/images/${fileName}`;
  const { name, deskripsi, harga } = req.body;
  berkas.mv(`./public/images/${fileName}`, async (err) => {
    if (err) return res.status(500).json({ status: 'Gagal', pesan: err.message });
    try {
      await Hadiah.update(
        {
          name: name,
          deskripsi: deskripsi,
          harga: harga,
          gambar: fileName,
          url: url,
        },
        {
          where: {
            uuid: req.params.id,
          },
        }
      );
      res.status(201).json({ status: 'Berhasil', pesan: 'Hadiah Sudah Ditambahkan' });
    } catch (error) {
      res.status(500).json({ status: 'Gagal', pesan: error.message });
    }
  });
};

export const deleteHadiah = async (req, res) => {
  const checkHadiah = await Hadiah.findOne({
    where: {
      uuid: req.params.id,
    },
  });
  if (!checkHadiah) return res.status(404).json({ status: 'Gagal', pesan: 'Hadiah Tidak Ditemukan' });
  try {
    await Hadiah.destroy({
      where: {
        uuid: req.params.id,
      },
    });
    res.status(200).json({ status: 'Berhasil', pesan: 'Hadiah Telah Dihapus' });
  } catch (error) {
    res.status(400).json({ status: 'Gagal', pesan: error.message });
  }
};
