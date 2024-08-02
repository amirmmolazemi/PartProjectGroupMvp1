import jalaali from "jalaali-js";

const jalaliDateGenerator = () => {
  const now = new Date();
  const jalaliDate = jalaali.toJalaali(now);
  return `${jalaliDate.jy}/${jalaliDate.jm}/${jalaliDate.jd}`;
};

export default jalaliDateGenerator;
