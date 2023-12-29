exports.helloWorld = (req, res) => {
  const message="<font color='blue'>My СloudFunction!</font><br><b>App Version 1.2 this is a new one!</b>";
  res.status(200).send(message);
};

