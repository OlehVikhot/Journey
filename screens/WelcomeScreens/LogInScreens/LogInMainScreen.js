import { useState } from "react";
import { useDispatch } from "react-redux";
import { Alert, StyleSheet, View } from "react-native";
import { authenticate, register } from "../../../store/authSlice";
import {
  Input,
  PrimaryButton,
  SecondaryButton,
  TextButton,
  TextInter,
} from "../../../components";
import { loginUser, createUser } from "../../../util/authentification";

export default function LogInMainScreen({ navigation }) {
  const dispatch = useDispatch();

  const [logIn, setLogIn] = useState(true);

  const [credentialsInvalid, setCredentialsInvalid] = useState({
    email: false,
    password: false,
  });

  const [nameText, setNameText] = useState("");
  const [emailText, setEmailText] = useState("");
  const [passwordText, setPasswordText] = useState("");

  function emailHandler(text) {
    setEmailText(text);
  }
  function passwordHandler(text) {
    setPasswordText(text);
  }
  function nameHandler(text) {
    setNameText(text);
  }

  async function loginHandler() {
    let email = emailText.trim();
    let password = passwordText.trim();

    const emailIsValid = email.includes("@");
    const passwordIsValid = password.length > 6;

    if (!passwordIsValid || !emailIsValid) {
      Alert.alert("Invalid input", "Please check your entered credentials.");
      setCredentialsInvalid({
        email: !emailIsValid,
        password: !passwordIsValid,
      });
      return;
    }

    try {
      if (logIn) {
        const token = await loginUser(email, password);
        dispatch(authenticate(token));
        navigation.navigate("Tabs");
      }
      if (!logIn) {
        const token = await createUser(email, password);
        dispatch(register({ key: token, name: nameText }));
        navigation.navigate("Tabs");
      }
    } catch (error) {
      logIn && Alert.alert("Autherntication failed", "Check email password");
      !logIn && Alert.alert("Registartion failed", "Check email password");
      setCredentialsInvalid({
        email: !emailIsValid,
        password: !passwordIsValid,
      });
    }
  }

  function changeLoginHandler() {
    setLogIn(!logIn);
  }

  function succseccAuth() {
    navigation.navigate("Tabs");
  }

  return (
    <View style={styles.mainContainer}>
      <View>
        <TextInter style={styles.header}>
          {logIn ? "Log In" : "Sign Up"}
        </TextInter>
        <View>
          {!logIn && (
            <Input label={"Name"} placeholder={"Alex"} getText={nameHandler} />
          )}
          <Input
            label={"Email"}
            placeholder={"alex@mail.com"}
            getText={emailHandler}
            error={credentialsInvalid.email}
          />
          <Input
            label={"Password"}
            placeholder={"**********"}
            secure={true}
            getText={passwordHandler}
            error={credentialsInvalid.password}
          />
        </View>
        <View style={styles.loginButtoContainer}>
          <PrimaryButton
            text={logIn ? "Log In" : "Sign up"}
            onPress={loginHandler}
          />
        </View>
      </View>
      <View>
        <View style={styles.orContainer}>
          <TextInter style={styles.orText}>OR</TextInter>
        </View>
        <SecondaryButton
          icon={"apple1"}
          text={"Continue with Apple"}
          onPress={succseccAuth}
        />
        <SecondaryButton icon={"google"} text={"Continue with Google"} />
        {logIn ? (
          <View style={styles.noAccountContainer}>
            <TextInter style={styles.noAccountText}>No account?</TextInter>
            <TextButton text={"Sing Up"} onPress={changeLoginHandler} />
          </View>
        ) : (
          <View style={styles.noAccountContainer}>
            <TextInter style={styles.noAccountText}>
              Already have account?
            </TextInter>
            <TextButton text={"Log In"} onPress={changeLoginHandler} />
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 108,
    paddingHorizontal: 24,
  },
  inputsContainer: {
    marginTop: 10,
  },
  header: {
    fontSize: 34,
    marginBottom: 10,
  },
  loginButtoContainer: {
    marginTop: 49,
    marginBottom: 97,
  },
  signUpButtoContainer: {
    marginTop: 23,
    marginBottom: 40,
  },
  orContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  noAccountContainer: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 44,
  },
  orText: {
    fontFamily: "Inter_400Regular",
  },
  noAccountText: {
    marginRight: 2,
    fontFamily: "Inter_400Regular",
  },
});
