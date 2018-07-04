const express = require('express');
const router  = express.Router();

// GET homepage
router.get('/', (req,res)=>{
  res.redirect('/catalog');
});

module.exports = router;