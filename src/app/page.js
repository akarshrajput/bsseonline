import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSlider from "@/components/HeroSlider";

export default function Home() {
  return (
    <main>
      <Header />

      {/* Hero */}
      <HeroSlider />

      {/* Features Grid */}
      <section className="features-section">
        <div className="features-grid">
          {/* Card 1 */}
          <div className="feature-card border-blue">
            <div className="feature-icon-wrapper bg-blue">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
            </div>
            <h3 className="text-blue">Affilation Form Download</h3>
            <p>Apply for affiliation</p>
          </div>

          {/* Card 2 */}
          <div className="feature-card border-orange">
            <div className="feature-icon-wrapper bg-orange">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
            </div>
            <h3 className="text-orange">Circular</h3>
            <p>Check Notifications</p>
          </div>

          {/* Card 3 */}
          <div className="feature-card border-orange">
            <div className="feature-icon-wrapper bg-orange">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
            </div>
            <h3 className="text-orange">Terms and Condition for Institutes</h3>
            <p>Terms and Condition for Institutes</p>
          </div>

          {/* Card 4 */}
          <Link href="/result" className="feature-card border-blue" style={{textDecoration: 'none'}}>
            <div className="feature-icon-wrapper bg-blue">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
            </div>
            <h3 className="text-blue">Result</h3>
            <p style={{color: '#666'}}>Check your result</p>
          </Link>

          {/* Card 5 */}
          <Link href="/online-registration" className="feature-card border-orange" style={{textDecoration: 'none'}}>
            <div className="feature-icon-wrapper bg-orange">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
            </div>
            <h3 className="text-orange">Online Registration</h3>
            <p style={{color: '#666'}}>Apply online registration.</p>
          </Link>

          {/* Card 6 */}
          <div className="feature-card border-dark">
            <div className="feature-icon-wrapper bg-dark">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
            </div>
            <h3 className="text-dark">Check affiliation</h3>
            <p>Check college/institute affiliation code</p>
          </div>
        </div>
      </section>

      {/* Board Info Section */}
      <section className="board-info">
        <h2>Board Of Senior Secondary Education</h2>
        <h3>उच्चतर माध्यमिक शिक्षा परिषद</h3>
        <p>(AN ENTERPRISES UNDER MSMED ACT 2006) MINISTRY OF MSME GOVT. OF INDIA, NEW DELHI</p>
        <Link href="/result" className="read-more-btn">READ MORE</Link>
      </section>

      {/* Courses Section */}
      <section className="courses-section">
        <h2>BSSE Courses</h2>
        <div className="courses-grid">
          
          {/* Course 1 */}
          <div className="course-card">
            <div className="course-image">
              <Image src="/c_highschool.png" alt="High School" width={300} height={150} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
            </div>
            <div className="course-content with-image">
              <h3>High School(10th)</h3>
            </div>
            <div className="course-footer">
              <Link href="/online-registration" className="online-reg-btn">Online Registration</Link>
            </div>
          </div>

          {/* Course 2 */}
          <div className="course-card">
            <div className="course-image">
              <Image src="/c_seniorsec.png" alt="Senior Secondary" width={300} height={150} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
            </div>
            <div className="course-content with-image">
              <h3>Senior Secondary<br/>School</h3>
            </div>
            <div className="course-footer">
              <Link href="/online-registration" className="online-reg-btn">Online Registration</Link>
            </div>
          </div>

          {/* Course 3 */}
          <div className="course-card">
            <div className="course-image">
              <Image 
                src="/c_paramedical.png" 
                alt="Paramedical" 
                width={300} 
                height={150} 
                style={{width: '100%', height: '100%', objectFit: 'cover'}}
              />
            </div>
            <div className="course-content with-image">
              <h3>Paramedical</h3>
            </div>
            <div className="course-footer">
              <Link href="/online-registration" className="online-reg-btn">Online Registration</Link>
            </div>
          </div>

          {/* Course 4 */}
          <div className="course-card">
            <div className="course-image">
              <Image 
                src="/c_automobile.png" 
                alt="Automobile" 
                width={300} 
                height={150} 
                style={{width: '100%', height: '100%', objectFit: 'cover'}}
              />
            </div>
            <div className="course-content with-image">
              <h3>Automobile</h3>
            </div>
            <div className="course-footer">
              <Link href="/online-registration" className="online-reg-btn">Online Registration</Link>
            </div>
          </div>

          {/* Course 5 */}
          <div className="course-card">
            <div className="course-image">
              <Image src="/c_iti.png" alt="ITI" width={300} height={150} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
            </div>
            <div className="course-content with-image">
              <h3>ITI</h3>
            </div>
            <div className="course-footer">
              <Link href="/online-registration" className="online-reg-btn">Online Registration</Link>
            </div>
          </div>

          {/* Course 6 */}
          <div className="course-card">
            <div className="course-image">
              <Image src="/c_diploma.png" alt="Diploma" width={300} height={150} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
            </div>
            <div className="course-content with-image">
              <h3>Diploma |<br/>Management</h3>
            </div>
            <div className="course-footer">
              <Link href="/online-registration" className="online-reg-btn">Online Registration</Link>
            </div>
          </div>

          {/* Course 7 */}
          <div className="course-card">
            <div className="course-image">
              <Image src="/c_pharmacy.png" alt="Pharmacy" width={300} height={150} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
            </div>
            <div className="course-content with-image">
              <h3>Pharmacy</h3>
            </div>
            <div className="course-footer">
              <Link href="/online-registration" className="online-reg-btn">Online Registration</Link>
            </div>
          </div>

          {/* Course 8 */}
          <div className="course-card">
            <div className="course-image">
              <Image src="/c_arts.png" alt="12 ARTS" width={300} height={150} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
            </div>
            <div className="course-content with-image">
              <h3>12 ARTS</h3>
            </div>
            <div className="course-footer">
              <Link href="/online-registration" className="online-reg-btn">Online Registration</Link>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
