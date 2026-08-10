import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function AdminPasswords() {
  const navigate = useNavigate();

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("adminToken");

    if (!token) {
      navigate("/dashboard");
      return;
    }

    fetchPasswords();
  }, []);

  const fetchPasswords = async () => {
    try {
      setError("");

      if (users.length > 0) {
        setRefreshing(true);
      } else {
        setLoading(true);
      }

      const token = localStorage.getItem("adminToken");

      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/admin/passwords`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      if (response.status === 401 || response.status === 403) {
        localStorage.removeItem("adminToken");
        navigate("/dashboard");
        return;
      }

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();

      setUsers(data.data || []);
      setLoading(false);
      setRefreshing(false);
    } catch (error) {
      setError("Error: " + error.message);
      setLoading(false);
      setRefreshing(false);
    }
  };

  const deleteRecord = async (id) => {
    if (!window.confirm("Delete this password record?")) return;

    try {
      const token = localStorage.getItem("adminToken");

      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/admin/password/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      if (response.ok) {
        setUsers(users.filter((user) => user._id !== id));
        alert("Record deleted successfully");
      } else {
        alert("Failed to delete record");
      }
    } catch (error) {
      alert("Error: " + error.message);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/");
  };

  const filteredUsers = users.filter(
    (user) =>
      user.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email?.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  if (loading) {
    return (
      <div className="min-h-screen bg-[#070910] text-white flex items-center justify-center px-4">
        <div className="text-center">
          <div className="relative w-16 h-16 mx-auto mb-5">
            <div className="absolute inset-0 rounded-full border-2 border-red-500/10" />

            <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-red-500 border-r-red-400 animate-spin" />

            <div className="absolute inset-3 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center">
              <span className="text-xl">🔐</span>
            </div>
          </div>

          <h2 className="text-lg font-semibold text-white">
            Loading admin panel
          </h2>

          <p className="text-sm text-gray-500 mt-2">
            Fetching secure records...
          </p>

          <div className="flex items-center justify-center gap-1.5 mt-4">
            <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-bounce" />
            <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-bounce [animation-delay:150ms]" />
            <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-bounce [animation-delay:300ms]" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#070910] text-white px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      <div className="fixed pointer-events-none w-96 h-96 bg-red-500/[0.04] rounded-full blur-[120px] -top-40 -right-40" />

      <div className="fixed pointer-events-none w-80 h-80 bg-purple-500/[0.03] rounded-full blur-[120px] bottom-0 left-0" />

      <div className="relative max-w-7xl mx-auto">
        <div className="mb-7">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
            <div>
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="absolute inset-0 bg-red-500/20 blur-xl rounded-xl" />

                  <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center shadow-lg shadow-red-900/20 border border-red-400/20">
                    <span className="text-xl">🔐</span>
                  </div>
                </div>

                <div>
                  <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
                    Admin Panel
                  </h1>

                  <div className="flex items-center gap-2 mt-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />

                    <p className="text-sm text-gray-500">
                      Secure account management
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => navigate("/chat")}
                className="
                  group
                  px-4
                  py-2.5
                  rounded-xl
                  border
                  border-white/[0.08]
                  bg-white/[0.025]
                  text-gray-400
                  hover:text-white
                  hover:bg-white/[0.06]
                  hover:border-white/[0.14]
                  transition-all
                  duration-300
                "
              >
                <span className="group-hover:-translate-x-0.5 inline-block transition-transform">
                  ←
                </span>{" "}
                Chat
              </button>

              <button
                onClick={handleLogout}
                className="
                  px-4
                  py-2.5
                  rounded-xl
                  border
                  border-red-500/20
                  bg-red-500/[0.06]
                  text-red-400
                  hover:bg-red-500/[0.12]
                  hover:border-red-500/30
                  transition-all
                  duration-300
                "
              >
                Logout
              </button>
            </div>
          </div>

          <div className="mt-6 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
        </div>

        <div className="relative mb-6">
          <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-red-500/10 via-transparent to-purple-500/10" />

          <div className="relative rounded-2xl border border-white/[0.07] bg-[#0e1119]/90 backdrop-blur-xl p-5 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-xl font-semibold text-white">
                    Account Records
                  </h2>

                  <span className="px-2 py-0.5 rounded-md bg-red-500/10 border border-red-500/20 text-[10px] uppercase tracking-wider text-red-400">
                    Admin only
                  </span>
                </div>

                <p className="text-sm text-gray-500 mt-1">
                  Manage registered account records securely.
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs text-gray-600">
                <span className="w-2 h-2 rounded-full bg-emerald-400/70 animate-pulse" />
                Protected session
              </div>
            </div>
          </div>
        </div>

        <div className="mb-6 rounded-2xl bg-gradient-to-r from-red-500/[0.07] to-orange-500/[0.04] border border-red-500/15 p-4 sm:p-5">
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 flex-shrink-0 rounded-xl bg-red-500/10 border border-red-500/15 flex items-center justify-center">
              <span className="text-lg">⚠️</span>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-red-400">
                Sensitive Information
              </h3>

              <p className="text-xs sm:text-sm text-red-300/60 mt-1 leading-relaxed">
                This area is restricted to authorized administrators. Password
                credentials remain protected and are not displayed in plaintext.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-3 mb-6">
          <div className="relative flex-1">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600">
              🔎
            </span>

            <input
              type="text"
              placeholder="Search by name or email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="
                w-full
                h-12
                pl-11
                pr-4
                rounded-xl
                bg-[#0e1119]
                border
                border-white/[0.08]
                text-white
                placeholder-gray-600
                outline-none
                transition-all
                duration-300
                hover:border-white/[0.13]
                focus:border-red-500/40
                focus:ring-4
                focus:ring-red-500/[0.05]
              "
            />
          </div>

          <div className="h-12 px-5 rounded-xl bg-[#0e1119] border border-white/[0.08] flex items-center gap-2">
            <span className="text-gray-500 text-sm">Total</span>

            <span className="min-w-7 h-7 px-2 rounded-lg bg-white/[0.05] border border-white/[0.06] flex items-center justify-center text-white font-semibold text-sm">
              {users.length}
            </span>
          </div>

          <button
            onClick={fetchPasswords}
            disabled={refreshing}
            className="
              group
              h-12
              px-5
              rounded-xl
              bg-red-500/[0.08]
              border
              border-red-500/20
              text-red-400
              hover:bg-red-500/[0.14]
              hover:border-red-500/30
              active:scale-[0.98]
              disabled:opacity-60
              disabled:cursor-not-allowed
              transition-all
              duration-300
              flex
              items-center
              justify-center
              gap-2
            "
          >
            <span
              className={`text-base ${
                refreshing ? "animate-spin" : "group-hover:rotate-180"
              } transition-transform duration-500`}
            >
              ↻
            </span>

            <span>{refreshing ? "Refreshing..." : "Refresh"}</span>
          </button>
        </div>

        {error && (
          <div className="mb-6 p-4 rounded-xl bg-red-500/[0.07] border border-red-500/20 text-red-400 animate-[noticeIn_0.3s_ease-out]">
            <div className="flex items-center gap-3">
              <span className="w-7 h-7 rounded-full bg-red-500/10 flex items-center justify-center">
                !
              </span>

              <span className="text-sm">{error}</span>
            </div>
          </div>
        )}

        {filteredUsers.length === 0 ? (
          <div className="relative overflow-hidden text-center py-20 bg-[#0e1119] rounded-2xl border border-white/[0.06]">
            <div className="absolute w-40 h-40 bg-red-500/[0.04] rounded-full blur-3xl left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />

            <div className="relative">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center">
                <span className="text-2xl">{searchTerm ? "🔎" : "👥"}</span>
              </div>

              <p className="text-gray-400 text-lg mt-5">
                {searchTerm
                  ? "No matching records found"
                  : "No users registered yet"}
              </p>

              <p className="text-gray-600 text-sm mt-2">
                {searchTerm
                  ? "Try adjusting your search"
                  : "Registered accounts will appear here"}
              </p>
            </div>
          </div>
        ) : (
          <div className="relative bg-[#0e1119] rounded-2xl border border-white/[0.06] overflow-hidden shadow-2xl shadow-black/20">
            <div className="px-5 py-4 border-b border-white/[0.06] flex items-center justify-between">
              <div>
                <h3 className="text-sm font-semibold text-gray-200">
                  Registered Users
                </h3>

                <p className="text-xs text-gray-600 mt-0.5">
                  {filteredUsers.length}{" "}
                  {filteredUsers.length === 1 ? "record" : "records"} shown
                </p>
              </div>

              {refreshing && (
                <div className="flex items-center gap-2 text-xs text-red-400">
                  <span className="w-3 h-3 border border-red-400/30 border-t-red-400 rounded-full animate-spin" />
                  Updating
                </div>
              )}
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[#090b12] border-b border-white/[0.05]">
                  <tr>
                    <th className="px-6 py-4 text-left text-[10px] font-semibold text-gray-500 uppercase tracking-[0.15em]">
                      #
                    </th>

                    <th className="px-6 py-4 text-left text-[10px] font-semibold text-gray-500 uppercase tracking-[0.15em]">
                      Name
                    </th>

                    <th className="px-6 py-4 text-left text-[10px] font-semibold text-gray-500 uppercase tracking-[0.15em]">
                      Email
                    </th>

                    <th className="px-6 py-4 text-left text-[10px] font-semibold text-gray-500 uppercase tracking-[0.15em]">
                      Password
                    </th>

                    <th className="px-6 py-4 text-left text-[10px] font-semibold text-gray-500 uppercase tracking-[0.15em]">
                      Registered
                    </th>

                    <th className="px-6 py-4 text-left text-[10px] font-semibold text-gray-500 uppercase tracking-[0.15em]">
                      Action
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-white/[0.045]">
                  {filteredUsers.map((user, index) => (
                    <tr
                      key={user._id}
                      className="
                        group
                        hover:bg-white/[0.025]
                        transition-all
                        duration-200
                      "
                    >
                      <td className="px-6 py-5 text-sm text-gray-600">
                        {String(index + 1).padStart(2, "0")}
                      </td>

                      <td className="px-6 py-5">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/[0.06] flex items-center justify-center text-xs font-semibold text-gray-300">
                            {user.name?.charAt(0)?.toUpperCase() || "U"}
                          </div>

                          <span className="text-sm font-medium text-gray-200">
                            {user.name}
                          </span>
                        </div>
                      </td>

                      <td className="px-6 py-5">
                        <span className="text-sm text-gray-400">
                          {user.email}
                        </span>
                      </td>

                      <td className="px-6 py-5">
                        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.035] border border-white/[0.06] text-gray-500 font-mono text-sm">
                          <span>••••••••</span>
                          <span className="text-[10px] text-gray-700 uppercase tracking-wider">
                            protected
                          </span>
                        </span>
                      </td>

                      <td className="px-6 py-5 text-sm text-gray-500 whitespace-nowrap">
                        {new Date(user.createdAt).toLocaleString()}
                      </td>

                      <td className="px-6 py-5">
                        <button
                          onClick={() => deleteRecord(user._id)}
                          className="
                            px-3.5
                            py-2
                            rounded-lg
                            bg-red-500/[0.06]
                            border
                            border-red-500/15
                            text-red-400
                            hover:bg-red-500/[0.13]
                            hover:border-red-500/25
                            active:scale-95
                            transition-all
                            duration-200
                            text-xs
                            font-medium
                          "
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-gray-700">
          <span>AI Messenger · Admin Console</span>

          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/60" />
            Secure session active
          </span>
        </div>
      </div>

      <style>{`
        @keyframes noticeIn {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
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

export default AdminPasswords;
