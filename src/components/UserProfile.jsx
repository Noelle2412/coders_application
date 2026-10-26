import { useState, useRef } from "react";
import { useAuth } from "../hooks/hooks";
import users from "../api/db/users.json";

const UserProfile = () => {
  const { user, signin, renderAvatar } = useAuth();

  // Initialize fields with user data if available
  const [firstName, setFirstName] = useState(user?.firstName || "");
  const [lastName, setLastName] = useState(user?.lastName || "");
  const [email] = useState(user?.email || "");
  const [about, setAbout] = useState(user?.bio || "");
  const [avatar, setAvatar] = useState(user?.avatar || null);
  const [rank] = useState(user?.rank || 1);
  const [successMessage, setSuccessMessage] = useState("");

  const fileInputRef = useRef(null);

  const handleAvatarChange = (event) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const selectedFile = files[0];
      const preview = URL.createObjectURL(selectedFile);
      setAvatar(preview);
    }
  };

  const handleEditClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedUser = {
      ...user,
      firstName,
      lastName,
      email,
      bio: about,
      avatar,
      rank,
    };

    const userIndex = users.findIndex(
      (u) => u.email?.toLowerCase() === email?.toLowerCase(),
    );

    if (userIndex !== -1) {
      users[userIndex] = {
        ...users[userIndex],
        ...updatedUser,
      };
    } else {
      users.push(updatedUser);
    }

    try {
      const storedUsers = JSON.parse(
        localStorage.getItem("registered_users") || "[]",
      );
      const storedIndex = storedUsers.findIndex(
        (u) => u.email?.toLowerCase() === email?.toLowerCase(),
      );

      if (storedIndex !== -1) {
        storedUsers[storedIndex] = {
          ...storedUsers[storedIndex],
          ...updatedUser,
        };
      } else {
        storedUsers.push(updatedUser);
      }
      localStorage.setItem("registered_users", JSON.stringify(storedUsers));
    } catch (err) {
      console.error("Failed to update localStorage:", err);
    }

    signin(updatedUser);

    setSuccessMessage("Profile updated successfully!");
    setTimeout(() => {
      setSuccessMessage("");
    }, 3000);
  };

  return (
    <div className="rounded-xl w-full">
      {/* Top Header: Avatar + Edit Icon & Rank */}
      <div className="flex items-start justify-between">
        <div className="relative inline-block">
          {/* Avatar Preview Circle */}
          {renderAvatar(48)}

          {/* Edit Icon triggering file explorer */}
          <button
            type="button"
            onClick={handleEditClick}
            aria-label="Upload Avatar"
            className="absolute bottom-1 right-1 bg-white dark:bg-gray-700 p-1.5 rounded-full shadow-md border hover:bg-gray-100 dark:hover:bg-gray-600 transition cursor-pointer">
            <svg
              className="w-4 h-4 text-gray-700 dark:text-gray-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
              />
            </svg>
          </button>

          {/* Hidden File Input */}
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleAvatarChange}
            accept="image/*"
            className="hidden"
          />
        </div>

        {/* Coder Rank Display */}
        <div className="text-2xl font-medium pt-8">Rank: {rank}</div>
      </div>

      {/* User Name Display */}
      <h2 className="text-2xl font-semibold mt-4 mb-4">
        {firstName} {lastName}
      </h2>

      {/* Profile Form */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
        {/* First Name Input */}
        <div>
          <label className="block text-sm font-medium mb-1">First Name</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full px-3.5 py-2.5 bg-navbar rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#8053FF] resize-y"
          />
        </div>

        {/* Last Name Input */}
        <div>
          <label className="block text-sm font-medium mb-1">Last Name</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-full px-3.5 py-2.5 bg-navbar rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#8053FF] resize-y"
          />
        </div>

        {/* Read-Only Email Input */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Email Address
          </label>
          <input
            type="email"
            value={email}
            readOnly
            placeholder="email@domain.com"
            className="w-full px-3.5 py-2.5 bg-navbar rounded-lg text-gray-500 cursor-not-allowed focus:outline-none"
          />
        </div>

        {/* Tell us more about you / About Textarea */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Tell us more about you
          </label>
          <textarea
            value={about}
            onChange={(e) => setAbout(e.target.value)}
            placeholder="About"
            rows={4}
            className="w-full px-3.5 py-2.5 bg-navbar rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#8053FF] resize-y"
          />
        </div>

        {/* Update Button and Feedback */}
        <div className="flex items-center justify-between pt-2">
          {successMessage && (
            <span className="text-sm text-green-600 font-medium">
              {successMessage}
            </span>
          )}
          <button
            type="submit"
            className="ml-auto bg-[#3B82F7] hover:bg-blue-600 text-white font-medium px-6 py-2.5 rounded-lg transition cursor-pointer text-sm shadow-sm">
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserProfile;
