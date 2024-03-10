interface IconButtonProps {
  icon: React.ReactNode;
  tooltip: string;
  direction?: 'tooltip-left' | 'tooltip-right' | '';
  action: () => void;
}

export const IconButton = ({
  icon,
  tooltip,
  direction,
  action,
}: IconButtonProps) => {
  return (
    <button
      className={`text-white text-sm font-extrabold rounded-full border-2 p-2 tooltip ${direction}`}
      data-tip={tooltip}
      onClick={action}
    >
      {icon}
    </button>
  );
};
