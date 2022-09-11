import clsx from "clsx";

export interface Props {
  className?: string;
}

const ThemeSwitch = ({ className }: Props) => {
  return (
    <div className={clsx(className,"flex-1", "", "",)}>
      <span>Theme</span>
    </div>
  );
};

export default ThemeSwitch;
