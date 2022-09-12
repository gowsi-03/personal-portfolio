import { useEffect, useCallback } from "react";
import clsx from "clsx";
import { useTranslation } from "react-i18next";

export interface Props {
  className?: string;
}

const LangSwitch = ({ className }: Props) => {
  const { t, i18n } = useTranslation();

  const changeLanguage = useCallback(
    (uiLanguage: string) => {
      localStorage.setItem("uiLanguage", uiLanguage);
      i18n.changeLanguage(uiLanguage);
    },
    [i18n]
  );

  useEffect(() => {
    const uiLanguage = localStorage.getItem("uiLanguage") ?? "en";
    changeLanguage(uiLanguage);
  }, [changeLanguage]);

  const btnClassName = (uiLanguage: string) =>
    clsx("px-4 py-1 rounded", {
      "outline outline-2": uiLanguage === i18n.language,
    });

  return (
    <div className={clsx(className, 'flex items-center')}>
    <div className={clsx('flex md:gap-2')}>
      <button
        onClick={() => changeLanguage('en')}
        className={btnClassName('en')}
      >
        {t('LangSwitch.english')}
      </button>
      <button
        onClick={() => changeLanguage('ta')}
        className={btnClassName('ta')}
      >
        {t('LangSwitch.tamil')}
      </button>
    </div>
  </div>
  );
};

export default LangSwitch;
