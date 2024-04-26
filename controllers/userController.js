const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const User = require('../models/User');

exports.read = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ where: { username } });
    if (!user) return res.status(404).json({ message: 'Usuario No Identificado' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Usuario Incorrecto' });

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'ERROR - Servidor' });
  }
};

exports.create = async (req, res) => {
  const { name, username, password } = req.body;

  try {
    const existingUser = await User.findOne({ where: { username } });
    if (existingUser) return res.status(400).json({ message: 'Usuario extistente' });

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create(newUser({ name, username, password: hashedPassword }));

    res.status(201).json({ message: 'Usuario Creado Correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'ERROR - Servidor' });
  }
};

exports.update = async (req, res) => {
  const { id } = req.params;
  const { name, username, password } = req.body;

  try {
    const user = await User.findByPk(id);
    if (!user) return res.status(404).json({ message: 'Usuario No Identificado' });

    if (username) user.username = username;
    if (name) user.username = name;
    if (password) user.password = await bcrypt.hash(password, 10);
    await user.save();

    res.json({ message: 'Usuario Actualizado Correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'ERROR - Servidor' });
  }
};

exports.delete = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findByPk(id);
    if (!user) return res.status(404).json({ message: 'Usuario No Identificado' });

    await user.destroy();

    res.json({ message: 'Usuario Eliminado Correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'ERROR - Servidor' });
  }
};