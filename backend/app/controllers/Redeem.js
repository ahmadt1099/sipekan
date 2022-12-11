const db = require("../models");
const Redeem = db.redeem;
const User = db.user;
const Reward = db.reward;
const path = require('path');

exports.create = async (req, res) => {
  const { note } = req.body;
  const checkReward = await Reward.findOne({
    where: {
      reward_id: req.params.id,
    },
  });
  const user = await User.findOne({
    where: {
      user_id: req.session.userId,
    },
  });
  if (!checkReward) return res.status(400).json({ status: 'Gagal', pesan: 'Hadiah Untuk Diredeem Tidak Ditemukan' });
  if (user.point < checkReward.price) return res.status(400).json({ status: 'Gagal', pesan: 'Poin Tidak Cukup' });
  try {
    await Redeem.create({
      note: note,
      userId: req.userId,
      rewardId: checkReward.id,
    });
    await User.update(
      {
        point: user.point - checkReward.price,
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

exports.getAll = async (req, res) => {
  try {
    const redeem = await Redeem.findAll({
      attributes: ['redeem_id', 'note'],
      include: [
        {
          model: Reward,
          attributes: ['title'],
        },
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });
    res.status(200).json({ status: 'Berhasil', pesan: 'Menampilkan Data Redeem', redeem });
  } catch (error) {
    res.status(500).json({ status: 'Gagal', pesan: error.message });
  }
};

exports.findOne = async (req, res) => {
  try {
    const getRedeem = await Redeem.findOne({
      where: {
        redeem_id: req.params.id,
      },
    });
    if (!getRedeem) return res.status(404).json({ status: 'Gagal', pesan: 'Data Redeem Tidak Ditemukan' });
    const redeem = await Redeem.findOne({
      attributes: ['redeem_id', 'note'],
      where: {
        redeem_id: req.params.id,
      },
      include: [
        {
          model: Reward,
          attributes: ['title'],
        },
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });
    res.status(200).json({ status: 'Berhasil', pesan: 'Menampilkan Data Redeem', redeem });
  } catch (error) {
    res.status(500).json({ status: 'Gagal', pesan: error.message });
  }
};

exports.update = async (req, res) => {

};

exports.delete = async (req, res) => {

};