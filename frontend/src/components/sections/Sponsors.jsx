/**
 * URLs des logos directement depuis Wikimedia Commons (domaine public)
 * Format Wikimedia : https://upload.wikimedia.org/wikipedia/commons/thumb/[hash1]/[hash2]/[fichier]/[largeur]px-[fichier].png
 */
const sponsors = [
  {
    name: 'Orange Money',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Orange_logo.svg/160px-Orange_logo.svg.png',
    url: 'https://www.orange.ci',
  },
  {
    name: 'BCEAO',
    logo: 'https://www.bceao.int/themes/medianet/image/png/logo_fr.png',
    url: 'https://www.bceao.int',
  },
  {
    name: 'Huawei',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Huawei.svg/160px-Huawei.svg.png',
    url: 'https://www.huawei.com',
  },
  {
    name: 'Union Africaine',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Flag_of_the_African_Union.svg/120px-Flag_of_the_African_Union.svg.png',
    url: 'https://au.int',
  },
  {
    name: 'CEDEAO',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_ECOWAS.svg/120px-Flag_of_ECOWAS.svg.png',
    url: 'https://www.ecowas.int',
  },
  {
    name: 'FAO',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/FAO_logo.svg/120px-FAO_logo.svg.png',
    url: 'https://www.fao.org',
  },
  {
    name: 'PNUD',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/UNDP_logo.svg/160px-UNDP_logo.svg.png',
    url: 'https://www.undp.org',
  },
  {
    name: 'Banque Africaine de Développement',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/African_Development_Bank_logo.svg/160px-African_Development_Bank_logo.svg.png',
    url: 'https://www.afdb.org',
  },
  {
    name: 'SGS',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/SGS_SA_logo.svg/120px-SGS_SA_logo.svg.png',
    url: 'https://www.sgs.com',
  },
  {
    name: 'BOAD',
    logo: 'https://upload.wikimedia.org/wikipedia/fr/thumb/5/5f/Logo-BOAD.png/160px-Logo-BOAD.png',
    url: 'https://www.boad.org',
  },
  {
    name: 'Olam Agri',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Olam_International_logo.svg/160px-Olam_International_logo.svg.png',
    url: 'https://www.olamagri.com',
  },
  {
    name: 'OFI',
    logo: null,
    short: 'ofi',
    color: '#005baa',
    url: 'https://www.ofi.com',
  },
  {
    name: 'MSC',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/MSC_logo.svg/160px-MSC_logo.svg.png',
    url: 'https://www.msc.com',
  },
  {
    name: 'Ministère du Commerce CI',
    logo: null,
    short: 'Min. Commerce',
    color: '#1a7a2e',
    url: 'https://www.commerce.gouv.ci',
  },
  {
    name: 'Ministère Agriculture CI',
    logo: null,
    short: 'Min. Agriculture',
    color: '#E8420A',
    url: '#',
  },
  {
    name: 'HSF',
    logo: null,
    short: 'HSF',
    color: '#cc6600',
    url: '#',
  },
  {
    name: 'AGL',
    logo: null,
    short: 'AGL',
    color: '#E8420A',
    url: '#',
  },
  {
    name: 'GCF',
    logo: null,
    short: 'GCF',
    color: '#009966',
    url: '#',
  },
]

function LogoCard({ name, logo, url, short, color = '#999' }) {
  return (
    <a
      href={url}
      target={url !== '#' ? '_blank' : '_self'}
      rel="noopener noreferrer"
      title={name}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '10px 14px',
        minWidth: '100px',
        height: '68px',
        flexShrink: 0,
        textDecoration: 'none',
        transition: 'transform 0.2s, filter 0.2s',
        filter: 'grayscale(15%)',
      }}
      onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.1)'; e.currentTarget.style.filter = 'grayscale(0%)' }}
      onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.filter = 'grayscale(15%)' }}
    >
      {logo ? (
        <img
          src={logo}
          alt={name}
          loading="lazy"
          style={{ maxHeight: '42px', maxWidth: '88px', objectFit: 'contain' }}
          onError={e => {
            e.target.style.display = 'none'
            e.target.parentNode.querySelector('.logo-fallback').style.display = 'flex'
          }}
        />
      ) : null}
      {/* Fallback */}
      <div
        className="logo-fallback"
        style={{
          display: logo ? 'none' : 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '88px',
          height: '42px',
          backgroundColor: (color || '#999') + '18',
          border: `1.5px solid ${color || '#999'}40`,
          borderRadius: '6px',
          padding: '4px 8px',
        }}
      >
        <span style={{ color: color || '#999', fontWeight: 900, fontSize: '11px', textAlign: 'center', lineHeight: 1.2 }}>
          {short || name.split(' ').slice(0, 2).join(' ')}
        </span>
      </div>
    </a>
  )
}

export default function Sponsors() {
  return (
    <section id="sponsors" style={{ backgroundColor: '#ffffff', padding: '60px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>

        {/* Titre */}
        <h2 style={{
          textAlign: 'center',
          fontSize: 'clamp(1.4rem, 3vw, 1.8rem)',
          fontWeight: 900,
          color: '#E8420A',
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
          marginBottom: '32px',
        }}>
          Nos Sponsors
        </h2>

        {/* Bannière */}
        <div style={{
          backgroundColor: '#fafafa',
          border: '1px solid #e5e5e5',
          borderRadius: '12px',
          padding: '24px',
          marginBottom: '40px',
        }}>
          {/* En-tête */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            paddingBottom: '18px',
            marginBottom: '18px',
            borderBottom: '1px solid #e5e7eb',
            flexWrap: 'wrap',
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '6px 20px', borderRight: '1px solid #e5e7eb', marginRight: '8px', flexShrink: 0 }}>
              <span style={{ color: '#E8420A', fontWeight: 900, fontSize: '20px', lineHeight: 1 }}>FENACI</span>
              <span style={{ color: '#E8420A', fontWeight: 700, fontSize: '13px' }}>2026</span>
              <span style={{ color: '#bbb', fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Salon International</span>
            </div>
            <p style={{ color: '#aaa', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.07em', fontWeight: 600, margin: 0, flex: 1, lineHeight: 1.5 }}>
              Ministère de l'Agriculture · Ministère des Ressources Animales et Halieutiques · Ministère des Eaux et Forêts · Ministère de l'Environnement, du Développement Durable et de la Transition Écologique
            </p>
          </div>

          {/* Logos */}
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '2px' }}>
            {sponsors.map((s) => (
              <LogoCard key={s.name} {...s} />
            ))}
            {/* Emplacement disponible */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '10px 14px', minWidth: '100px', height: '68px', flexShrink: 0 }}>
              <div style={{ width: '88px', height: '42px', backgroundColor: '#fff4f1', border: '2px dashed #E8420A', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ color: '#E8420A', fontSize: '9px', fontWeight: 700, textAlign: 'center' }}>VOTRE LOGO</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center' }}>
          <p style={{ color: '#6b7280', fontSize: '15px', marginBottom: '16px' }}>Vous souhaitez apparaître parmi nos sponsors ?</p>
          <a href="/contact" style={{ display: 'inline-block', backgroundColor: '#E8420A', color: 'white', padding: '13px 32px', borderRadius: '999px', fontWeight: 700, fontSize: '15px', textDecoration: 'none' }}>
            Devenir Sponsor FENACI 2026
          </a>
        </div>

      </div>
    </section>
  )
}
