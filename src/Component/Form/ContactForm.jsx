import { useState } from "react";
import { ContactUs } from "../../helpers/organization_helper";
import { toast } from "react-toastify";
import Loader from "../Loader/Loader";

function ContactForm() {

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    subject: "",
    cxQuery: "",
  });

  const [loader, setLoader] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value)
    setData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async () => {
    try {
      setLoader(true);
      console.log(data)
      const result = await ContactUs(data);
      if (result?.success) {
        toast.success(result?.message);
        setData({
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          subject: "",
          cxQuery: "",
        });
      }
      else {
        toast.error(result?.message);
      }
    } catch (error) {
      console.log(error)
      toast.error(error?.response?.data?.message || "Something went wrong");
    } finally {
      setLoader(false);
    }
  }
  return (
    <>
      {loader ? (
        <>

          <Loader />
        </>
      ) : ("")}
      <form className="row">
        <div className="col-md-6">
          <input type="text" name="firstName" placeholder="First Name" value={data.firstName} onChange={handleInputChange} />
        </div>
        <div className="col-md-6">
          <input type="text" name="lastName" placeholder="Last Name" value={data.lastName} onChange={handleInputChange} />
        </div>
        <div className="col-md-6">
          <input type="email" name="email" placeholder="Email Address" value={data.email} onChange={handleInputChange} />
        </div>
        <div className="col-md-6">
          <input type="number" name="phoneNumber" placeholder="Phone Number" value={data.phoneNumber} onChange={handleInputChange} />
        </div>
        <div className="col-md-12">
          <input type="text" name="subject" placeholder="Subject" value={data.subject} onChange={handleInputChange} />
        </div>
        <div className="col-md-12">
          <textarea name="cxQuery" placeholder="How can we help?" value={data.cxQuery} onChange={handleInputChange}></textarea>
        </div>
        <div className="col-md-6">
          <div className="condition-check">
            <input id="terms-conditions" type="checkbox" />
            <label htmlFor="terms-conditions">
              I agree to the <a href="#">Terms & Conditions</a>
            </label>
          </div>
        </div>
        <div className="col-md-6 text-right">
          <input type="button" name="submit" value="Send Message" onClick={handleSubmit} />
        </div>
      </form>
    </>
  );
}

export default ContactForm;
