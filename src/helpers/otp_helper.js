import axios from "axios"
import { post, del, get, put } from "./api_helper"
import * as url from "./url_helper"
import { toast } from "react-toastify";



export const fetchOtp = data => post(url.GET_OTP, data);
export const verifyOtpApi = data => post(url.VERIFY_OTP, data);
export const forgotPassword = data => post(url.FORGOT_PASSWORD, data);
export const resetPassword = data => post(url.RESET_PASSWORD, data);