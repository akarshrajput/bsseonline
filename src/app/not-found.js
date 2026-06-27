import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{ fontFamily: 'Arial, Helvetica, sans-serif', backgroundColor: '#fff', minHeight: '100vh', margin: 0, padding: 0 }}>

      <div style={{ padding: '50px 20px 30px 200px' }}>
        <h1 style={{ margin: 0, display: 'flex', alignItems: 'baseline', gap: '12px' }}>
          <span style={{ fontSize: '120px', color: '#cdcdcd', fontWeight: 'normal', letterSpacing: '-2px' }}>404</span>
          <span style={{ fontSize: '60px', color: '#cdcdcd', fontWeight: 'normal', letterSpacing: '-1px' }}>Not Found</span>
        </h1>

        <div style={{ marginTop: '35px', fontSize: '18px', color: '#000' }}>
          <p style={{ margin: '0 0 20px 0' }}>
            Please forward this error screen to www.bsseonline.com's <Link href="#" style={{ color: '#0000ee', textDecoration: 'underline' }}>WebMaster</Link>.
          </p>
          <p style={{ margin: 0 }}>
            The server cannot find the requested page:
          </p>
        </div>
      </div>

      <div style={{
        backgroundColor: '#2d3d4b',
        height: '200px',
        width: '100%',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        paddingLeft: '350px',
        overflow: 'hidden',
        marginTop: '25px'
      }}>

        {/* Warning Triangle Watermark */}
        <div style={{
          position: 'absolute',
          left: '0',
          top: '0',
          height: '100%',
          width: '280px',
        }}>
          <svg viewBox="0 0 100 100" style={{ height: '260px', width: '260px', position: 'absolute', top: '-20px', left: '-30px' }}>
            <polygon points="50,15 95,95 5,95" fill="none" stroke="#3f5163" strokeWidth="12" strokeLinejoin="miter" />
            <rect x="44" y="35" width="12" height="30" fill="#3f5163" />
            <circle cx="50" cy="80" r="7" fill="#3f5163" />
          </svg>
        </div>

        {/* Server Icon */}
        <div style={{
          width: '110px',
          height: '110px',
          backgroundColor: '#fff',
          borderRadius: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1,
          position: 'absolute',
          left: '240px'
        }}>
          <svg width="65" height="65" viewBox="0 0 24 24" fill="#555" style={{ position: 'relative', top: '3px', left: '-3px' }}>
            {/* Servers */}
            <rect x="2" y="3" width="20" height="5" rx="1" />
            <rect x="2" y="9" width="20" height="5" rx="1" />
            <rect x="2" y="15" width="20" height="5" rx="1" />
            {/* Lights */}
            <circle cx="5" cy="5.5" r="1" fill="#fff" />
            <circle cx="5" cy="11.5" r="1" fill="#fff" />
            <circle cx="5" cy="17.5" r="1" fill="#fff" />

            {/* Error Badge */}
            <circle cx="18" cy="18" r="6" fill="#666" />
            <path d="M15 15 L21 21 M21 15 L15 21" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        </div>

        {/* Text */}
        <div style={{ color: '#fff', fontSize: '16px', fontWeight: 'bold', zIndex: 1, position: 'relative', left: '30px' }}>
          www.bsseonline.com/cp_errordocument.shtml (port 443)
        </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: '80px' }}>
        <div style={{ color: '#f66820', fontSize: '40px', fontWeight: '900', fontStyle: 'italic', letterSpacing: '-1.5px', fontFamily: 'Arial, sans-serif' }}>
          cPanel<sup style={{ fontSize: '16px', fontStyle: 'normal' }}>®</sup>
        </div>
        <div style={{ color: '#0000ee', fontSize: '13px', marginTop: '8px', lineHeight: '1.4' }}>
          Copyright © 2026 WebPros International, L.L.C.<br />
          <a href="#" style={{ color: '#0000ee', textDecoration: 'none' }}>Privacy Policy</a>
        </div>
      </div>

    </div>
  );
}
