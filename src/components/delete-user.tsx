import { Button } from "./ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { deleteUsefromDb } from "../../actions/user.action";

function DeleteUser() {
  const handleDeleteUser = async () => {
    try {
      await deleteUsefromDb();
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <div>
      <AlertDialog>
        <AlertDialogTrigger>
          <Button variant="outline" className="bg-red-400 text-white">
            Delete
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <Button onClick={handleDeleteUser}>
              <AlertDialogAction>Continue</AlertDialogAction>
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

export default DeleteUser;
