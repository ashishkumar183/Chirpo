export default function crudRepository(schema) {
    return {
        model: schema,
        create: async function (data) {
            const newDoc = await this.model.create(data);
            return newDoc;
        },
        getAll: async function () {
            const docs = await this.model.find();
            return docs;
        },
        getById: async function (id) {
            const doc = await this.model.findById(id);  
            return doc;
        },
        update: async function (id, data) {
            const updatedDoc = await this.model.findByIdAndUpdate(id, data, { new: true });
            return updatedDoc;
        },
        delete: async function (id) {
            const deletedDoc = await this.model.findByIdAndDelete(id);
            return deletedDoc;
        } 
    }
}