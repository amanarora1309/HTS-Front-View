import { useState } from "react";
import { toast } from "react-toastify";
import { fetchOtp, forgotPassword, verifyOtpApi } from "../../helpers/otp_helper";
import { CreateOrganization, Login } from "../../helpers/organization_helper";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons/faEye';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons/faEyeSlash';
import Loader from "../Loader/Loader";
import { Link } from "react-router-dom";

const ForgotPasswordForm = () => {
    const [email, setemail] = useState("");
    const [spanDisplay, setspanDisplay] = useState("none");
    const [loader, setLoader] = useState(false);








    const handleSubmit = async (e) => {

        e.preventDefault();
        console.log("submit")
        if (!email) {
            setspanDisplay("inline");
        }
        else {
            setLoader(true);
            const result = await forgotPassword({ email });
            setLoader(false);
            if (result?.success) {
                toast.success(result.message);
            }
            else {
                toast.error(result.message);
            }


        }
    };


    return (
        <div>
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

                <div className="col-md-12">
                    <div className="condition-check">
                        <input id="terms-conditions" type="checkbox" />
                        <label htmlFor="terms-conditions">
                            I agree to the <a href="#">Terms & Conditions</a>
                        </label>
                    </div>
                </div>
                <div className="col-md-12 text-right">
                    <input type="submit" name="submit" value="Send Mail" />
                </div>
            </form >
        </div>
    )
}

export default ForgotPasswordForm
