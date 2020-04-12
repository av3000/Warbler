const mongoose = require("mongoose"),
      User     = require("./user");

const messageSchema = new mongoose.Schema(
    {
        text: {
            type: String,
            required: true,
            maxlength: 160
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
    },
    {
        timestamps: true
    }
);

messageSchema.pre('remove', async function(next) {
    try {
        let user = await User.findById(this.userId);
        user.message.remove(this.id);
        await user.save();
        return next();
    } catch(err) {
        next(err);
    }
    // find user
    // remove message of id from list
    // save user
    // retur next
})

const Message = mongoose.model("Message", messageSchema);
module.exports = Message;