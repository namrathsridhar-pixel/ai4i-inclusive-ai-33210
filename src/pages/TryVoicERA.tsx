import { useState } from "react";
import { Phone, Loader2, CheckCircle, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

const TryVoicERA = () => {
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

  return (
    <div className="flex-1 flex items-center justify-center relative overflow-hidden" style={{ background: "#0d0d0d" }}>
      {/* Concentric circles background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div
            key={i}
            className="absolute rounded-full border"
            style={{
              width: `${i * 180}px`,
              height: `${i * 180}px`,
              borderColor: `rgba(255,255,255,${0.06 - i * 0.008})`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 w-full max-w-[560px] mx-4">
        {/* Icon above card */}
        <div className="flex justify-center mb-[-28px] z-20 relative">
          <div className="w-14 h-14 rounded-2xl bg-[#1a1a2e] border border-white/10 flex items-center justify-center shadow-[0_0_30px_rgba(100,130,255,0.15)]">
            <Phone className="text-[#7B93DB]" size={24} />
          </div>
        </div>

        {/* Main card */}
        <div className="rounded-2xl border border-white/10 bg-[#111111] shadow-2xl pt-10 pb-8 px-8">
          {status === "success" ? (
            <div className="text-center py-4">
              <div className="w-14 h-14 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="text-green-400" size={28} />
              </div>
              <p className="font-heading font-bold text-xl text-white mb-2">Call Initiated</p>
              <p className="text-sm text-white/50 mb-1">You will receive a call shortly from VoicERA.</p>
              <p className="text-xs text-white/40">Please answer your phone to experience the real-time voice interaction.</p>
              <Button
                variant="outline"
                className="mt-6 bg-transparent border-white/20 text-white/70 hover:bg-white/10 hover:text-white"
                onClick={() => { setStatus("idle"); setPhoneNumber(""); }}
              >
                Try again
              </Button>
            </div>
          ) : status === "error" ? (
            <div className="text-center py-4">
              <div className="w-14 h-14 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="text-red-400" size={28} />
              </div>
              <p className="font-heading font-bold text-lg text-white mb-2">Unable to initiate call.</p>
              <p className="text-sm text-white/50">Please try again in a few minutes.</p>
              <Button
                variant="outline"
                className="mt-6 bg-transparent border-white/20 text-white/70 hover:bg-white/10 hover:text-white"
                onClick={() => setStatus("idle")}
              >
                Retry
              </Button>
            </div>
          ) : status === "rateLimit" ? (
            <div className="text-center py-4">
              <div className="w-14 h-14 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="text-red-400" size={28} />
              </div>
              <p className="font-heading font-bold text-lg text-white mb-2">Maximum attempts reached.</p>
              <p className="text-sm text-white/50">Please try again later.</p>
            </div>
          ) : (
            <>
              {/* Header */}
              <div className="text-center mb-8">
                <h1 className="text-3xl md:text-4xl font-heading font-bold text-white mb-3">
                  Talk to VoicERA
                </h1>
                <p className="text-sm md:text-base text-white/45 leading-relaxed max-w-sm mx-auto">
                  It's quick, free, and a great way to experience AI-powered conversations firsthand.
                </p>
              </div>

              {/* Inline country + phone input */}
              <div className="flex gap-3 mb-4">
                <div className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-white/15 bg-white/5 text-sm text-white/70 font-medium shrink-0">
                  🇮🇳 India (+91)
                </div>
                <input
                  type="tel"
                  placeholder="Enter 10 digit mobile number"
                  value={phoneNumber}
                  onChange={(e) => {
                    const val = e.target.value.replace(/\D/g, "").slice(0, 10);
                    setPhoneNumber(val);
                  }}
                  maxLength={10}
                  disabled={status === "loading"}
                  className="flex-1 rounded-lg border border-white/15 bg-white/5 px-4 py-2.5 text-base text-white placeholder:text-white/30 focus:outline-none focus:ring-1 focus:ring-white/25 disabled:opacity-50 tracking-wide"
                />
              </div>

              {phoneNumber.length > 0 && !isValid && (
                <p className="text-xs text-red-400 mb-3 -mt-2 pl-1">Please enter a valid 10-digit mobile number.</p>
              )}

              {/* Place Call Button */}
              <Button
                className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/15 hover:shadow-[0_0_20px_rgba(255,255,255,0.08)] transition-all duration-300 h-12 text-base font-medium"
                disabled={!isValid || status === "loading"}
                onClick={handlePlaceCall}
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="animate-spin mr-2" size={18} />
                    Placing Call…
                  </>
                ) : (
                  <>
                    <Phone size={18} className="mr-2" />
                    Place Call
                  </>
                )}
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default TryVoicERA;
