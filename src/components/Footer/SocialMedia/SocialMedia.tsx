import clsx from "clsx";

export interface Props {
  className?: string;
}

const SocialMedia = ({ className }: Props) => {
  return (
    <div className={clsx(className)}>
      <span>SocialMedia</span>
    </div>
  );
};

export default SocialMedia;
