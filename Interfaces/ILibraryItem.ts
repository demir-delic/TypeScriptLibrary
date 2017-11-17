import { ItemType} from "../ItemType";

export default interface ILibraryItem {
    id: number;
    name: string;
    description: string;
    available: boolean;
    type: ItemType;
}