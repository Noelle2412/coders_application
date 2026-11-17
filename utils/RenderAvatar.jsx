export function renderAvatar(size, user) {
  let avatar = "";
  if (!user.avatar) {
    avatar = (user.firstName[0] + user.lastName[0]).toUpperCase();
  } else {
    avatar = user.avatar;
  }
  if (avatar.length === 2) {
    return (
      <div
        style={{
          width: 2.5 * size + "px",
          height: 2.5 * size + "px",
        }}
        className="rounded-full overflow-hidden flex items-center justify-center"
      >
        <div className="w-full h-full bg-plum flex items-center justify-center">
          <span
            style={{ fontSize: size + "px", marginTop: size / 6 + "px" }}
            className="text-white"
          >
            {avatar}
          </span>
        </div>
      </div>
    );
  } else {
    return (
      <div
        style={{
          width: 2.5 * size + "px",
          height: 2.5 * size + "px",
        }}
        className="rounded-full overflow-hidden flex items-center justify-center"
      >
        <img
          src={avatar}
          alt="Avatar Preview"
          className="w-full h-full object-cover"
        />
      </div>
    );
  }
}
