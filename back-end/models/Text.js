const mongoose = require('mongoose')
const Schema = mongoose.Schema

const textSchema = new Schema(
  {
    content: {
      type: String,
      required: true,
    },
  }
)

// create mongoose Model
const Text = mongoose.model('Text', textSchema)

// export the model so other modules can import it
module.exports = {
    Text,
}
