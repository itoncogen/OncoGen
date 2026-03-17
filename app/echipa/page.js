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
        role: '',
        details: '',
        avatar: '👩‍🔬'
    },
    {
        name: 'Prof. Dr. Țațu Carmen',
        role: '',
        details: '',
        avatar: '👩‍🔬'
    },
    {
        name: 'S.L. Dr. Nistor Daciana',
        role: '',
        details: '',
        avatar: '👩‍🔬'
    },
    {
        name: 'As. Univ. Dr. Calma Crenguța',
        role: '',
        details: '',
        avatar: '👩‍🔬'
    },
    {
        name: 'As. Univ. Dr. Crîsnic Daniela',
        role: '',
        details: '',
        avatar: '👩‍🔬'
    },
    {
        name: 'C.S. Dr. Ing. Bioteh. Ivan Alexandra',
        role: '',
        details: '',
        avatar: '👩‍🔬'
    },
    {
        name: 'C.S. Dr. Ing. Bioteh. Telea Ada',
        role: '',
        details: '',
        avatar: '👩‍🔬'
    },
    {
        name: 'C.S. Biochim. Zbîrcea Lauriana',
        role: '',
        details: '',
        avatar: '👩‍🔬'
    },
    {
        name: 'C.S. Biochim. Stanciu Claudia',
        role: '',
        details: '',
        avatar: '👩‍🔬'
    },
    {
        name: 'C.S. Med.Vet. Dr. Zambori Csilla',
        role: '',
        details: '',
        avatar: '👩‍🔬'
    },
    {
        name: 'As. C.S. Biolog Buzan Roxana',
        role: '',
        details: '',
        avatar: '👩‍🔬'
    },
    {
        name: 'As. C.S. Fiz. Furdui Marieta',
        role: '',
        details: '',
        avatar: '👩‍🔬'
    },
    {
        name: 'As. C.S. Fiz. Jucos Gianina',
        role: '',
        details: '',
        avatar: '👩‍🔬'
    },
    {
        name: 'As. C.S. Chim. Pricop Alexandra',
        role: '',
        details: '',
        avatar: '👩‍🔬'
    },
    {
        name: 'As. C.S. Ing. Bioteh. Simina Alina',
        role: '',
        details: '',
        avatar: '👩‍🔬'
    },
    {
        name: 'As.C.S. Dr. Farm. Oprean Camelia',
        role: '',
        details: '',
        avatar: '👩‍🔬'
    },
    {
        name: 'As. C.S. Biolog Grijincu Manuela',
        role: '',
        details: '',
        avatar: '👩‍🔬'
    },
    {
        name: 'Biolog Pp. Dr. Gai Elena',
        role: '',
        details: '',
        avatar: '👩‍🔬'
    },
    {
        name: 'Dr. Istodor Loredana',
        role: '',
        details: '',
        avatar: '👩‍🔬'
    },
    {
        name: 'Biol. Pp. Degan Lorena',
        role: '',
        details: '',
        avatar: '👩‍🔬'
    },
    {
        name: 'Biol. Sp. Tănăsescu Teodora',
        role: '',
        details: '',
        avatar: '👩‍🔬'
    },
    {
        name: 'Reg. Med. Pitic Carmen',
        role: '',
        details: '',
        avatar: '👩‍🔬'
    },
    {
        name: 'C.S. Dr. Biol. Pp. Anghel Simona',
        role: '',
        details: '',
        avatar: '👩‍🔬'
    },
    {
        name: 'C.S. Dr. Biol. Pp. Cristea Mirabela',
        role: '',
        details: '',
        avatar: '👩‍🔬'
    },
    {
        name: 'C.S. Dr. Chim.Pp. Lukinich-Gruia Alexandra',
        role: '',
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