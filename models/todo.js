const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    value: String, // 할 일이 무엇인지
    doneAt: Date, // 할 일이 언제 완료되었는지
    order: Number, // 할 일이 몇번째로 할 일인지
});

TodoSchema.virtual('todoId').get(function () {
    return this._id.toHexString();
});
TodoSchema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Todo', TodoSchema);
