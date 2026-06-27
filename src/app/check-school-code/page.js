import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function CheckSchoolCode() {
  return (
    <main>
      <Header />

      {/* Page Hero */}
      <div className="page-hero">
        <h1 className="page-hero-title">Recognized Schools</h1>
        <div className="page-hero-breadcrumb">
          <Link href="/">HOME</Link>
          <span>&gt;</span>
          <span className="active">RECOGNIZED SCHOOLS</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="schools-container">
        <h2 className="schools-title">Affiliated Schools</h2>
        
        <div className="schools-table-wrapper">
          <table className="schools-table">
            <thead>
              <tr>
                <th>Name of Schools</th>
                <th>Code</th>
                <th>Address</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1) S.V.N Senior Secondary School</td>
                <td>BSSE56/00101</td>
                <td>Village-Pipra Daxin, Post- Pipra Uttar Patti,Thana- Khampar, District-Deoria,PinCode- 274702(U.P)</td>
              </tr>
              <tr>
                <td>2) Laiti Devi Balika High School</td>
                <td>BSSE56/00111</td>
                <td>Village- Jagdipur, Post- Math Mohammadpur, Thana- Haldharpur, District-Mau, PinCode- 275102 (U.P)</td>
              </tr>
              <tr>
                <td>3) Mata Durgawati Senior Secondary School</td>
                <td>BSSE56/00112</td>
                <td>Village-Bhadasamanopur, Post- Kopaganj, Thana- Kopaganj, District- Mau, PinCode-275305 (U.P)</td>
              </tr>
              <tr>
                <td>4) B.R.M Inter College</td>
                <td>BSSE56/00103</td>
                <td>Village-Ishipur(Chanda), Post- Maharani Paschim, Thana- Chanda, District-Sultanpur, PinCode- 222303 (U.P)</td>
              </tr>
              <tr>
                <td>5) Maa Kripali Mool Chandra Aadresh Inter College</td>
                <td>BSSE56/00161</td>
                <td>Village- Shukulumari, Post-Shukulumari, Thana- Chanda, District- Sultanpur, PinCode- 222303 (U.P)</td>
              </tr>
              <tr>
                <td>6) Sanichari Radhika S.P.Y Senior Secondary School</td>
                <td>BSSE56/00122</td>
                <td>Village-Vishunpur, Post- Basopatti, Thana- Bankata, District- Deoria, PinCode- 274704 (U.P)</td>
              </tr>
              <tr>
                <td>7) M.S.D Senior Secondary School</td>
                <td>BSSE81/00125</td>
                <td>Village- Chakkimusadohi, Post- Parasia Jayramgiri, Thana- Madhuaban, District- Mau, PinCode- 221601 (U.P)</td>
              </tr>
              <tr>
                <td>8) MDSS Secondary School</td>
                <td>BSSE56/00127</td>
                <td>Village- Garavpur, Post- Garavpur, District:- Sultanpur PinCode:- 222302 (U.P)</td>
              </tr>
              <tr>
                <td>9) Jai Guru Dev Secondary School</td>
                <td>BSSE56/00128</td>
                <td>Village- Mujahi Bazar, District:- Pratapgarh (U.P)</td>
              </tr>
              <tr>
                <td>10) Dr. Ramakant Kushwaha Secondary School</td>
                <td>BSSE56/00129</td>
                <td>Village- Gaura Khas , Rampur Karkhana, District:- Deoria (U.P)</td>
              </tr>
              <tr>
                <td>11) B.R.M Convent School</td>
                <td>BSSE56/00130</td>
                <td>Village-Ishipur(Chanda), Post- Maharani Paschim, Thana- Chanda, District-Sultanpur, PinCode- 222303 (U.P)</td>
              </tr>
              <tr>
                <td>12) K.P.D Academy</td>
                <td>BSSE56/00163</td>
                <td>Village- Chida, Post- Trisundi ,Amethi PinCode:227816 (U.P)</td>
              </tr>
              <tr>
                <td>13) Ram Yash Memorial Junior High School</td>
                <td>BSSE56/00132</td>
                <td>Village- Laxmi Market , Kurebhar, District:- Sultanpur Pin Code- 228151 (U.P)</td>
              </tr>
              <tr>
                <td>14) Sagar Academy</td>
                <td>BSSE56/00133</td>
                <td>Village- Bangara Bazar, Post- Manipur, Thana-Khampar, District-Deoria, PinCode- 274702 (U.P)</td>
              </tr>
              <tr>
                <td>15) M.K.M.C Public School</td>
                <td>BSSE56/00134</td>
                <td>Village- Shukulumari, Post- Shukulumari, District-Sultanpur, PinCode- 222303 (U.P)</td>
              </tr>
              <tr>
                <td>16) B.P Secondary School</td>
                <td>BSSE56/00135</td>
                <td>Village+Post- Math Toder Gir, District-Deoria, PinCode- 274807 (U.P)</td>
              </tr>
              <tr>
                <td>17) Bhagwan Deen Public School</td>
                <td>BSSE56/00136</td>
                <td>Village+Post- Baintikala Pratappur Kamaicha, Post-Lambhua, Distt- Sultanpur, Pin Code- 222307(U.P)</td>
              </tr>
              <tr>
                <td>18) Dr. Pankaj Pal International School</td>
                <td>BSSE56/00137</td>
                <td>Village+Post- Kataghar Poore Chauhan,Post-Devrajpur, Distt- Sultanpur, Pin Code- 222303(U.P)</td>
              </tr>
              <tr>
                <td>19) SHRI R.S SHARMA Public School</td>
                <td>BSSE56/00138</td>
                <td>Village- Bajethi, Post- Miranpur, Post-miranpur, Distt- Sultanpur, Pin Code- 227816(U.P)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <Footer />
    </main>
  );
}
