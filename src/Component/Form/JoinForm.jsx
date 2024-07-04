import { useState } from "react";
import { toast } from "react-toastify";
import { fetchOtp, verifyOtpApi } from "../../helpers/otp_helper";
import { CreateOrganization } from "../../helpers/organization_helper";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons/faEye';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons/faEyeSlash';
import { useNavigate } from "react-router-dom";
import Loader from "../Loader/Loader";

function JoinForm() {
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [phoneNumber, setphoneNumber] = useState("");
    const [password, setpassword] = useState("");
    const [confirmPassword, setconfirmPassword] = useState("");
    const [spanDisplay, setspanDisplay] = useState("none");
    const [otp, setotp] = useState("");
    const [sentOtp, setsentOtp] = useState(false);
    const [verifyOtp, setverifyOtp] = useState(false);
    const [emailReadOnly, setemailReadOnly] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [loader, setLoader] = useState(false);
    const navigate = useNavigate();

    const sendOtp = async () => {
        console.log(email)
        if (!email) {
            toast.error("Enter email id");
        }
        else {
            setLoader(true);
            setsentOtp(true);
            const result = await fetchOtp({ email });
            if (result.success) {
                setLoader(false);
                toast.success(result.message);
            }
            else {
                setLoader(false);
                toast.error(result.message);
            }
        }
    }

    const handleOtpChange = async (e) => {
        console.log("check")
        setotp(e.target.value);
        let otp = e.target.value;
        let emailId = email;
        const result = await verifyOtpApi({ otp, emailId });
        if (result.success) {
            toast.success(result.message);
            setverifyOtp(true);
            setemailReadOnly(true);
        }
        else {
            console.log()
            if (otp.length >= 6) {
                toast.error(result.message);
            }
        }
    }




    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("submit")
        if (!email || !phoneNumber || !password || !confirmPassword) {
            setspanDisplay("inline");
        }
        else {
            if (password !== confirmPassword) {
                toast.error("Pasword and confirm password did not match");
            }
            else if (password.length < 8) {
                toast.error("Password must contain at least 8 letters or numbers");
            }
            else if (!/^\d{10}$|^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/.test(phoneNumber)) {
                toast.error("Invalid phone number format");
            }
            else {
                setLoader(true);
                let username = email;
                const result = await CreateOrganization({ username, email, phoneNumber, password, confirmPassword })
                if (result?.success) {
                    setLoader(false);
                    toast.success(result?.message);
                    navigate("login");
                }
                else {
                    setLoader(false);
                    toast.error(result?.message);
                }
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
                    <input type="email" name="email" placeholder="Email Address" value={email} onChange={(e) => setemail(e.target.value)} readOnly={emailReadOnly} style={{ marginBottom: !email ? "0" : undefined }} />
                    {!email && <span style={{ color: "red", display: spanDisplay }}>This feild is required</span>}
                </div>
                <div className="col-md-12" style={{ marginBottom: !email ? "20px" : undefined }}>
                    <input type="number" name="phone" placeholder="Phone Number" value={phoneNumber} onChange={(e) => setphoneNumber(e.target.value)} style={{ marginBottom: !email ? "0px" : undefined }} />
                    {!phoneNumber && <span style={{ color: "red", display: spanDisplay }}>This feild is required</span>}
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
                {
                    sentOtp &&
                    !verifyOtp &&
                    <div className="col-md-12">
                        <input type="number" name="otp" placeholder="Otp" value={otp} onChange={handleOtpChange} />
                    </div>
                }


                <div className="col-md-12">
                    <div className="condition-check">
                        <input id="terms-conditions" type="checkbox" />
                        <label htmlFor="terms-conditions">
                            I agree to the <a href="#">Terms & Conditions</a>
                        </label>
                    </div>
                </div>
                <div className="col-md-12 text-right">
                    {!verifyOtp ?
                        <input type="button" name="submit" value="Send Otp" onClick={sendOtp} />
                        :
                        <input type="submit" name="submit" value="Submit" />
                    }

                </div>
            </form >
        </>
    );
}

export default JoinForm;
