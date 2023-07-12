const mongoose = require('mongoose')

const Schema  = mongoose.Schema

const authorSchema = new Schema({
    first_name: {type: String, required: true, maxLength: 100},
    last_name: {type: String, required: true, maxLength: 100},
    date_of_birth: {type: Date},
    date_of_death: { type: Date}
})

authorSchema.virtual("name").get(function() {
    let fullname = ''
    if (this.first_name && this.last_name) {
        fullname = `${this.first_name} ${this.last_name}`
    }

    return fullname
})

authorSchema.virtual('url').get( () => {
    return `/catalog/author/${this.id}`; 

})

module.exports = mongoose.model("Author", authorSchema)