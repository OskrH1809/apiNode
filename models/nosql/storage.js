const mongoose = require("mongoose")

const StorageScheme = new mongoose.Schema(
    {
        url:{
            type:String
        },
        filename:{
            type:String
        }
    },
    {
        timestamps:true,  //todo     createdat, updatedat
        versionkey:false
    }
)


module.exports = mongoose.model("storages",StorageScheme)