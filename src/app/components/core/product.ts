import { Flavor } from "src/app/components/core/flavor";
import { Size } from "src/app/components/core/size";

export interface Product {
    id: number;
    name: string;
    imageUrls: string[];
    price: number;
    flavors: Flavor[];
    sizes: Size[];
}