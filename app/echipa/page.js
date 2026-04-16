import Link from 'next/link';
import Image from 'next/image';

const fullTeam = [
    {
        name: 'Prof. Dr. Păunescu Virgil',
        role: 'Coordonator OncoGen',
        details: 'Director științific și fondator al centrului',
        avatar: '/imagini-personal-oncogen/Virgil_Paunescu.jpg',
        cvFile: '/CV-personal-oncogen/CV_Paunescu_Virgil.pdf'
    },
    {
        name: 'Prof. Dr. Panaitescu Carmen',
        role: 'Cercetător Științific I',
        details: 'Specialist în cercetare fundamentală',
        avatar: '/imagini-personal-oncogen/Carmen_Bunu_Panaitescu.jpg',
        cvFile: '/CV-personal-oncogen/CV_Panaitescu_Carmen.pdf'
    },
    {
        name: 'Conf. Dr. Bojin Florina',
        role: 'Cercetător Științific I',
        details: 'Specialist în biologie celulară și imunoterapii',
        avatar: '/imagini-personal-oncogen/Florina_Bojin.jpeg',
        cvFile: '/CV-personal-oncogen/CV_Bojin_Florina.pdf'
    },
    {
        name: 'Conf. Dr. Țațu Călin',
        role: 'Cercetător Științific I',
        details: 'Specialist în biologie moleculară și genetică',
        avatar: '/imagini-personal-oncogen/Calin_Tatu.jpeg',
        cvFile: '/CV-personal-oncogen/CV_Tatu_Calin.pdf'
    },
    {
        name: 'Prof. Dr. Tănasie Gabriela',
        role: 'Cercetător Științific I',
        details: '',
        avatar: '/imagini-personal-oncogen/Gabriela_Tanasie.jpg',
        cvFile: '/CV-personal-oncogen/CV_Tanasie_Gabriela.pdf'
    },
    {
        name: 'Prof. Dr. Tatu Carmen',
        role: 'Cercetător Științific I',
        details: '',
        avatar: '/images/profile-avatar.svg',
        cvFile: '/CV-personal-oncogen/CV_Tatu_Carmen.pdf'
    },
    {
        name: 'S.L. Dr. Nistor Daciana',
        role: 'Cercetător Științific II',
        details: '',
        avatar: '/imagini-personal-oncogen/Daciana_Nistor.jpeg',
        cvFile: '/CV-personal-oncogen/CV_Nistor_Daciana.pdf'
    },
    {
        name: 'As. Univ. Dr. Calma Crenguța',
        role: 'Cercetător Științific',
        details: '',
        avatar: '/images/profile-avatar.svg',
        cvFile: '/CV-personal-oncogen/CV_Calma_Crenguța.pdf'
    },
    {
        name: 'As. Univ. Dr. Crîsnic Daniela',
        role: 'Cercetător Științific III',
        details: '',
        avatar: '/images/profile-avatar.svg',
        cvFile: '/CV-personal-oncogen/CV_Crisnic_Daniela.pdf'
    },
    {
        name: 'C.S. Dr. Ing. Bioteh. Ivan Alexandra',
        role: 'Cercetător Științific III',
        details: '',
        avatar: '/imagini-personal-oncogen/Alexandra_Ivan.jpeg',
        cvFile: '/CV-personal-oncogen/CV_Ivan_Alexandra.pdf'
    },
    {
        name: 'C.S. Dr. Ing. Bioteh. Telea Ada',
        role: 'Biotehnolog',
        details: '',
        avatar: '/images/profile-avatar.svg',
        cvFile: '/CV-personal-oncogen/CV_Telea_Ada.pdf'
    },
    {
        name: 'C.S. Biochim. Zbîrcea Lauriana',
        role: 'Biochimist',
        details: '',
        avatar: '/imagini-personal-oncogen/Lauriana_Zbarcea.jpeg',
        cvFile: '/CV-personal-oncogen/CV_Zbircea_Lauriana.pdf'
    },
    {
        name: 'C.S. Biochim. Stanciu Claudia',
        role: 'Biochimist',
        details: '',
        avatar: '/imagini-personal-oncogen/Claudia_Stanciu.jpeg',
        cvFile: '/CV-personal-oncogen/CV_Stanciu_Claudia.pdf'
    },
    {
        name: 'C.S. Med.Vet. Dr. Zambori Csilla',
        role: 'Medic Veterinar',
        details: '',
        avatar: '/images/profile-avatar.svg',
        cvFile: null
    },
    {
        name: 'As. C.S. Biolog Buzan Roxana',
        role: 'Biolog',
        details: '',
        avatar: '/imagini-personal-oncogen/Roxana_Buzan.jpeg',
        cvFile: '/CV-personal-oncogen/CV_Buzan_Roxana.pdf'
    },
    {
        name: 'As. C.S. Fiz. Furdui Marieta',
        role: 'Fizician Medical',
        details: '',
        avatar: '/imagini-personal-oncogen/Marieta_Furdui.jpeg',
        cvFile: '/CV-personal-oncogen/CV_Furdui_Marieta.pdf'
    },
    {
        name: 'As. C.S. Fiz. Jucos Gianina',
        role: 'Fizician Medical',
        details: '',
        avatar: '/images/profile-avatar.svg',
        cvFile: '/CV-personal-oncogen/CV_Jucos_Gianina.pdf'
    },
    {
        name: 'As. C.S. Chim. Pricop Alexandra',
        role: 'Chimist',
        details: '',
        avatar: '/images/profile-avatar.svg',
        cvFile: '/CV-personal-oncogen/CV_Pricop_Alexandra.pdf'
    },
    {
        name: 'As. C.S. Ing. Bioteh. Simina Alina',
        role: 'Biotehnolog',
        details: '',
        avatar: '/images/profile-avatar.svg',
        cvFile: null
    },
    {
        name: 'As.C.S. Dr. Farm. Oprean Camelia',
        role: 'Farmacist',
        details: '',
        avatar: '/images/profile-avatar.svg',
        cvFile: '/CV-personal-oncogen/CV_Oprean_Camelia.pdf'
    },
    {
        name: 'As. C.S. Biolog Grijincu Manuela',
        role: 'Biolog Principal',
        details: '',
        avatar: '/imagini-personal-oncogen/Manuela_Grijincu.jpeg',
        cvFile: '/CV-personal-oncogen/CV_Grijincu_Manuela.pdf'
    },
    {
        name: 'Biolog Pp. Dr. Gai Elena',
        role: 'Biolog',
        details: '',
        avatar: '/imagini-personal-oncogen/Elena_Gai.jpeg',
        cvFile: null
    },
    {
        name: 'Dr. Istodor Loredana',
        role: 'Medic Specialist',
        details: '',
        avatar: '/imagini-personal-oncogen/Loredana_Istodor.jpeg',
        cvFile: '/CV-personal-oncogen/CV_Istodor_Loredana.pdf'
    },
    {
        name: 'Biol. Pp. Degan Lorena',
        role: 'Biolog',
        details: '',
        avatar: '/imagini-personal-oncogen/Lorena_Degan.jpeg',
        cvFile: '/CV-personal-oncogen/CV_Degan_Lorena.pdf'
    },
    {
        name: 'Biol. Sp. Tănăsescu Teodora',
        role: 'Biolog',
        details: '',
        avatar: '/imagini-personal-oncogen/Teodora_Tanasescu.jpeg',
        cvFile: '/CV-personal-oncogen/CV_Tanasescu_Teodora.pdf'
    },
    {
        name: 'C.S. Dr. Biol. Pp. Anghel Simona',
        role: 'Biolog Principal',
        details: '',
        avatar: '/images/profile-avatar.svg',
        cvFile: '/CV-personal-oncogen/CV_Anghel_Simona.pdf'
    },
    {
        name: 'C.S. Dr. Biol. Pp. Cristea Mirabela',
        role: 'Biolog Principal',
        details: '',
        avatar: '/imagini-personal-oncogen/Mirabela_Cristea.jpeg',
        cvFile: '/CV-personal-oncogen/CV_Cristea_Mirabela.pdf'
    },
    {
        name: 'C.S. Dr. Chim.Pp. Lukinich-Gruia Alexandra',
        role: 'Chimist Principal',
        details: '',
        avatar: '/images/profile-avatar.svg',
        cvFile: '/CV-personal-oncogen/CV_Lukinich_Gruia_Alexandra.pdf'
    },
    {
        name: 'Reg. Med. Pitic Carmen',
        role: 'Reglator Medical',
        details: '',
        avatar: '/imagini-personal-oncogen/Carmen_Pitic.jpeg',
        cvFile: '/CV-personal-oncogen/CV_Pitic_Carmen.pdf'
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
                                <div className="team-avatar">
                                    <Image
                                        src={member.avatar}
                                        alt={member.name}
                                        width={200}
                                        height={200}
                                        style={{ objectFit: 'cover', objectPosition: 'center top' }}
                                    />
                                </div>
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
