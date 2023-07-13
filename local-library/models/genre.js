const mongoose = require("mongoose")

const Schema = mongoose.Schema

const genreSchema = new Schema({
    name: {type: String, required: true, minLength: 3, maxLength: 100 }
})

genreSchema.virtual('url').get( () => {
    return `/genre/${this.id}`; 
})

module.exports(mongoose.model("Genre", genreSchema))