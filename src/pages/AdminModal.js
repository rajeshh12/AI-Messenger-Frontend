import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminModal({ isOpen, onClose }) {
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/admin/verify`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ password }),
        },
      );

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Invalid password");
        setLoading(false);
        return;
      }

      localStorage.setItem("adminToken", data.token);

      onClose();

      navigate("/admin/passwords");

      setPassword("");
      setLoading(false);
    } catch (error) {
      setError("Unable to connect to server");
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="
        fixed
        inset-0
        z-[100]
        flex
        items-center
        justify-center
        px-4
        bg-black/70
        backdrop-blur-md
        animate-[modalBg_0.3s_ease-out]
      "
    >
      <div className="absolute w-72 h-72 bg-red-500/10 rounded-full blur-[100px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="relative z-10 w-full max-w-md animate-[cardEnter_0.35s_cubic-bezier(.22,1,.36,1)]">
        <div className="absolute -inset-[1px] rounded-[25px] bg-gradient-to-br from-red-500/30 via-orange-500/10 to-red-700/20 opacity-80 blur-[1px]" />

        <div
          className="
            relative
            bg-[#11131c]/95
            backdrop-blur-2xl
            rounded-[24px]
            border border-white/[0.08]
            p-6
            sm:p-8
            shadow-2xl
            shadow-black/60
            transition-all
            duration-300
            hover:border-white/[0.12]
          "
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent animate-[accentMove_2.5s_ease-in-out_infinite]" />

          <button
            type="button"
            onClick={onClose}
            disabled={loading}
            className="
              absolute
              top-4
              right-4
              w-8
              h-8
              rounded-lg
              flex
              items-center
              justify-center
              text-gray-500
              hover:text-white
              hover:bg-white/[0.06]
              active:scale-90
              transition-all
              duration-200
              disabled:opacity-40
            "
            aria-label="Close"
          >
            ×
          </button>

          <div className="text-center mb-7">
            <div className="inline-flex relative mb-5">
              <div className="absolute inset-0 rounded-2xl bg-red-500/25 blur-2xl animate-pulse" />

              <div
                className="
                  relative
                  w-16
                  h-16
                  rounded-2xl
                  bg-gradient-to-br
                  from-red-500
                  via-red-600
                  to-red-800
                  flex
                  items-center
                  justify-center
                  shadow-xl
                  shadow-red-900/40
                  border
                  border-red-400/20
                  transition-all
                  duration-300
                  hover:scale-105
                  hover:-rotate-2
                "
              >
                <span className="text-3xl">🔐</span>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white tracking-tight">
              Admin Access
            </h2>

            <p className="text-gray-400 text-sm mt-2 leading-relaxed">
              Enter admin password to continue
            </p>

            <div className="flex items-center justify-center gap-2 mt-3">
              <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />

              <span className="text-[11px] text-gray-600">Restricted area</span>
            </div>
          </div>

          {error && (
            <div className="mb-5 p-3.5 rounded-xl bg-red-500/[0.07] border border-red-500/20 text-red-400 text-sm animate-[shake_0.4s_ease-in-out]">
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-7 h-7 rounded-full bg-red-500/10 border border-red-500/10 flex items-center justify-center">
                  <span className="font-semibold">!</span>
                </div>

                <p className="leading-5">{error}</p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Admin Password
              </label>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter admin password"
                  required
                  autoFocus
                  className="
                    w-full
                    h-[52px]
                    px-4
                    pr-14
                    rounded-xl
                    bg-[#090b12]
                    border border-white/[0.08]
                    text-white
                    placeholder:text-gray-600
                    outline-none
                    transition-all
                    duration-300
                    hover:border-red-400/20
                    focus:border-red-500/50
                    focus:ring-4
                    focus:ring-red-500/[0.07]
                    focus:bg-[#0b0d14]
                  "
                />

                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  disabled={loading}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  title={showPassword ? "Hide password" : "Show password"}
                  className="
                    absolute
                    right-2.5
                    top-1/2
                    -translate-y-1/2
                    w-9
                    h-9
                    rounded-lg
                    flex
                    items-center
                    justify-center
                    text-gray-500
                    hover:text-red-300
                    hover:bg-red-400/[0.08]
                    active:scale-90
                    transition-all
                    duration-200
                    disabled:opacity-40
                  "
                >
                  <span
                    className={`text-lg transition-all duration-200 ${
                      showPassword ? "scale-110 opacity-100" : "opacity-70"
                    }`}
                  >
                    {showPassword ? "🙈" : "👁️"}
                  </span>
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="
                group
                relative
                w-full
                h-[52px]
                overflow-hidden
                rounded-xl
                bg-gradient-to-r
                from-red-500
                via-red-600
                to-red-700
                text-white
                font-semibold
                shadow-lg
                shadow-red-900/20
                transition-all
                duration-300
                hover:from-red-400
                hover:via-red-500
                hover:to-red-600
                hover:shadow-xl
                hover:shadow-red-900/30
                hover:-translate-y-1
                active:translate-y-0
                active:scale-[0.98]
                disabled:opacity-50
                disabled:cursor-not-allowed
                disabled:hover:translate-y-0
              "
            >
              {!loading && (
                <span className="absolute inset-y-0 -left-20 w-16 bg-white/20 skew-x-[-20deg] transition-all duration-700 group-hover:left-[120%]" />
              )}

              {loading ? (
                <span className="relative flex items-center justify-center gap-2">
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Verifying...
                </span>
              ) : (
                <span className="relative flex items-center justify-center gap-2">
                  <span>🔓</span>
                  <span>Access Admin Panel</span>
                </span>
              )}
            </button>
          </form>

          <div className="mt-5 px-3 py-2.5 rounded-xl bg-white/[0.025] border border-white/[0.05]">
            <p className="text-[11px] text-gray-600 text-center leading-relaxed">
              🔒 Admin access is restricted to authorized users.
            </p>
          </div>

          <div className="mt-4 text-center">
            <button
              type="button"
              onClick={onClose}
              disabled={loading}
              className="
                px-4
                py-2
                rounded-lg
                text-gray-500
                hover:text-gray-300
                hover:bg-white/[0.04]
                text-sm
                transition-all
                duration-200
                disabled:opacity-40
              "
            >
              Cancel
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes modalBg {
          from {
            opacity: 0;
          }

          to {
            opacity: 1;
          }
        }

        @keyframes cardEnter {
          from {
            opacity: 0;
            transform: translateY(25px) scale(0.96);
          }

          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes shake {
          0%, 100% {
            transform: translateX(0);
          }

          20% {
            transform: translateX(-5px);
          }

          40% {
            transform: translateX(5px);
          }

          60% {
            transform: translateX(-4px);
          }

          80% {
            transform: translateX(4px);
          }
        }

        @keyframes accentMove {
          0%, 100% {
            opacity: 0.3;
            transform: translateX(-25px);
          }

          50% {
            opacity: 1;
            transform: translateX(25px);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </div>
  );
}

export default AdminModal;
