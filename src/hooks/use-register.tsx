import {validateEmail} from '~/helpers';
import {useState} from 'react';
import {navigate} from '~/routes/AppStackNavigator.tsx';

export const useRegister = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [messageError, setMessageError] = useState({
    email: '',
    password: '',
    firstName,
    lastName,
  });
  const onValidate = () => {
    const newMessageError = {...messageError};

    if (!firstName) {
      newMessageError.firstName = 'First Name không được để trống';
    } else {
      newMessageError.firstName = '';
    }
    if (!lastName) {
      newMessageError.lastName = 'Last Name không được để trống';
    } else {
      newMessageError.lastName = '';
    }

    if (!email) {
      newMessageError.email = 'Email không được để trống';
    } else if (!validateEmail(email)) {
      newMessageError.email = 'Email không đúng định dạng';
    } else {
      newMessageError.email = '';
    }
    if (!password) {
      newMessageError.password = 'Password không được để trống';
    } else {
      newMessageError.password = '';
    }
    if (
      newMessageError.email ||
      newMessageError.firstName ||
      newMessageError.lastName ||
      newMessageError.password
    ) {
      setMessageError({
        ...newMessageError,
      });
      return true;
    }

    setMessageError({
      email: '',
      password: '',
      firstName: '',
      lastName: '',
    });
    return false;
  };

  const handleRegister = () => {
    navigate('HomeScreen');
    const isValidated = onValidate();
    if (isValidated) {
      return;
    }
    console.log({
      email,
      password,
    });
  };

  return {
    setFirstName,
    setLastName,
    setEmail,
    setPassword,
    messageError,
    handleRegister,
  };
};
