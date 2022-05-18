import NoteModel from "./NoteModel";

export default interface ProductModel {
    description: string,
    notes: Array<NoteModel>
}