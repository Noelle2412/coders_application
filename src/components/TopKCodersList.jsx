import { renderAvatar } from "../../utils/RenderAvatar";
const TopCodersList = [
  {
    id: 101,
    first_name: "Alice",
    last_name: "Johnson",
    avatar_url: "https://i.pravatar.cc/150?img=1",
    score: 350,
  },
  {
    id: 102,
    first_name: "Bob",
    last_name: "Smith",
    avatar_url: "https://i.pravatar.cc/150?img=2",
    score: 320,
  },
  {
    id: 103,
    first_name: "Emily",
    last_name: "Davis",
    avatar_url: "https://i.pravatar.cc/150?img=5",
    score: 290,
  },
  {
    id: 104,
    first_name: "Michael",
    last_name: "Brown",
    avatar_url: "https://i.pravatar.cc/150?img=4",
    score: 270,
  },
];

const TopKCodersList = () => {
  return (
    <div>
      <h2 className="text-2xl"> Top {TopCodersList.length} Coders</h2>
      <div className="flex flex-col gap-4">
        {TopCodersList.map((coder) => {
          return (
            <div
              className="shadow-lg flex flex-row items-center justify-between p-2"
              key={coder.id}>
              <div className="flex flex-row gap-4 items-center">
                {renderAvatar(36, {
                  id: coder.id,
                  avatar: coder.avatar_url,
                  first_name: coder.first_name,
                  last_name: coder.last_name,
                })}
                {coder.first_name} {coder.last_name}
              </div>
              <p className="text-gray-500 right-0">Score: {coder.score}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TopKCodersList;
