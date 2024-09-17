function Map() {
  return (
    <div className="bisylms-map">
      {/* <iframe src="https://maps.google.com/maps?width=720&amp;height=600&amp;hl=en&amp;coord=39.966528,-75.158284&amp;q=1%20Grafton%20Street%2C%20Dublin%2C%20Ireland+(My%20Business%20Name)&amp;ie=UTF8&amp;t=p&amp;z=16&amp;iwloc=B&amp;output=embed"></iframe> */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d113555.18850512806!2d77.91673449999999!3d27.200317299999988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3973880255555555%3A0x9db125d9a06dac14!2sC-115%20EPIP%20%2C%20Upsidc%2C%20Shastripuram%2C%20Agra%2C%20Uttar%20Pradesh%20282007!3m2!1d27.199235299999998!2d77.9249536!5e0!3m2!1sen!2sin!4v1726548513593!5m2!1sen!2sin"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>

  );
}

export default Map;
