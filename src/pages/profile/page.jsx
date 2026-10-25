import SubmissionStrikes from "../../components/SubmissionStrikes";
import CompletedChallenges from "../../components/CompletedChallenges";
import UserProfile from "../../components/UserProfile";

const ProfilePage = () => {
  return (
    <div className="p-6 md:p-10 flex flex-col md:flex-row gap-8 items-start justify-center">
      <UserProfile />
      <div className="flex flex-col gap-4 items-start justify-start">
        <CompletedChallenges />
        <SubmissionStrikes />
      </div>
    </div>
  );
};

export default ProfilePage;
