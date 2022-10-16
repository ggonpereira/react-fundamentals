import * as S from "./TextArea.styles";

interface TextAreaProps {
  rows?: number;
}

export const TextArea = ({ rows = 3 }: TextAreaProps) => (
  <S.TextArea rows={rows} />
);
