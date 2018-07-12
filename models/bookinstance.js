const mongoose = require('mongoose');
const moment = require('moment');
var Schema = mongoose.Schema;

var BookInstanceSchema = new Schema({
  book: {
    type: Schema.ObjectId,
    ref: 'Book',
    required: true
  }, // reference to the associated book.
  imprint: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true,
    enum: ['Available', 'Maintanance', 'Loaned', 'Reserved'],
    default: 'Maintance'
  },
  due_back: {
    type: Date,
    default: Date.now
  }
});

// Virtual for bookinstance's URL
BookInstanceSchema
  .virtual('url')
  .get(function () {
    return '/catalog/bookinstance/' + this._id;
  });

// Virtual for due back formatted date
BookInstanceSchema
  .virtual('due_back_formatted')
  .get(() => {
    return moment(this.due_back).format('MMMM Do, YYYY')
  });
// Export model
module.exports = mongoose.model('BookIsntance', BookInstanceSchema);