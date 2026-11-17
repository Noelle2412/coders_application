import SubmissionStrikes from "../../components/SubmissionStrikes";
import CompletedChallenges from "../../components/CompletedChallenges";
import UserProfile from "../../components/UserProfile";

const ProfilePage = () => {
  return (
    <div className="p-6 md:p-10 flex flex-col items-stretch lg:flex-row lg:items-start justify-center gap-8 ">
      <UserProfile />
      <div className="flex flex-col gap-4 items-stretch">
        <CompletedChallenges />
        <SubmissionStrikes />
      </div>
    </div>
  );
};

export default ProfilePage;
