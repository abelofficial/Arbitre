import styled from "styled-components";
import { TextInput } from "@styles/common";
import { dimensions } from "@styles/theme";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1rem;
`;
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

export const InputButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Input = styled(TextInput)`
  min-width: 4rem;
  :focus {
    padding-left: 1rem;
  }
`;

export const InputLikeContainer = styled.div`
  width: 100%;
  border-radius: ${dimensions.borderRadius};
  padding: 0.5rem 1.7rem 0.5rem 0.5rem;
  border: 0.1rem solid ${({ theme }) => theme.colors.lightGray};
  background-color: ${({ theme }) => theme.colors.white};
  outline: none;
`;

export const Label = styled.label`
  font-weight: thin;
  color: ${({ theme }) => theme.colors.lightGray};
`;
