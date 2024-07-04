import { useEffect, useState } from "react";
import Preloader from "../../Component/Preloader";
import Header from "../../Component/Headers";
import Footer from "../../Component/Footer/Footer";
import Banner from "../../Component/Banner/Banner";
import Map from "../../Component/Map";
import GotoTop from "../../Component/GotoTop";
import JoinForm from "../../Component/Form/JoinForm";
import LoginForm from "../../Component/Form/LoginFrom";
import ResetPasswordForm from "../../Component/Form/ResetPasswordForm";

function ResetPassword() {
    const [isLoading, setIsLoading] = useState(true);
    let content = undefined;
    useEffect(() => {
        setIsLoading(false);
    }, [isLoading]);

    if (isLoading) {
        content = <Preloader />;
    } else {
        content = (
            <>
                <Header logo="assets/images/logo4.png" joinBtn={true} />
                <Banner title="Reset Password" background="assets/images/banner.jpg" />
                <section className="contact-section">
                    <div className="container">
                        <div className="row">

                            <div className="col-md-6 m-auto">
                                <div className="contact-form">
                                    <h4>Reset Password</h4>
                                    <p>
                                        Integer at lorem eget diam facilisis lacinia ac id massa.
                                    </p>
                                    <ResetPasswordForm />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <Map /> */}
                <Footer />
                <GotoTop />
            </>
        );
    }
    return content;
}

export default ResetPassword;
