const path = require("path");
const fs = require("fs/promises");
const Jimp = require("jimp");

const User = require("../../models/user");
const avatarsDir = path.join(__dirname, "../../", "public", "avatars");

const updateAvatar = async (req, res) => {
  const { path: temUpload, originalname } = req.file;
  const { _id } = req.user;

  const fileName = `${_id}_${originalname}`;
  const resultUpload = path.join(avatarsDir, fileName);

  await fs.rename(temUpload, resultUpload);

  await Jimp.read(resultUpload).then((img) => {
    img.resize(250, 250).write(resultUpload);
  });

  const avatarUrl = path.join("avatars", fileName);

  await User.findByIdAndUpdate(_id, { avatarUrl });

  res.status(200).json({
    avatarUrl,
  });
};

module.exports = updateAvatar;
