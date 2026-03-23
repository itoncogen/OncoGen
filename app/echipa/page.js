import Link from 'next/link';

const fullTeam = [
    {
        name: 'Prof. Dr. Păunescu Virgil',
        role: 'Coordonator OncoGen',
        details: 'Director științific și fondator al centrului',
        avatar: '👨‍🔬',
        cvFile: null
    },
    {
        name: 'Prof. Dr. Panaitescu Carmen',
        role: 'Cercetător Științific I',
        details: 'Specialist în cercetare fundamentală',
        avatar: '👩‍🔬',
        cvFile: null
    },
    {
        name: 'Conf. Dr. Bojin Florina',
        role: 'Cercetător Științific I',
        details: 'Specialist în biologie celulară și imunoterapii',
        avatar: '👩‍🔬',
        cvFile: '/CV-personal-oncogen/CV_Bojin_Florina.pdf'
    },
    {
        name: 'Conf. Dr. Țațu Călin',
        role: 'Cercetător Științific I',
        details: 'Specialist în biologie moleculară și genetică',
        avatar: '👨‍🔬',
        cvFile: null
    },
    {
        name: 'Prof. Dr. Tănasie Gabriela',
        role: 'Cercetător Științific I',
        details: '',
        avatar: '👩‍🔬',
        cvFile: null
    },
    {
        name: 'Prof. Dr. Tatu Carmen',
        role: 'Cercetător Științific I',
        details: '',
        avatar: '👩‍🔬',
        cvFile: null
    },
    {
        name: 'S.L. Dr. Nistor Daciana',
        role: 'Cercetător Științific II',
        details: '',
        avatar: '👩‍🔬',
        cvFile: null
    },
    {
        name: 'As. Univ. Dr. Calma Crenguța',
        role: 'Cercetător Științific',
        details: '',
        avatar: '👩‍🔬',
        cvFile: '/CV-personal-oncogen/CV_Calma_Crenguța.pdf'
    },
    {
        name: 'As. Univ. Dr. Crîsnic Daniela',
        role: 'Cercetător Științific III',
        details: '',
        avatar: '👩‍🔬',
        cvFile: '/CV-personal-oncogen/CV_Crisnic_Daniela.pdf'
    },
    {
        name: 'C.S. Dr. Ing. Bioteh. Ivan Alexandra',
        role: 'Cercetător Științific III',
        details: '',
        avatar: '👩‍🔬',
        cvFile: null
    },
    {
        name: 'C.S. Dr. Ing. Bioteh. Telea Ada',
        role: 'Biotehnolog',
        details: '',
        avatar: '👩‍🔬',
        cvFile: null
    },
    {
        name: 'C.S. Biochim. Zbîrcea Lauriana',
        role: 'Biochimist',
        details: '',
        avatar: '👩‍🔬',
        cvFile: null
    },
    {
        name: 'C.S. Biochim. Stanciu Claudia',
        role: 'Biochimist',
        details: '',
        avatar: '👩‍🔬',
        cvFile: null
    },
    {
        name: 'C.S. Med.Vet. Dr. Zambori Csilla',
        role: 'Medic Veterinar',
        details: '',
        avatar: '👩‍🔬',
        cvFile: null
    },
    {
        name: 'As. C.S. Biolog Buzan Roxana',
        role: 'Biolog',
        details: '',
        avatar: '👩‍🔬',
        cvFile: '/CV-personal-oncogen/CV_Buzan_Roxana.pdf'
    },
    {
        name: 'As. C.S. Fiz. Furdui Marieta',
        role: 'Fizician Medical',
        details: '',
        avatar: '👩‍🔬',
        cvFile: null
    },
    {
        name: 'As. C.S. Fiz. Jucos Gianina',
        role: 'Fizician Medical',
        details: '',
        avatar: '👩‍🔬',
        cvFile: null
    },
    {
        name: 'As. C.S. Chim. Pricop Alexandra',
        role: 'Chimist',
        details: '',
        avatar: '👩‍🔬',
        cvFile: null
    },
    {
        name: 'As. C.S. Ing. Bioteh. Simina Alina',
        role: 'Biotehnolog',
        details: '',
        avatar: '👩‍🔬',
        cvFile: null
    },
    {
        name: 'As.C.S. Dr. Farm. Oprean Camelia',
        role: 'Farmacist',
        details: '',
        avatar: '👩‍🔬',
        cvFile: null
    },
    {
        name: 'As. C.S. Biolog Grijincu Manuela',
        role: 'Biolog Principal',
        details: '',
        avatar: '👩‍🔬',
        cvFile: null
    },
    {
        name: 'Biolog Pp. Dr. Gai Elena',
        role: 'Biolog',
        details: '',
        avatar: '👩‍🔬',
        cvFile: null
    },
    {
        name: 'Dr. Istodor Loredana',
        role: 'Medic Specialist',
        details: '',
        avatar: '👩‍🔬',
        cvFile: null
    },
    {
        name: 'Biol. Pp. Degan Lorena',
        role: 'Biolog',
        details: '',
        avatar: '👩‍🔬',
        cvFile: '/CV-personal-oncogen/CV_Degan_Lorena.pdf'
    },
    {
        name: 'Biol. Sp. Tănăsescu Teodora',
        role: 'Biolog',
        details: '',
        avatar: '👩‍🔬',
        cvFile: null
    },
    {
        name: 'C.S. Dr. Biol. Pp. Anghel Simona',
        role: 'Biolog Principal',
        details: '',
        avatar: '👩‍🔬',
        cvFile: '/CV-personal-oncogen/CV_Anghel_Simona.pdf'
    },
    {
        name: 'C.S. Dr. Biol. Pp. Cristea Mirabela',
        role: 'Biolog Principal',
        details: '',
        avatar: '👩‍🔬',
        cvFile: '/CV-personal-oncogen/CV_Cristea_Mirabela.pdf'
    },
    {
        name: 'C.S. Dr. Chim.Pp. Lukinich-Gruia Alexandra',
        role: 'Chimist Principal',
        details: '',
        avatar: '👩‍🔬',
        cvFile: null
    },
    {
        name: 'Reg. Med. Pitic Carmen',
        role: 'Reglator Medical',
        details: '',
        avatar: '👩‍🔬',
        cvFile: null
    }
    // Add all remaining organization members here
];

export default function EchipaCompletaPage() {
    return (
        <>
            <div className="breadcrumbs">
                <div className="container">
                    <Link href="/">Acasă</Link> / <Link href="/despre">Despre</Link> / <span>Echipa completă</span>
                </div>
            </div>

            <section className="hero-secondary">
                <div className="container">
                    <h1>Echipa Completă</h1>
                    <p>Lista completă cu toți membrii organizației OncoGen.</p>
                </div>
            </section>

            <section className="content-section bg-light">
                <div className="container">
                    <div className="team-grid">
                        {fullTeam.map((member) => (
                            <div key={member.name} className="team-card">
                                <div className="team-avatar">{member.avatar}</div>
                                <h3>{member.name}</h3>
                                <p><strong>{member.role}</strong></p>
                                <p>{member.details}</p>
                                {member.cvFile ? (
                                    <a
                                        href={member.cvFile}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="cv-button"
                                    >
                                        Vezi CV
                                    </a>
                                ) : (
                                    <span className="cv-unavailable">CV indisponibil</span>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
