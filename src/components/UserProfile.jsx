import { useState, useRef } from "react";
import { useAuth } from "../hooks/hooks";

const UserProfile = () => {
  const { user } = useAuth();

  // Initialize fields with user data if available, or default values as shown in mock
  const [firstName, setFirstName] = useState(user?.firstName || "Aischa");
  const [lastName, setLastName] = useState(user?.lastName || "Amrhein");
  const [email] = useState(user?.email || "afsjdk");
  const [about, setAbout] = useState(user?.bio || "adffafd");
  const [avatar, setAvatar] = useState(user?.avatar || null);
  const [rank] = useState(user?.rank || 12);

  const fileInputRef = useRef(null);

  // File change handler accessing first file from event.target.files and creating preview URL
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
    console.log("Updated Profile:", {
      firstName,
      lastName,
      email,
      about,
      avatarUrl,
    });
  };

  return (
    <div className="rounded-xl max-w-2xl w-full">
      {/* Top Header: Avatar + Edit Icon & Rank */}
      <div className="flex items-start justify-between">
        <div className="relative inline-block">
          {/* Avatar Preview Circle */}
          <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-app overflow-hidden flex items-center justify-center">
            {avatar ? (
              <img
                src={avatar}
                alt="Avatar Preview"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-navbar" />
            )}
          </div>

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
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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

        {/* Update Button */}
        <div className="flex justify-end pt-2">
          <button
            type="submit"
            className="bg-[#3B82F6] hover:bg-blue-600 text-white font-medium px-6 py-2.5 rounded-lg transition cursor-pointer text-sm shadow-sm">
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserProfile;
