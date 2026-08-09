import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      <div className="absolute inset-0 pointer-events-none opacity-[0.025] bg-[linear-gradient(rgba(120,140,180,1)_1px,transparent_1px),linear-gradient(90deg,rgba(120,140,180,1)_1px,transparent_1px)] bg-[size:48px_48px]" />

      <div className="absolute top-[-220px] left-[10%] w-[420px] h-[420px] rounded-full bg-blue-600/[0.08] blur-[130px] animate-[orbOne_8s_ease-in-out_infinite]" />

      <div className="absolute bottom-[-220px] right-[8%] w-[430px] h-[430px] rounded-full bg-purple-600/[0.08] blur-[140px] animate-[orbTwo_9s_ease-in-out_infinite]" />

      <nav className="relative z-20 h-[76px] sm:h-20 flex items-center justify-between max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 border-b border-white/[0.05]">
        <Link
          to="/"
          className="group flex items-center gap-3 animate-[fadeDown_0.6s_ease-out]"
        >
          <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-900/20 group-hover:scale-105 group-hover:rotate-2 transition-all duration-300">
            <span className="text-sm font-bold">AI</span>
          </div>

          <div className="hidden sm:block">
            <p className="font-semibold text-[15px] text-gray-100">
              AI Messenger
            </p>

            <p className="text-[10px] text-gray-600">Talk. Ask. Create.</p>
          </div>
        </Link>

        <div className="flex items-center gap-2 sm:gap-3 animate-[fadeDown_0.6s_ease-out_0.1s_both]">
          <Link
            to="/login"
            className="px-4 sm:px-5 py-2.5 rounded-xl text-sm font-medium text-gray-400 border border-white/[0.07] bg-white/[0.025] hover:text-white hover:bg-white/[0.06] hover:border-white/[0.13] hover:-translate-y-0.5 transition-all duration-300"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="group relative overflow-hidden px-4 sm:px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-sm font-semibold shadow-lg shadow-blue-900/20 hover:shadow-purple-900/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
          >
            <span className="absolute inset-y-0 -left-12 w-10 bg-white/20 skew-x-[-20deg] group-hover:left-[120%] transition-all duration-700" />

            <span className="relative">Get Started</span>
          </Link>
        </div>
      </nav>

      <main className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <section className="min-h-[calc(100vh-76px)] sm:min-h-[calc(100vh-80px)] grid lg:grid-cols-[1.05fr_0.95fr] gap-12 xl:gap-20 items-center py-12 sm:py-16 lg:py-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-full bg-blue-500/[0.06] border border-blue-400/[0.12] mb-7 animate-[fadeUp_0.7s_ease-out] hover:bg-blue-500/[0.1] hover:border-blue-400/[0.2] transition-all duration-300">
              <span className="relative flex w-2 h-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-60 animate-ping" />

                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-400" />
              </span>

              <span className="text-xs sm:text-sm text-blue-300">
                Your conversations, your way
              </span>
            </div>

            <h1 className="text-[34px] sm:text-5xl md:text-6xl lg:text-[64px] xl:text-[72px] font-mono tracking-[-0.045em] leading-[1.02] animate-[heroText_0.8s_ease-out_0.1s_both]">
              <span className="text-white">A smarter way</span>
              <br />
              <span className="text-red-300">to</span>{" "}
              <span className=" text-red-300 ">chat.</span>
            </h1>

            <p className="mt-7 text-base sm:text-lg lg:text-xl text-gray-400 leading-relaxed max-w-xl animate-[fadeUp_0.8s_ease-out_0.25s_both]">
              Ask questions, explore ideas, manage conversations and interact
              with AI — all from one simple messenger.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 animate-[fadeUp_0.8s_ease-out_0.4s_both]">
              <Link
                to="/register"
                className="group relative overflow-hidden inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 font-semibold shadow-xl shadow-blue-950/20 hover:shadow-purple-950/30 hover:-translate-y-1 active:translate-y-0 transition-all duration-300"
              >
                <span className="absolute inset-y-0 -left-16 w-14 bg-white/20 skew-x-[-20deg] group-hover:left-[120%] transition-all duration-700" />

                <span className="relative">Start Chatting</span>

                <span className="relative text-lg transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>

              <Link
                to="/login"
                className="group inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 rounded-xl border border-white/[0.09] bg-white/[0.025] text-gray-300 font-semibold hover:text-white hover:bg-white/[0.06] hover:border-white/[0.16] hover:-translate-y-1 transition-all duration-300"
              >
                <span>Login</span>

                <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  →
                </span>
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-5 sm:gap-7 mt-9 animate-[fadeUp_0.8s_ease-out_0.55s_both]">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-sm shadow-emerald-400/50" />

                <span className="text-xs sm:text-sm text-gray-500">
                  Ready to use
                </span>
              </div>

              <div className="w-px h-4 bg-white/[0.08]" />

              <div className="flex items-center gap-2">
                <span className="text-xs sm:text-sm text-gray-500">
                  Simple interface
                </span>
              </div>

              <div className="w-px h-4 bg-white/[0.08] hidden sm:block" />

              <div className="flex items-center gap-2">
                <span className="text-xs sm:text-sm text-gray-500">
                  Built for conversations
                </span>
              </div>
            </div>
          </div>

          <div className="relative w-full max-w-[520px] mx-auto lg:ml-auto animate-[previewEnter_1s_cubic-bezier(.22,1,.36,1)_0.25s_both]">
            <div className="absolute -inset-10 bg-gradient-to-r from-blue-500/[0.07] via-purple-500/[0.08] to-cyan-500/[0.05] blur-3xl rounded-full" />

            <div className="relative">
              <div className="absolute -top-4 left-8 right-8 h-8 rounded-t-2xl bg-[#161c28] border border-white/[0.07] border-b-0 flex items-center px-4 gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400/50" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/50" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-400/50" />

                <span className="ml-3 text-[10px] text-gray-600">
                  AI Messenger
                </span>
              </div>

              <div className="mt-4 rounded-[22px] bg-[#10151f] border border-white/[0.08] shadow-2xl shadow-black/50 overflow-hidden hover:border-white/[0.13] hover:-translate-y-1 transition-all duration-500">
                <div className="px-5 sm:px-6 py-4 border-b border-white/[0.06] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                      <span className="text-[10px] font-bold">AI</span>
                    </div>

                    <div>
                      <p className="text-sm font-medium text-gray-200">
                        AI Assistant
                      </p>

                      <div className="flex items-center gap-1.5 mt-0.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />

                        <span className="text-[10px] text-gray-600">
                          Online
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="text-gray-600 text-lg">···</div>
                </div>

                <div className="p-5 sm:p-7 min-h-[360px]">
                  <div className="flex items-start gap-3 animate-[chatOne_5s_ease-in-out_infinite]">
                    <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-400/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-[9px] font-bold text-blue-300">
                        AI
                      </span>
                    </div>

                    <div className="max-w-[75%] rounded-2xl rounded-tl-sm bg-[#171e2b] border border-white/[0.06] px-4 py-3">
                      <p className="text-sm text-gray-300 leading-relaxed">
                        Hey! What would you like to explore today?
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-end mt-5 animate-[chatTwo_5s_ease-in-out_infinite]">
                    <div className="max-w-[75%] rounded-2xl rounded-tr-sm bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-400/[0.1] px-4 py-3">
                      <p className="text-sm text-gray-300">
                        Help me plan my day.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 mt-5 animate-[chatThree_5s_ease-in-out_infinite]">
                    <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-400/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-[9px] font-bold text-blue-300">
                        AI
                      </span>
                    </div>

                    <div className="rounded-2xl rounded-tl-sm bg-[#171e2b] border border-white/[0.06] px-4 py-3">
                      <div className="flex gap-1.5 items-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-500 animate-bounce" />

                        <span className="w-1.5 h-1.5 rounded-full bg-gray-500 animate-bounce [animation-delay:150ms]" />

                        <span className="w-1.5 h-1.5 rounded-full bg-gray-500 animate-bounce [animation-delay:300ms]" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="px-5 sm:px-6 py-4 border-t border-white/[0.06]">
                  <div className="flex items-center gap-3">
                    <div className="flex-1 h-11 rounded-xl bg-[#090d15] border border-white/[0.07] flex items-center px-4">
                      <span className="text-sm text-gray-600">
                        Message AI...
                      </span>
                    </div>

                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-900/20">
                      <span className="text-lg">↑</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-16 sm:pb-20">
          <div className="text-center mb-9">
            <p className="text-xs uppercase tracking-[0.2em] text-gray-600">
              Everything in one place
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            <div className="group rounded-2xl bg-white/[0.025] border border-white/[0.06] p-5 hover:bg-white/[0.045] hover:border-blue-400/[0.15] hover:-translate-y-1 transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-400/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <span className="text-blue-400 text-lg">✦</span>
              </div>

              <h3 className="font-semibold text-gray-200">Ask anything</h3>

              <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                Explore ideas, solve problems and get useful answers.
              </p>
            </div>

            <div className="group rounded-2xl bg-white/[0.025] border border-white/[0.06] p-5 hover:bg-white/[0.045] hover:border-purple-400/[0.15] hover:-translate-y-1 transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-400/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300">
                <span className="text-purple-400 text-lg">◈</span>
              </div>

              <h3 className="font-semibold text-gray-200">
                Keep conversations
              </h3>

              <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                Keep your conversations together and easy to access.
              </p>
            </div>

            <div className="group rounded-2xl bg-white/[0.025] border border-white/[0.06] p-5 hover:bg-white/[0.045] hover:border-cyan-400/[0.15] hover:-translate-y-1 transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-400/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <span className="text-cyan-400 text-lg">↗</span>
              </div>

              <h3 className="font-semibold text-gray-200">Stay focused</h3>

              <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                A clean interface designed to keep the conversation flowing.
              </p>
            </div>
          </div>
        </section>
      </main>

      <style>
        {`
          @keyframes fadeDown {
            from {
              opacity: 0;
              transform: translateY(-15px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes fadeUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes heroText {
            from {
              opacity: 0;
              transform: translateY(30px) scale(0.98);
            }
            to {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }

          @keyframes previewEnter {
            from {
              opacity: 0;
              transform: translateX(35px) translateY(15px) scale(0.97);
            }
            to {
              opacity: 1;
              transform: translateX(0) translateY(0) scale(1);
            }
          }

          @keyframes orbOne {
            0%, 100% {
              transform: translate(0, 0);
            }
            50% {
              transform: translate(40px, 30px);
            }
          }

          @keyframes orbTwo {
            0%, 100% {
              transform: translate(0, 0);
            }
            50% {
              transform: translate(-35px, -25px);
            }
          }

          @keyframes chatOne {
            0%, 15% {
              opacity: 0.5;
              transform: translateY(5px);
            }
            25%, 75% {
              opacity: 1;
              transform: translateY(0);
            }
            85%, 100% {
              opacity: 0.5;
              transform: translateY(5px);
            }
          }

          @keyframes chatTwo {
            0%, 25% {
              opacity: 0.4;
              transform: translateY(6px);
            }
            35%, 70% {
              opacity: 1;
              transform: translateY(0);
            }
            80%, 100% {
              opacity: 0.4;
              transform: translateY(6px);
            }
          }

          @keyframes chatThree {
            0%, 35% {
              opacity: 0.3;
              transform: translateY(6px);
            }
            45%, 70% {
              opacity: 1;
              transform: translateY(0);
            }
            80%, 100% {
              opacity: 0.3;
              transform: translateY(6px);
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
        `}
      </style>
    </div>
  );
}

export default Home;
