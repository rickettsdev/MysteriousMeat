import NoteModel from "../models/NoteModel";
import ProductModel from "../models/ProductModel";

export const getTableContent = (arr: ProductModel) => {
    const iterateNotes = (notes: Array<NoteModel>) => {
       return notes.sort((noteA, noteB) => { 
           let firstDate = new Date(noteA.count)
           let secondDate = new Date(noteB.count)
           return secondDate.getTime() - firstDate.getTime()
        }).map(function (nextNote, j) {
         return (
            <tr key={nextNote.count ?? "Undefined"}>
               <td>{nextNote.count ?? "Undefined"}</td>
               <td>{nextNote.note}</td>
            </tr>
         );
       })
    }
    return (
        <table key={arr.description}>
            <thead>
            <tr key="columnHeaders">
                <td>TimeStamp</td>
                <td>Note</td>
            </tr>
            </thead>
            <tbody>
                {iterateNotes(arr.notes)}
            </tbody>
        </table>
    );
};