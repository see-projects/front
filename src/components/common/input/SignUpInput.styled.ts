import styled from 'styled-components';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
export const Container = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 30px;
  background-color: #ffffff;
  padding: 0.5rem 0.7rem;
`;

export const SignUpInputText = styled.input`
  width: 100%;
  border: none;
  outline: none;

  &:focus {
    outline: none;
    box-shadow: none;
  }
`;

export const ToggleButton = styled.button`
  position: absolute;
  top: 50%;
  right: 12px;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  font-size: 0.9rem;
  color: #666;
`;

export const Eye = styled(EyeIcon)`
  width: 1.25rem;
  height: 1.25rem;
  color: #666;
`;

export const EyeSlash = styled(EyeSlashIcon)`
  width: 1.25rem;
  height: 1.25rem;
  color: #666;
`;
