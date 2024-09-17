import { useEffect, useState } from "react";
import Preloader from "../../Component/Preloader";
import Header from "../../Component/Headers";;
import Footer from "../../Component/Footer/Footer";
import GotoTop from "../../Component/GotoTop";
import PaymentFail from "../../Component/Payment/PaymentFail";

function Fail() {
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
                <PaymentFail />
            </>
        );
    }
    return content;
}

export default Fail;
