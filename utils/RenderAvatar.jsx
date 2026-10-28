export function renderAvatar(size, user) {
  if (!user.avatar) {
    user.avatar = (user.firstName[0] + user.lastName[0]).toUpperCase();
  } else if (user.avatar.length === 2) {
    return (
      <div
        style={{
          width: 2.5 * size + "px",
          height: 2.5 * size + "px",
        }}
        className="rounded-full overflow-hidden flex items-center justify-center">
        <div className="w-full h-full bg-plum flex items-center justify-center">
          <span
            style={{ fontSize: size + "px", marginTop: size / 6 + "px" }}
            className="text-white">
            {user.avatar}
          </span>
        </div>
      </div>
    );
  } else {
    return (
      <div
        style={{ width: size, height: size }}
        className="rounded-full overflow-hidden flex items-center justify-center">
        <img
          src={user.avatar}
          alt="Avatar Preview"
          className="w-full h-full object-cover"
        />
      </div>
    );
  }
}
