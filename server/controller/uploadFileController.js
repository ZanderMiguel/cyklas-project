var gfsEasyUpload = require('../db').then(function (gfsEasy) {
  //make use of gfsEasy methods (e.g. gfsEasy.getInfoById())
  gfsEasyUpload
    .route('/putFile')
    .post(multipartMiddleware, function (req, res, next) {
      gfsEasy.putFile(
        req.files.file.path,
        req.files.file.name,
        function (err, file) {
          if (err) next(err);
          res.json(file);
        }
      );
    });
});
