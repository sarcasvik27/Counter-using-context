import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Button from '../Components/Button';
import Header from '../Components/Header';
import InputBox from '../Components/InputBox';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Signup = ({navigation}) => {
  const [name, setName] = useState('');
  const [surname, setSurName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailerror, setEmailError] = useState('');
  const [passworderror, setpasswordError] = useState('');
  const [nameError, setnameerror] = useState('');
  const [surnameerror, setsurnameerror] = useState('');

  const emailregex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let regpswrd =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

    const userData={
      name:name,
      surname:surname,
      email:email,
      password:password
    }

  const validation = () => {
    if (
      Emailvalidation(email) &&
      Passwordvalidation(password) &&
      namevalidation(name) &&
      surnameValidation(surname)
    ) {
      navigation.navigate('Home');
      storeData()
    }
  };


  const storeData = async () => {
    let arr = await AsyncStorage.getItem('ARRAY');
    arr = JSON.parse(arr);
    if (arr != null) {
      arr.push(userObject);
      await AsyncStorage.setItem('ARRAY', JSON.stringify(arr));
      console.log('hello satvik',arr);
    }
    else{
      await AsyncStorage.setItem('ARRAY', JSON.stringify([])); 
    }
  };

  const Emailvalidation = email => {
    if (email == '') {
      setEmailError('This Field is necessary');
    } else if (emailregex.test(email)) {
      return true;
    } else {
      setEmailError('Invalid email id');
    }
  };
  const Passwordvalidation = password => {
    if (password == '') {
      setpasswordError('This Field is necessary');
    } else if (regpswrd.test(password)) {
      return true;
    } else {
      setpasswordError(
        'Password must contain minimum eight characters, at least one letter, one number and one special character',
      );
    }
  };
  const namevalidation = name => {
    if (name == '') {
      setnameerror("name can't be empty");
    } else {
      return true;
    }
  };
  const surnameValidation = surname => {
    if (surname == '') {
      setsurnameerror("last name can't be empty");
    } else {
      return true;
    }
  };

  return (
    <>
      <Header screen={'Signup'}></Header>
      <View style={styles.OuterView}>
        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 30}}>
          Sign up
        </Text>
        <InputBox
          data={[name, setName]}
          placeholder={'Name'}
          error={[nameError, setnameerror]}></InputBox>
        <Text style={styles.text}>{nameError}</Text>
        <InputBox
          data={[surname, setSurName]}
          placeholder={'Last Name'}
          error={[surnameerror, setsurnameerror]}></InputBox>
        <Text style={styles.text}>{surnameerror}</Text>
        <InputBox
          data={[email, setEmail]}
          placeholder={'Email'}
          error={[emailerror, setEmailError]}></InputBox>
        <Text style={styles.text}>{emailerror}</Text>
        <InputBox
          data={[password, setPassword]}
          placeholder={'Password'}
          secure={true}
          error={[passworderror, setpasswordError]}></InputBox>
        <Text style={styles.text}>{passworderror}</Text>

        <Button title={'Submit'} functionality={() => validation()}></Button>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  OuterView: {
    backgroundColor: 'black',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'red',
    width: '90%',
  },
});
export default Signup;
