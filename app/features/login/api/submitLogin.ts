import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { useRouter } from "expo-router";

export const submitLogin = (id: string, password: string) => {
  const R = useRouter();
  axios
    .post(`${process.env.REACT_APP_API_URL}/auth/login`, {
      id: id,
      password: password,
    })
    .then((res) => {
      R.push("/pages/main");
      AsyncStorage.setItem("token", res.data.token);
    })
    .catch((e) => {
      console.log(e);
    });
};
