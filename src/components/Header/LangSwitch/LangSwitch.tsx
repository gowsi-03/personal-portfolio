import clsx from "clsx";

export interface Props {
  className?: string;
}

const LangSwitch = ({ className }: Props) => {
  return (
    <div className={clsx(className)}>
      <span>Lang</span>
    </div>
  );
};

export default LangSwitch;
