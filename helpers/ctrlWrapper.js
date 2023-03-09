const ctrlWrapper = (ctrl) => {
  const thumb = async (req, res, next) => {
    try {
      await ctrl(req, res, next);
    } catch (error) {
      next(error);
    }
  };
  return thumb;
};

module.exports = ctrlWrapper;
