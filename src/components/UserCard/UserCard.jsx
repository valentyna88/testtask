import { formatPhone } from "../../utils/formatPhone";

const UserCard = ({ user }) => {
  const { photo, name, position, email, phone } = user;
  return (
    <>
      <div className="users-wrapper">
        <img
          src={photo}
          alt={name}
          className="users-photo"
          width={70}
          height={70}
        />

        <p className="users-text ellipsis-1" title={name}>
          {name}
        </p>
        <div>
          <p className="users-text ellipsis-1" title={position}>
            {position}
          </p>
          <p className="users-text ellipsis-1" title={email}>
            {email}
          </p>
          <p className="users-text">{formatPhone(phone)}</p>
        </div>
      </div>
    </>
  );
};
export default UserCard;
