const db = require("../models");
const Task = db.task;
const User = db.user;
const Submit = db.submit;
const path = require('path');

exports.create = async (req, res) => {
    const { comment, file } = req.body;
    if (req.files === null) return res.status(400).json({ status: 'Gagal', pesan: 'File Tidak Ada' });
    // const fileSize = file.data.lenght;
    const berkas = req.files.file;
    const ext = path.extname(berkas.name);
    const fileName = berkas.md5 + ext;
    const url = `${req.protocol}://${req.get('host')}/submit/${fileName}`;
    berkas.mv(`./public/submit/${fileName}`, async (err) => {
        if (err) return res.status(500).json({ status: 'Gagal', pesan: err.message });
        try {
            const task = await Task.findOne({
                where: {
                    task_id: req.params.id,
                },
            });
            const user = await User.findOne({
                where: {
                    user_id: req.session.userId,
                },
            });
            if (!task) return res.status(404).json({ status: 'Gagal', pesan: 'Tugas Tidak Ditemukan' });
            if (!user) return res.status(404).json({ status: 'Gagal', pesan: 'User Tidak Ditemukan' });
            const submit = await Submit.findOne({
                where: {
                    taskId: task.id,
                },
            });
            if (submit) return res.status(404).json({ status: 'Gagal', pesan: 'Tugas Sudah Disubmit' });
            await Submit.create({
                comment: comment,
                file: fileName,
                url: url,
                userId: req.userId,
                taskId: task.id,
            });
            await Task.update(
                {
                    submited: 1,
                },
                {
                    where: {
                        id: task.id,
                    },
                }
            );
            await User.update(
                {
                    point: user.point + task.point,
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

exports.getAll = async (req, res) => {
    try {
        const submit = await Submit.findAll({
            attributes: ['submit_id', 'comment', 'file', 'url'],
            include: [
                {
                    model: User,
                    attributes: ['name'],
                },
                {
                    model: Task,
                    attributes: ['title'],
                },
            ],
        });
        res.status(200).json({ status: 'Berhasil', pesan: 'Menampilkan Submit', submit });
    } catch (error) {
        res.status(500).json({ status: 'Gagal', pesan: error.message });
    }
};

exports.findOne = async (req, res) => {
    try {
        const getSubmit = await Submit.findOne({
            where: {
                submit_id: req.params.id,
            },
        });
        if (!getSubmit) return res.status(404).json({ status: 'Gagal', pesan: 'Submit Tugas Tidak Ditemukan' });
        const submit = await Submit.findOne({
            attributes: ['submit_id', 'comment', 'file', 'url'],
            where: {
                submit_id: req.params.id,
            },
            include: [
                {
                    model: User,
                    attributes: ['name'],
                },
                {
                    model: Task,
                    attributes: ['title'],
                },
            ],
        });
        res.status(200).json({ status: 'Berhasil', pesan: 'Menampilkan Submit', submit });
    } catch (error) {
        res.status(500).json({ status: 'Gagal', pesan: error.message });
    }
};

exports.update = async (req, res) => {

};

exports.delete = async (req, res) => {

};