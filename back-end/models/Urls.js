const mongoose = require('mongoose')
const Schema = mongoose.Schema

const urlSchema = new Schema(
  {
    content: {
      type: String,
      required: true,
    },
  }
)

// create mongoose Model
const Urls = mongoose.model('Description', urlSchema)

// export the model so other modules can import it
module.exports = {
    Urls,
}