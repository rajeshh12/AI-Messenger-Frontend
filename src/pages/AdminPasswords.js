import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function AdminPasswords() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
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
    } catch (error) {
      setError("Error: " + error.message);
      setLoading(false);
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
      <div className="min-h-screen bg-[#08090f] text-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-red-500/30 border-t-red-500 rounded-full animate-spin mx-auto mb-4" />
          <p className="text-gray-400">Loading passwords...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#08090f] text-white p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
              🔐 Original Passwords
            </h1>
            <p className="text-gray-400 mt-1">Admin only</p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => navigate("/chat")}
              className="px-4 py-2 rounded-lg border border-white/10 hover:bg-white/5 transition-all"
            >
              ← Chat
            </button>
            <button
              onClick={handleLogout}
              className="px-4 py-2 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 hover:bg-red-500/20 transition-all"
            >
              Logout
            </button>
          </div>
        </div>

        <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20">
          <div className="flex items-start gap-3">
            <span className="text-2xl">⚠️</span>
            <div>
              <h3 className="text-red-400 font-semibold">
                Sensitive Information
              </h3>
              <p className="text-red-300/70 text-sm">
                This page displays original passwords in plain text.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 mb-6">
          <div className="flex-1 min-w-[200px]">
            <input
              type="text"
              placeholder="Search by name or email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-[#11131c] border border-white/10 text-white placeholder-gray-500 focus:border-red-500/50 focus:ring-2 focus:ring-red-500/20 outline-none transition-all"
            />
          </div>
          <div className="px-4 py-2.5 rounded-xl bg-[#11131c] border border-white/10">
            <span className="text-gray-400">Total: </span>
            <span className="text-white font-semibold">{users.length}</span>
          </div>
          <button
            onClick={fetchPasswords}
            className="px-4 py-2.5 rounded-xl bg-red-500/20 border border-red-500/30 text-red-400 hover:bg-red-500/30 transition-all"
          >
            🔄 Refresh
          </button>
        </div>

        {error && (
          <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400">
            {error}
          </div>
        )}

        {filteredUsers.length === 0 ? (
          <div className="text-center py-20 bg-[#11131c] rounded-2xl border border-white/5">
            <p className="text-gray-500 text-lg">
              {searchTerm
                ? "No matching records found"
                : "No users registered yet"}
            </p>
            <p className="text-gray-600 text-sm mt-2">
              {searchTerm
                ? "Try adjusting your search"
                : "Passwords will appear here when users register"}
            </p>
          </div>
        ) : (
          <div className="bg-[#11131c] rounded-2xl border border-white/5 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[#090b12] border-b border-white/5">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                      #
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                      Email
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                      Original Password
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                      Registered
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {filteredUsers.map((user, index) => (
                    <tr
                      key={user._id}
                      className="hover:bg-white/5 transition-colors"
                    >
                      <td className="px-6 py-4 text-sm text-gray-500">
                        {index + 1}
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-white">
                        {user.name}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-300">
                        {user.email}
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-block px-3 py-1.5 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 font-mono text-sm font-bold">
                          {user.originalPassword}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-400">
                        {new Date(user.createdAt).toLocaleString()}
                      </td>
                      <td className="px-6 py-4">
                        <button
                          onClick={() => deleteRecord(user._id)}
                          className="px-3 py-1.5 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 hover:bg-red-500/20 transition-all text-sm"
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
      </div>
    </div>
  );
}

export default AdminPasswords;
