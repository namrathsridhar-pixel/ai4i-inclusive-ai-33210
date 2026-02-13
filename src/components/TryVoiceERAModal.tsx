import { useState } from "react";
import { Phone, Loader2, CheckCircle, AlertTriangle } from "lucide-react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface TryVoiceERAModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const TryVoiceERAModal = ({ open, onOpenChange }: TryVoiceERAModalProps) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error" | "rateLimit">("idle");

  const isValid = /^\d{10}$/.test(phoneNumber);

  const handlePlaceCall = async () => {
    if (!isValid) return;
    setStatus("loading");

    // Placeholder - API integration pending
    setTimeout(() => {
      setStatus("success");
    }, 2000);
  };

  const handleClose = (val: boolean) => {
    if (!val) {
      setStatus("idle");
      setPhoneNumber("");
    }
    onOpenChange(val);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-[500px] p-0 bg-background overflow-hidden">
        <VisuallyHidden>
          <DialogTitle>Try VoiceERA</DialogTitle>
          <DialogDescription>Experience real-time AI-powered voice conversations</DialogDescription>
        </VisuallyHidden>

        <div className="p-8">
          {/* Header */}
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <Phone className="text-primary" size={20} />
              </div>
              <h2 className="text-xl font-heading font-bold">VoiceERA</h2>
            </div>
            <p className="text-lg font-heading font-semibold mb-1">Talk to VoiceERA</p>
            <p className="text-sm text-muted-foreground">
              It's quick, free, and a secure way to experience real-time, AI-powered voice conversations.
            </p>
          </div>

          <div className="h-px bg-border mb-6" />

          {status === "success" ? (
            <div className="text-center py-6">
              <div className="w-14 h-14 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="text-green-500" size={28} />
              </div>
              <p className="font-heading font-semibold text-lg mb-2">Call initiated</p>
              <p className="text-sm text-muted-foreground mb-1">You will receive a call shortly from VoiceERA.</p>
              <p className="text-xs text-muted-foreground">Please answer your phone to experience the real-time voice interaction.</p>
              <Button variant="outline" className="mt-6" onClick={() => { setStatus("idle"); setPhoneNumber(""); }}>
                Try again
              </Button>
            </div>
          ) : status === "error" ? (
            <div className="text-center py-6">
              <div className="w-14 h-14 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="text-destructive" size={28} />
              </div>
              <p className="font-heading font-semibold mb-2">Unable to initiate call.</p>
              <p className="text-sm text-muted-foreground">Please try again in a few minutes.</p>
              <Button variant="outline" className="mt-6" onClick={() => setStatus("idle")}>
                Retry
              </Button>
            </div>
          ) : status === "rateLimit" ? (
            <div className="text-center py-6">
              <div className="w-14 h-14 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="text-destructive" size={28} />
              </div>
              <p className="font-heading font-semibold mb-2">You've reached the maximum number of attempts.</p>
              <p className="text-sm text-muted-foreground">Please try again later.</p>
            </div>
          ) : (
            <>
              {/* Country Selector */}
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex items-center gap-2 px-3 py-2 bg-muted rounded-md border border-border text-sm font-medium">
                    🇮🇳 India (+91)
                  </div>
                </div>
              </div>

              {/* Phone Input */}
              <div className="mb-6">
                <label className="text-sm font-medium text-foreground mb-1.5 block">Enter 10-digit mobile number</label>
                <Input
                  type="tel"
                  placeholder="9876543210"
                  value={phoneNumber}
                  onChange={(e) => {
                    const val = e.target.value.replace(/\D/g, "").slice(0, 10);
                    setPhoneNumber(val);
                  }}
                  maxLength={10}
                  className="text-lg tracking-wider"
                  disabled={status === "loading"}
                />
                {phoneNumber.length > 0 && !isValid && (
                  <p className="text-xs text-destructive mt-1.5">Please enter a valid 10-digit mobile number.</p>
                )}
              </div>

              {/* Place Call Button */}
              <Button
                className="w-full"
                size="lg"
                disabled={!isValid || status === "loading"}
                onClick={handlePlaceCall}
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="animate-spin mr-2" size={16} />
                    Placing Call…
                  </>
                ) : (
                  <>
                    <Phone size={16} className="mr-2" />
                    Place Call
                  </>
                )}
              </Button>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TryVoiceERAModal;
