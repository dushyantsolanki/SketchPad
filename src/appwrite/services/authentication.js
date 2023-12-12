import { Client, Account, ID } from "appwrite";

import conf from "../config/config";

class Authentication {
  client = new Client();
  // appwrite = new Appwrite({
  //   endpoint: conf.endPoint,
  //   projectId: conf.projectId,
  // });
  account;
  constructor() {
    this.client.setEndpoint(conf.endPoint).setProject(conf.projectId);
    this.account = new Account(this.client);
  }

  createAccount = async ({ email, password, name }) => {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      return userAccount;
    } catch (error) {
      console.log("appwrite : authentication :: createAccount :: ", error);
      return false;
    }
  };

  loginAccount = async ({ email, password }) => {
    try {
      const loginUser = await this.account.createEmailSession(email, password);
      return loginUser;
    } catch (error) {
      console.log("appwrite : authentication :: loginAccount :: ", error);
      return false;
    }
  };

  // loginWithGoogle = async () => {
  //   try {
  //     const userLoginGoogle = await this.appwrite.signInWithSocial("google");
  //     return userLoginGoogle;
  //   } catch (error) {
  //     console.log("appwrite : authentication :: loginWithGoogle :: ", error);
  //     return false;
  //   }
  // };

  loginWithMagicUrl = async ({ email }) => {
    try {
      const magicUrl = await this.account.createMagicURLSession(
        ID.unique(),
        email,
        "http://localhost:5173/"
      );
      return magicUrl;
    } catch (error) {
      console.log("appwrite : authentication ::  loginWithMagicUrl :: ", error);
      return false;
    }
  };

  getLoginAccount = async () => {
    try {
      const loginAccount = await this.account.get();
      return loginAccount;
    } catch (error) {
      console.log("appwrite : authentication :: getLoginAccount :: ", error);
      return false;
    }
  };
}
const auth = new Authentication();
export default auth;
