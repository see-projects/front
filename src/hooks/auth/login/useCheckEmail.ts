import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../../constants/routes';

const exists = false;

const useCheckEmail = () => {
  const navigate = useNavigate();
  const [emailExists, setEmailExists] = useState<boolean>(false);

  const checkEmail = (email: string) => {
    //이메일 존재 여부 로직
    if (exists) {
      setEmailExists(true);
    } else {
      navigate(ROUTES.signUp, { state: { email } });
    }
  };

  return { emailExists, checkEmail };
};

export default useCheckEmail;
