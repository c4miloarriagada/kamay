interface Props {
  onClick: () => void;
  label: string;
  disabled: boolean;
}

export const Button = ({ onClick, label, disabled }: Props) => {
  return (
    <button
      className=' rounded-lg bg-sky-500 p-3 text-white'
      aria-disabled={disabled}
      disabled={disabled}
      aria-label={label}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
