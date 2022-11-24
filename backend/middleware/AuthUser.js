import User from '../models/Usermodel.js';

export const verifyUser = async (req, res, next) => {
  if (!req.session.userId) {
    return res.status(401).json({ status: 'Gagal', pesan: 'Akses Dibatasi, Anda Belum Login' });
  }
  const user = await User.findOne({
    where: {
      uuid: req.session.userId,
    },
  });
  if (!user) return res.status(404).json({ status: 'Gagal', pesan: 'Data User Tidak Ada' });
  req.userId = user.id;
  req.role = user.role;
  next();
};

export const isAdmin = async (req, res, next) => {
  const user = await User.findOne({
    where: {
      uuid: req.session.userId,
    },
  });
  if (!user) return res.status(404).json({ status: 'Gagal', pesan: 'Data User Tidak Ada' });
  if (user.role !== 'admin') return res.status(403).json({ status: 'Gagal', pesan: 'Akses Dibatasi, Anda Bukan Admin' });
  next();
};

export const userOnly = async (req, res, next) => {
  const user = await User.findOne({
    where: {
      uuid: req.session.userId,
    },
  });
  if (!user) return res.status(404).json({ status: 'Gagal', pesan: 'Data User Tidak Ada' });
  if (user.role !== 'user') return res.status(403).json({ status: 'Gagal', pesan: 'Akses Dibatasi, Hanya Untuk User' });
  next();
};
