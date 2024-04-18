export type FilterStatus = "active"  | "inactive";
export type ObjFilter = Record<string,Record<string,boolean>>;
export const FiltersStyle: ObjFilter = {
    "active": {
        "bg-new-gray": true,
        "rounded-lg": true,
        "p-2":true
    },
    "inactive": {
        "bg-new-gray": false,
        "rounded-lg": false,
        "p-2":false
    }
}