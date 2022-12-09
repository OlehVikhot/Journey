import { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "../../constants/colors";

export function Input({
  label,
  placeholder,
  multiline,
  error,
  secure,
  search,
  labelOff,
  paramsOnFocus,
  paramsOnBlur,
  autoFocus,
  onPressIn,
  setInputText,
  getText,
  inactive,
}) {
  const [text, setText] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [showPass, setShowPass] = useState(false);

  useEffect(() => {
    setInputText && setText(setInputText);
  }, [setInputText]);

  useEffect(() => {
    getText && getText(text);
  }, [text]);

  function onFocus() {
    paramsOnFocus && paramsOnFocus();
    setIsFocused(true);
  }

  function onBlur() {
    paramsOnBlur && paramsOnBlur();
    setIsFocused(false);
  }

  function onShowPassHandler() {
    setShowPass(!showPass);
  }

  function inputHandler(textData) {
    setText(textData);
  }

  function onClearField() {
    setText("");
  }

  return (
    <View>
      {!labelOff && (
        <View style={styles.labelContainer}>
          <Text style={styles.label}>{label}</Text>
        </View>
      )}
      <View style={styles.inputContainer}>
        <TextInput
          style={[
            styles.textInput,
            isFocused && styles.textInputFocused,
            error && styles.errorInput,
            search && styles.searchInput,
          ]}
          placeholder={placeholder}
          onFocus={onFocus}
          onBlur={onBlur}
          secureTextEntry={showPass ? false : secure}
          onChangeText={inputHandler}
          value={text}
          autoFocus={autoFocus}
          onPressIn={onPressIn}
          editable={inactive ? false : true}
        />
        {secure && (
          <View style={styles.viewPassword}>
            <Pressable onPress={onShowPassHandler}>
              <AntDesign
                name={showPass ? "eye" : "eyeo"}
                size={24}
                color='black'
              />
            </Pressable>
          </View>
        )}
        {search && text && (
          <View style={styles.clearIcon}>
            <Pressable onPress={onClearField}>
              <MaterialIcons
                name='clear'
                size={24}
                color={isFocused || text ? "black" : colors.gray3}
              />
            </Pressable>
          </View>
        )}
        {search && (
          <View style={styles.searchIcon}>
            <Pressable>
              <AntDesign
                name='search1'
                size={24}
                color={isFocused || text ? "black" : colors.gray3}
              />
            </Pressable>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: "center",
    justifyContent: "center",
    height: 48,
  },
  labelContainer: {
    marginLeft: 20,
    marginBottom: 8,
  },
  label: {
    fontSize: 14,
    marginTop: 11,
  },
  textInput: {
    width: "100%",
    backgroundColor: colors.gray5,
    borderRadius: 200,
    paddingHorizontal: 22,
    paddingVertical: 15,
    position: "relative",
  },
  textInputFocused: {
    borderWidth: 1,
  },
  viewPassword: {
    position: "absolute",
    right: 20,
  },
  searchInput: {
    paddingHorizontal: 55,
  },
  clearIcon: {
    position: "absolute",
    right: 20,
  },
  searchIcon: {
    position: "absolute",
    left: 20,
  },

  errorInput: {
    backgroundColor: colors.error,
    borderWidth: 1,
    borderColor: colors.errorRed,
  },
});
