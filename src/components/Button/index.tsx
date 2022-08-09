import * as S from './styles';

type ButtonProps = {
  disabled?: boolean;
  label: string;
};

export const Button = ({ label, disabled = false }: ButtonProps) => {
  return <S.StyledButton disabled={disabled}>{label}</S.StyledButton>;
};
