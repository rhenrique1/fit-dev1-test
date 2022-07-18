import { SimpleDialog } from "./simple-dialog";

export interface ConfirmDialog extends SimpleDialog {
    cancelButtonText: string;
    confirmButtonText: string;
}
