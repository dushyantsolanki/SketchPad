import { Client, Account, ID } from "appwrite";

import conf from "../config/config";

class Authentication {
  client = new Client();

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
      return { code: error.code, message: error.message, flag: false };
    }
  };

  loginAccount = async ({ email, password }) => {
    try {
      const loginUser = await this.account.createEmailSession(email, password);
      return loginUser;
    } catch (error) {
      console.log("appwrite : authentication :: loginAccount :: ", error);
      return { code: error.code, message: error.message, flag: false };
    }
  };

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
      return { code: error.code, message: error.message, flag: false };
    }
  };

  getLoginAccount = async () => {
    try {
      const loginAccount = await this.account.get();
      return loginAccount;
    } catch (error) {
      console.log("appwrite : authentication :: getLoginAccount :: ", error);
      return { code: error.code, message: error.message, flag: false };
    }
  };

  logoutCurrentUser = async () => {
    try {
      const logoutAccount = await this.account.deleteSession("current");
      return logoutAccount;
    } catch (error) {
      console.log("appwrite : authentication :: logoutCurrentUSer :: ", error);
      return { code: error.code, message: error.message, flag: false };
    }
  };

  verificationEmailUpdate = async ({ userId, secret }) => {
    try {
      const emailData = await this.account.updateMagicURLSession(
        userId,
        secret
      );
      return emailData;
    } catch (error) {
      console.log(
        "appwrite : authentication :: verificationEmailUpdate :: ",
        error
      );
      return { code: error.code, message: error.message, flag: false };
    }
  };
}
const auth = new Authentication();
export default auth;
