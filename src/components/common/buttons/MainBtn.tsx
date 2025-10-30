import { useTranslation } from "react-i18next";
import React, { PropsWithChildren } from "react";
import { cv } from "css-variants";
import { twMerge } from "tailwind-merge";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const themes = {
  main: "bg-orangeColor text-black",
  secondary: "bg-black text-white",
  outline: "border border-gray-300 text-gray-700 hover:bg-gray-50",
  danger: "bg-red-600 text-white hover:bg-red-700",
};

const buttonVariants = cv({
  base: "px-2 py-2 rounded disabled:cursor-not-allowed font-bold transition-all duration-200",
  variants: {
    theme: {
      ...themes,
    },
    disabled: {
      true: "opacity-50 cursor-not-allowed",
      false: "hover:opacity-90 active:scale-95",
    },
  },
  defaultVariants: {
    theme: "main",
    disabled: false,
  },
});

interface MainBtnProps {
  text?: string;
  onClick?: (
    e: React.MouseEvent<HTMLButtonElement>,
    ...args: any[]
  ) => Promise<string | void> | string | void;
  type?: "button" | "submit" | "reset";
  isPending?: boolean;
  disabled?: boolean;
  bg?: string;
  className?: string;
  theme?: keyof typeof themes;
}

const MainBtn: React.FC<PropsWithChildren<MainBtnProps>> = ({
  text,
  onClick,
  type = "button",
  isPending = false,
  disabled = false,
  className,
  children,
  theme,
}) => {
  const { t } = useTranslation();
  const isDisabled = isPending || disabled;

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick && !isDisabled) {
      onClick(e);
    }
  };

  return (
    <button
      disabled={isDisabled}
      type={type}
      onClick={handleClick}
      aria-busy={isPending}
      aria-label={isPending ? t("Submitting, please wait") : t(text || "")}
      className={`${twMerge(buttonVariants({ theme, disabled: isDisabled, className }))}`}
    >
      {isPending ? (
        <div className="h-full w-full flex justify-center items-center">
          <AiOutlineLoading3Quarters
            className="animate-spin"
            size={20}
            aria-hidden="true"
          />
        </div>
      ) : (
        children || t(text || "")
      )}
    </button>
  );
};

export default React.memo(MainBtn);
