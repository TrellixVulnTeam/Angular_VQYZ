import { Flavor } from "src/app/components/core/flavor";
import { Size } from "../core/size";

export interface SelectedProductAttributes {
    flavor: Flavor | undefined;
    size: Size | undefined;
}