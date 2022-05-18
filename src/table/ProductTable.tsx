import NoteModel from "../models/NoteModel";
import ProductModel from "../models/ProductModel";

export const getTableContent = (arr: ProductModel) => {
    const iterateItem = (item: [NoteModel]) => {
       return item.map(function (nextItem, j) {
         return (
            <tr key={nextItem.count ?? "Undefined"}>
               <td>{nextItem.count ?? "Undefined"}</td>
               <td>{nextItem.note}</td>
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
                {iterateItem(arr.notes)}
            </tbody>
        </table>
    );
};