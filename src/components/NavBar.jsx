// استيراد المكونات والصور المطلوبة.
import Logo from "./Logo"; // استيراد مكون الشعار
import LogoImag from "../assets/images/logo.webp"; // استيراد صورة الشعار
import SearchInput from "./SearchInput"; // استيراد مكون البحث
import "../App.css"; // استيراد ملف الأنماط (CSS) الخاص بالتطبيق

// تعريف مكون NavBar الذي يستقبل 3 خصائص: toggleTheme (لتغيير الوضع)، theme (الوضع الحالي)، onSearch (دالة البحث).
const NavBar = ({ toggleTheme, theme, onSearch }) => {
  // دالة handleRefresh التي تقوم بإعادة تحميل الصفحة عند النقر على الشعار
  const handleRefresh = () => {
    window.location.reload(); // إعادة تحميل الصفحة
  };

  return (
    <>
      <div className="navbar-app">
        {" "}
        {/* حاوية الشريط العلوي */}
        {/* قسم الشعار */}
        <div className="gamp-app-header">
          <button onClick={handleRefresh} text="gamp app header">
            {" "}
            {/* عند النقر على الزر، سيتم استدعاء دالة handleRefresh */}
            <Logo image={LogoImag} />{" "}
            {/* عرض الشعار باستخدام مكون Logo وتمرير صورة الشعار إليه */}
          </button>
        </div>
        {/* قسم حقل البحث */}
        <div className="cover-search">
          <SearchInput onSearch={onSearch} />{" "}
          {/* عرض مكون البحث وتمرير دالة onSearch إليه */}
        </div>
        {/* قسم تبديل الوضعية (النهار/الليل) */}
        <div className="theme-mode">
          <label className="switch">
            {" "}
            {/* التسمية الخاصة بالتبديل بين الوضعين */}
            <input
              id="input" // تعيين الـ ID للـ input
              type="checkbox" // تحديد نوع العنصر كـ checkbox
              onChange={toggleTheme} // عند تغيير الوضعية، استدعاء الدالة toggleTheme
              checked={theme === "dark"} // إذا كان الوضع الحالي هو "dark"، يتم تحديد الـ checkbox
            />
            <div className="slider round">
              {" "}
              {/* الجزء الذي يحتوي على التبديل مع الشكل الدائري */}
              <div className="sun-moon">
                {" "}
                {/* الحاوية التي تحتوي على الأيقونات الخاصة بالشمس والقمر */}
                {/* الأيقونات الخاصة بالقمر التي تظهر في الوضع الليلي */}
                <svg id="moon-dot-1" className="moon-dot" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="50"></circle>
                </svg>
                <svg id="moon-dot-2" className="moon-dot" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="50"></circle>
                </svg>
                <svg id="moon-dot-3" className="moon-dot" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="50"></circle>
                </svg>
                {/* الأيقونات الخاصة بالشمس التي تظهر في الوضع النهاري */}
                <svg
                  id="light-ray-1"
                  className="light-ray"
                  viewBox="0 0 100 100"
                >
                  <circle cx="50" cy="50" r="50"></circle>
                </svg>
                <svg
                  id="light-ray-2"
                  className="light-ray"
                  viewBox="0 0 100 100"
                >
                  <circle cx="50" cy="50" r="50"></circle>
                </svg>
                <svg
                  id="light-ray-3"
                  className="light-ray"
                  viewBox="0 0 100 100"
                >
                  <circle cx="50" cy="50" r="50"></circle>
                </svg>
                {/* الأيقونات الخاصة بالغيوم التي تظهر في الوضع الليلي والنهاري */}
                <svg id="cloud-1" className="cloud-dark" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="50"></circle>
                </svg>
                <svg id="cloud-2" className="cloud-dark" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="50"></circle>
                </svg>
                <svg id="cloud-3" className="cloud-dark" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="50"></circle>
                </svg>
                <svg id="cloud-4" className="cloud-light" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="50"></circle>
                </svg>
                <svg id="cloud-5" className="cloud-light" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="50"></circle>
                </svg>
                <svg id="cloud-6" className="cloud-light" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="50"></circle>
                </svg>
              </div>
              {/* النجوم التي تظهر في الوضع الليلي */}
              <div className="stars">
                {/* النجوم التي تظهر في الوضع الليلي */}
                <svg id="star-1" className="star" viewBox="0 0 20 20">
                  <path d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z"></path>
                </svg>
                <svg id="star-2" className="star" viewBox="0 0 20 20">
                  <path d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z"></path>
                </svg>
                <svg id="star-3" className="star" viewBox="0 0 20 20">
                  <path d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z"></path>
                </svg>
                <svg id="star-4" className="star" viewBox="0 0 20 20">
                  <path d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z"></path>
                </svg>
              </div>
            </div>
          </label>
        </div>
      </div>
    </>
  );
};

// تصدير المكون NavBar لاستخدامه في أماكن أخرى من التطبيق
export default NavBar;
