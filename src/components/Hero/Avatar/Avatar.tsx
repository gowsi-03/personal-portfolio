import clsx from "clsx";
import avatar from "./gowsigan-profile.png";
export interface Props {
  className?: string;
}

const Avatar = ({ className }: Props) => {
  return (
    <div
      className={clsx(className, "mx-auto flex justify-center w-48 lg:w-56")}
    >
      <img alt="Profile avatar" src={avatar} />
    </div>
  );
};

export default Avatar;
