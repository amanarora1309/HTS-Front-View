import { useState } from "react";
import { toast } from "react-toastify";
import { fetchOtp, verifyOtpApi } from "../../helpers/otp_helper";
import { CreateOrganization, Login } from "../../helpers/organization_helper";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons/faEye';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons/faEyeSlash';
import Loader from "../Loader/Loader";
import { Link } from "react-router-dom";
import ForgotPasswordForm from "./ForgotPasswordForm";
import { SECOND_APP_URL } from "../../helpers/url_helper";

function LoginForm() {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [showPassword, setShowPassword] = useState("");
    const [spanDisplay, setspanDisplay] = useState("none");
    const [loader, setLoader] = useState(false);
    const [forgotPassword, setForgotPassword] = useState(false);








    const handleSubmit = async (e) => {

        e.preventDefault();
        console.log("submit")
        if (!email || !password) {
            setspanDisplay("inline");
        }
        else {
            try {
                setLoader(true);

                const result = await Login({ email, password })
                if (result?.success) {
                    // Save authUser to localStorage in the login app 

                    // Redirect to dashboard
                    window.location.href = `${SECOND_APP_URL}dashboard/?authtoken=${JSON.stringify(result)}`;

                }
                else {
                    setLoader(false);
                    toast.error(result?.message);
                }
            } catch (error) {
                toast.error(error?.response?.data?.message || "Something went wrong");
            } finally {
                setLoader(false);
            }
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    useState(() => {
        console.log(forgotPassword)
    }, [])


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

                <div className="col-md-12" style={{ marginBottom: !email ? "20px" : undefined }}>
                    <div style={{ position: 'relative' }}>
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setpassword(e.target.value)}
                            style={{ marginBottom: !email ? "0" : undefined }}

                        />
                        <button
                            type="button"
                            onClick={togglePasswordVisibility}
                            style={{
                                position: 'absolute',
                                right: '10px',
                                top: "50%",
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
                <div className="" style={{ color: "red" }}>
                    <Link style={{ color: "#5838fc" }} to="/forgot-password">Forgot Password ?</Link>
                </div>
            </form >




        </>
    );
}






export default LoginForm;
