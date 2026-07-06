import Link from 'next/link';

export const metadata = {
    title: 'Anunțuri | OncoGen',
    description: 'Anunțurile și comunicatele oficiale ale Centrului OncoGen.',
};

export default function AnunturiPage() {
    return (
        <>
            <div className="breadcrumbs">
                <div className="container">
                    <Link href="/">Acasă</Link> / <Link href="/noutati">Noutăți</Link> /{' '}
                    <span>Anunțuri</span>
                </div>
            </div>

            <section className="hero-secondary">
                <div className="container">
                    <h1>Anunțuri</h1>
                    <p>Comunicatele și anunțurile oficiale ale Centrului OncoGen.</p>
                </div>
            </section>

            <section className="content-section">
                <div className="container">
                    <article className="anunt-card">
                        <div className="anunt-card-media">
                            <img
                                src="/imagini-personal-oncogen/Tudor_Oprea.jpeg"
                                alt="Prof. Dr. Tudor Oprea, MD PhD"
                                className="anunt-card-photo"
                            />
                            <p className="anunt-card-caption">
                                <strong>Tudor Oprea, MD PhD</strong>
                                <br />
                                Drug hunter. Cacciatore di farmaci.
                            </p>
                        </div>

                        <div className="anunt-card-body">
                            <p>
                                Fourty years ago (6/29/1986), having finished 2nd year of medical school at
                                the Victor Babeș University of Medicine and Pharmacy, I started as a volunteer
                                nurse with Spitalul Clinic Județean de Urgență Pius Brînzeu Timișoara, under
                                the guidance of emergency physicians Prof. Dr. Aurel Mogoșanu and Dr. Suzana
                                Dumele.
                            </p>
                            <p>
                                Within days, I was drawn into intensive care and emergency medicine. To their
                                credit, they mentored me for nearly 1½ years. Then, in 1987, the aggressive
                                policies implemented by Nicolae Ceaușescu, aimed at paying Romania&apos;s
                                national debt, hit the medical sector. Suddenly, 100 mg hydrocortisone acetate
                                vials, were no longer available.
                            </p>
                            <p>
                                Emergency medicine turned into No medicine overnight. I walked away from a
                                clinical career because I lost confidence in my ability to help patients back
                                in 1987.
                            </p>
                            <p>
                                Through a series of fortunate coincidences, catalyzed by Prof. Dr. Francisc
                                Schneider and Acad. Zeno Simon, as well as Prof. Philip M. Dean (Cambridge,
                                UK), I discovered basic science, physiology, pharmacology and QSAR, as a
                                career path for research. The elements of #AIML in drug discovery were there
                                in 1989.
                            </p>
                            <p>
                                Fast forward to today, I am working in #AI in #drugdiscovery at Dompé,
                                expanding the #Exscalate program. And thanks to Marcello Allegretti, I am an
                                #RnDeepThinkerDoingScience.
                            </p>
                            <p><strong>Let&apos;s Go!!!</strong></p>
                        </div>
                    </article>
                </div>
            </section>
        </>
    );
}
