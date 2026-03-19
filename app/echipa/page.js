import Link from 'next/link';

const fullTeam = [
    {
        name: 'Prof. Dr. Păunescu Virgil',
        role: 'Coordonator OncoGen',
        details: 'Director științific și fondator al centrului',
        avatar: '👨‍🔬'
    },
    {
        name: 'Prof. Dr. Panaitescu Carmen',
        role: 'Cercetător Științific I',
        details: 'Specialist în cercetare fundamentală',
        avatar: '👩‍🔬'
    },
    {
        name: 'Conf. Dr. Bojin Florina',
        role: 'Cercetător Științific I',
        details: 'Specialist în biologie celulară și imunoterapii',
        avatar: '👩‍🔬'
    },
    {
        name: 'Conf. Dr. Țațu Călin',
        role: 'Cercetător Științific I',
        details: 'Specialist în biologie moleculară și genetică',
        avatar: '👨‍🔬'
    },
    {
        name: 'Prof. Dr. Tănasie Gabriela',
        role: 'Cercetător Științific I',
        details: '',
        avatar: '👩‍🔬'
    },
    {
        name: 'Prof. Dr. Tatu Carmen',
        role: 'Cercetător Științific I',
        details: '',
        avatar: '👩‍🔬'
    },
    {
        name: 'S.L. Dr. Nistor Daciana',
        role: 'Cercetător Științific II',
        details: '',
        avatar: '👩‍🔬'
    },
    {
        name: 'As. Univ. Dr. Calma Crenguța',
        role: 'Cercetător Științific',
        details: '',
        avatar: '👩‍🔬'
    },
    {
        name: 'As. Univ. Dr. Crîsnic Daniela',
        role: 'Cercetător Științific III',
        details: '',
        avatar: '👩‍🔬'
    },
    {
        name: 'C.S. Dr. Ing. Bioteh. Ivan Alexandra',
        role: 'Cercetător Științific III',
        details: '',
        avatar: '👩‍🔬'
    },
    {
        name: 'C.S. Dr. Ing. Bioteh. Telea Ada',
        role: 'Biotehnolog',
        details: '',
        avatar: '👩‍🔬'
    },
    {
        name: 'C.S. Biochim. Zbîrcea Lauriana',
        role: 'Biochimist',
        details: '',
        avatar: '👩‍🔬'
    },
    {
        name: 'C.S. Biochim. Stanciu Claudia',
        role: 'Biochimist',
        details: '',
        avatar: '👩‍🔬'
    },
    {
        name: 'C.S. Med.Vet. Dr. Zambori Csilla',
        role: 'Medic Veterinar',
        details: '',
        avatar: '👩‍🔬'
    },
    {
        name: 'As. C.S. Biolog Buzan Roxana',
        role: 'Biolog',
        details: '',
        avatar: '👩‍🔬'
    },
    {
        name: 'As. C.S. Fiz. Furdui Marieta',
        role: 'Fizician Medical',
        details: '',
        avatar: '👩‍🔬'
    },
    {
        name: 'As. C.S. Fiz. Jucos Gianina',
        role: 'Fizician Medical',
        details: '',
        avatar: '👩‍🔬'
    },
    {
        name: 'As. C.S. Chim. Pricop Alexandra',
        role: 'Chimist',
        details: '',
        avatar: '👩‍🔬'
    },
    {
        name: 'As. C.S. Ing. Bioteh. Simina Alina',
        role: 'Biotehnolog',
        details: '',
        avatar: '👩‍🔬'
    },
    {
        name: 'As.C.S. Dr. Farm. Oprean Camelia',
        role: 'Farmacist',
        details: '',
        avatar: '👩‍🔬'
    },
    {
        name: 'As. C.S. Biolog Grijincu Manuela',
        role: 'Biolog Principal',
        details: '',
        avatar: '👩‍🔬'
    },
    {
        name: 'Biolog Pp. Dr. Gai Elena',
        role: 'Biolog',
        details: '',
        avatar: '👩‍🔬'
    },
    {
        name: 'Dr. Istodor Loredana',
        role: 'Medic Specialist',
        details: '',
        avatar: '👩‍🔬'
    },
    {
        name: 'Biol. Pp. Degan Lorena',
        role: 'Biolog',
        details: '',
        avatar: '👩‍🔬'
    },
    {
        name: 'Biol. Sp. Tănăsescu Teodora',
        role: 'Biolog',
        details: '',
        avatar: '👩‍🔬'
    },
    {
        name: 'C.S. Dr. Biol. Pp. Anghel Simona',
        role: 'Biolog Principal',
        details: '',
        avatar: '👩‍🔬'
    },
    {
        name: 'C.S. Dr. Biol. Pp. Cristea Mirabela',
        role: 'Biolog Principal',
        details: '',
        avatar: '👩‍🔬'
    },
    {
        name: 'C.S. Dr. Chim.Pp. Lukinich-Gruia Alexandra',
        role: 'Chimist Principal',
        details: '',
        avatar: '👩‍🔬'
    },
    {
        name: 'Reg. Med. Pitic Carmen',
        role: 'Reglator Medical',
        details: '',
        avatar: '👩‍🔬'
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
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}