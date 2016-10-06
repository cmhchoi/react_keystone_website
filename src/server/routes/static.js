const router = require('express').Router();

router.get('/admin', () => {
  res.render('admin.html');
})

router.get('/*', (req, res) => {
  res.render('index.html');
});

module.exports = router;