import http from "../../util/httpClient";

import { SignupRequestType } from "util/Type/type";

/**
 * Signup API endpoint
 * @param {object} data - Credentials to create account
 * @param {string} data.firstName - Firstname
 * @param {string} data.lastName - Lastname
 * @param {string} data.email - Email
 * @param {string} data.userName - UserName
 * @param {string} data.password - Password
 * @returns {Promise} - Axios promise object
 */
export const signup = (data: SignupRequestType) => http.post("/signup", data);
