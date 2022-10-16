import * as S from "./TextArea.styles";

interface TextAreaProps {
  rows?: number;
  placeholder?: string;
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
}

export const TextArea = ({
  rows = 3,
  placeholder,
  value,
  onChange,
}: TextAreaProps) => {
  const handleOnChange = (e: React.FormEvent<HTMLTextAreaElement>) => {
    const target = e.target as HTMLTextAreaElement;
    onChange(target.value);
  };

  return (
    <S.TextArea
      rows={rows}
      placeholder={placeholder}
      value={value}
      onChange={handleOnChange}
    />
  );
};
