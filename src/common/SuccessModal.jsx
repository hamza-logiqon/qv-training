import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const SuccessModal = ({
  open,
  onOpenChange,
  onContinue,
  title,
  description,
  buttonTitle,
}) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className=" rounded-2xl text-center py-12">
        <div className="max-w-sm mx-auto">
          {/* Confetti 🎉 */}
          <div className="flex justify-center mb-6">
            <img src="/confetti.png" alt="Confetti" />
          </div>

          <DialogHeader>
            <DialogTitle className="text-lg font-semibold text-center">
              {title}
            </DialogTitle>
            <DialogDescription className="text-gray-600 text-sm text-center">
              {description}
            </DialogDescription>
          </DialogHeader>

          <Button
            onClick={onContinue}
            className="bg-[#265ED4]  hover:bg-blue-700 text-white font-medium rounded-md w-full mt-6 max-w-xs cursor-pointer"
          >
            {buttonTitle}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
export default SuccessModal;
