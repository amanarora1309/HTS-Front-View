import { useState } from "react";
import { toast } from "react-toastify";
import { fetchOtp, resetPassword, verifyOtpApi } from "../../helpers/otp_helper";
import { CreateOrganization, Login } from "../../helpers/organization_helper";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons/faEye';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons/faEyeSlash';
import Loader from "../Loader/Loader";
import { Link, useNavigate, useParams } from "react-router-dom";
import ForgotPasswordForm from "./ForgotPasswordForm";
import { useLocation } from 'react-router-dom';

function ResetPasswordForm() {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [confirmPassword, setconfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState("");
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [spanDisplay, setspanDisplay] = useState("none");
    const [loader, setLoader] = useState(false);
    const [forgotPassword, setForgotPassword] = useState(false);
    const location = useLocation();
    const token = new URLSearchParams(location.search).get('token');
    const navigate = useNavigate();







    const handleSubmit = async (e) => {

        e.preventDefault();
        console.log("submit")
        if (!email || !password || !confirmPassword) {
            setspanDisplay("inline");
        }
        else if (password !== confirmPassword) {
            toast.error("Pasword and confirm password did not match");
        }
        else if (password.length < 8) {
            toast.error("Password must contain at least 8 letters or numbers");
        }
        else {
            setLoader(true);
            const result = await resetPassword({ email, token, password })
            console.log("sssssss ", result.success)
            setLoader(false);
            if (result?.success) {
                toast.success(result.message)
                // Save authUser to localStorage in the login app

                navigate("/login")

            }
            else {
                toast.error(result?.message);
            }

        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };


    return (
        <>
            {loader ? (
                <>

                    <Loader />
                </>
            ) : ("")}

            <form onSubmit={handleSubmit} className="row">
                <div className="col-md-12" style={{ marginBottom: !email ? "20px" : undefined }}>
                    <input type="email" name="email" placeholder="Email Address" value={email} onChange={(e) => setemail(e.target.value)} style={{ marginBottom: !email ? "0" : undefined }} />
                    {!email && <span style={{ color: "red", display: spanDisplay }}>This feild is required</span>}
                </div>

                <div className="col-md-12" style={{ marginBottom: !email ? "" : undefined }}>
                    <div style={{ position: 'relative' }}>
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setpassword(e.target.value)}
                            style={{ marginBottom: !email ? "20px" : undefined }}

                        />
                        <button
                            type="button"
                            onClick={togglePasswordVisibility}
                            style={{
                                position: 'absolute',
                                right: '10px',
                                top: "40%",
                                transform: 'translateY(-50%)',
                                background: 'none',
                                border: 'none',
                                cursor: 'pointer',
                                outline: 'none',
                            }}
                        >

                            <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                        </button>
                    </div>

                    {!password && <span style={{ color: "red", display: spanDisplay }}>This feild is required</span>}
                </div>
                <div className="col-md-12" style={{ marginBottom: !email ? "20px" : undefined }}>
                    {/* <input type="text" name="phone" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setconfirmPassword(e.target.value)} /> */}
                    <div style={{ position: 'relative' }}>
                        <input
                            type={showConfirmPassword ? "text" : "password"}
                            name="password"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => setconfirmPassword(e.target.value)}
                            style={{ marginBottom: !email ? "0" : undefined }}

                        />
                        <button
                            type="button"
                            onClick={toggleConfirmPasswordVisibility}
                            style={{
                                position: 'absolute',
                                right: '10px',
                                top: "40%",
                                transform: 'translateY(-50%)',
                                background: 'none',
                                border: 'none',
                                cursor: 'pointer',
                                outline: 'none',
                            }}
                        >

                            <FontAwesomeIcon icon={showConfirmPassword ? faEyeSlash : faEye} />
                        </button>
                    </div>
                    {!confirmPassword && <span style={{ color: "red", display: spanDisplay }}>This feild is required</span>}
                </div>
                <div className="col-md-12">
                    <div className="condition-check">
                        <input id="terms-conditions" type="checkbox" />
                        <label htmlFor="terms-conditions">
                            I agree to the <a href="#">Terms & Conditions</a>
                        </label>
                    </div>
                </div>
                <div className="col-md-12 text-right">
                    <input type="submit" name="submit" value="Submit" />
                </div>
            </form >




        </>
    );
}






export default ResetPasswordForm;
