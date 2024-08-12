const ProfileInfo = (props) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <span>{props.name}</span>
      <span>{props.date}</span>
    </div>
  );
};

export default ProfileInfo;
