const mongoose = require('mongoose');

const Schema= mongoose.Schema;


const userSchema = new Schema ({
   name: {type: String, required:[true,'Please insert your Full Name']},
   email: {type:String, required:[true,'Please insert your Email Adress'],unique: true},
   pic: {type:String,default:'https://res.cloudinary.com/dffxhlnzz/image/upload/v1677059129/wave_6_ax8g3s.svg'},
   password: {type:String,required:[true,'Please insert your Password'],select:false},
   description: {type: String},
   germanLevel:{type:String},
   hobbies: [{type:String}],
   location: {
    type: {
      type: String,
      enum: ['Point'],
      default: "Point",
    },
    coordinates: {
      type: [Number],
      index: "2dsphere"
    },
  },
})

module.exports = mongoose.model('User', userSchema)

// {
//     _id:
//     name: {type :String},
//     email: {type:String,required:[true,'email needed'],unique: true}
//     pic: url from cloudinary
//     password: jwt hashed,select:false
//     description: string
//     hobbys: [array of strings]
//     location: {"type" : "Point",
//       "coordinates" : [
//         -122.5,
//         37.7
//       ]}
//     }
