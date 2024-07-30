import jalaali from "jalaali-js";

const useJalaliDate = () => {
  const now = new Date();
  const jalaliDate = jalaali.toJalaali(now);
  return `${jalaliDate.jy}/${jalaliDate.jm}/${jalaliDate.jd}`;
};

export default useJalaliDate;
