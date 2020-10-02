import { toast } from "react-toastify"

export const notify = (type, message) => {
    if (type === "success") {
        toast.success(message)
    } else if (type === "error") {
        if (!message) message = "Something Went Wrong. Try Again!"
        toast.error(message)
    } else if (type === "warning") {
        toast.warning(message)
    } else {
        toast(message)
    }
}
