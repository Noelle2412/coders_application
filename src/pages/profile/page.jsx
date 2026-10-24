import UserProfile from "../../components/UserProfile";

const ProfilePage = () => {
  return (
    <div className="p-6 md:p-10 flex flex-col md:flex-row gap-8 items-start justify-center">
      <UserProfile />
    </div>
  );
};

export default ProfilePage;
