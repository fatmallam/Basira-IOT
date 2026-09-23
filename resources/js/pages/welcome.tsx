import React, { useEffect, useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import '../../css/welcome.css';

const HERO_IMAGE =
'https://scx2.b-cdn.net/gfx/news/2025/using-the-tools-of-ai-1.jpg';

const FAMILY_IMAGE =
'https://www.habbihabbi.com/cdn/shop/articles/HoneyNSilk_4x3_d06a8c96-1d2d-4d99-bca0-3cad4e41fe95_720x.jpg?v=1645744507';

const ORG_IMAGE =
'https://images.squarespace-cdn.com/content/v1/57b35be0414fb514a39d2dc6/1565800142481-O5WNLRRUT7XRWPPRKRQB/20180924_cc_2123.jpg';

type IconName =
| 'shield'
| 'route'
| 'bell'
| 'users'
| 'building'
| 'cane'
| 'radar'
| 'pin'
| 'phone'
| 'arrow'
| 'check'
| 'heart'
| 'menu'
| 'close';

function Icon({ name, size = 22 }: { name: IconName; size?: number }) {
const common = {
width: size,
height: size,
viewBox: '0 0 24 24',
fill: 'none',
stroke: 'currentColor',
strokeWidth: 1.8,
strokeLinecap: 'round' as const,
strokeLinejoin: 'round' as const,
'aria-hidden': true,
};

const paths: Record<IconName, React.ReactNode> = {
    shield: (
        <>
            <path d="M12 3 20 6v5c0 5.2-3.3 8.7-8 10-4.7-1.3-8-4.8-8-10V6l8-3Z" />
            <path d="m9 12 2 2 4-4" />
        </>
    ),
    route: (
        <>
            <circle cx="6" cy="18" r="2" />
            <circle cx="18" cy="6" r="2" />
            <path d="M8 18h3a3 3 0 0 0 3-3V9a3 3 0 0 1 3-3h0" />
        </>
    ),
    bell: (
        <>
            <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" />
            <path d="M10 21h4" />
        </>
    ),
    users: (
        <>
            <circle cx="9" cy="8" r="3" />
            <circle cx="17" cy="9" r="2.5" />
            <path d="M3.5 20a5.5 5.5 0 0 1 11 0" />
            <path d="M14 15a5 5 0 0 1 6.5 5" />
        </>
    ),
    building: (
        <>
            <path d="M4 21V5l8-3 8 3v16" />
            <path d="M8 8h1M15 8h1M8 12h1M15 12h1M8 16h1M15 16h1" />
            <path d="M10 21v-3h4v3" />
        </>
    ),
    cane: (
        <>
            <path d="M7 4c3 0 4.5 1.5 4.5 3.5S10 11 8 12l-2 1" />
            <path d="M8 12 4 21" />
            <path d="M16 5v14" />
            <path d="M13 19h6" />
        </>
    ),
    radar: (
        <>
            <path d="M12 3a9 9 0 1 0 9 9" />
            <path d="M12 7a5 5 0 1 0 5 5" />
            <path d="M12 11a1 1 0 1 0 1 1" />
            <path d="m12 12 8-6" />
        </>
    ),
    pin: (
        <>
            <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
            <circle cx="12" cy="10" r="2.5" />
        </>
    ),
    phone: (
        <>
            <rect x="6" y="2.5" width="12" height="19" rx="2.5" />
            <path d="M10 5h4M10 18.5h4" />
        </>
    ),
    arrow: (
        <>
            <path d="M5 12h14" />
            <path d="m13 6 6 6-6 6" />
        </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
    heart: (
        <path d="M20.8 8.9c0 5.1-8.8 10.2-8.8 10.2S3.2 14 3.2 8.9A4.7 4.7 0 0 1 12 6.3a4.7 4.7 0 0 1 8.8 2.6Z" />
    ),
    menu: (
        <>
            <path d="M4 7h16M4 12h16M4 17h16" />
        </>
    ),
    close: (
        <>
            <path d="m6 6 12 12M18 6 6 18" />
        </>
    ),
};

return <svg {...common}>{paths[name]}</svg>;

}

function Logo() {
return (
<div className="brand">
<div className="brand-mark eye-brand-mark" aria-label="Basira eye logo">
<svg viewBox="0 0 48 32" width="27" height="22" fill="none" aria-hidden="true">
<path d="M3 16C10.5 7.5 19 3.5 24 3.5S37.5 7.5 45 16C37.5 24.5 29 28.5 24 28.5S10.5 24.5 3 16Z" stroke="currentColor" strokeWidth="2.8" strokeLinejoin="round"/>
<circle cx="24" cy="16" r="6" fill="currentColor"/>
<circle cx="22" cy="14" r="1.7" fill="white" opacity=".95"/>
</svg>
</div>
<div>
<strong>بصيرة</strong>
<small>BASIRA</small>
</div>
</div>
);
}

const steps = [
['cane', 'العصا تستشعر', 'تلتقط البيئة المحيطة بالمستخدم أثناء الحركة.'],
['radar', 'تكتشف المخاطر', 'تتعرف على العوائق والمخاطر القريبة.'],
['bell', 'تنبه المستخدم', 'تنبيه صوتي أو اهتزازي في الوقت المناسب.'],
['pin', 'تحدد الموقع', 'يتم تحديث الموقع عند الحاجة والمتابعة.'],
['phone', 'ترسل التنبيه', 'في الحالات المهمة يصل التنبيه للأسرة.'],
['users', 'تبقى العائلة على اطلاع', 'تظهر الحالة والتنبيهات في لوحة المتابعة.'],
] as const;

const features = [
{
icon: 'shield' as IconName,
tone: 'red',
title: 'الأمان أولًا',
text: 'وظائف مصممة حول السلامة والاستجابة السريعة للمواقف المهمة.',
bullets: ['تنبيهات الطوارئ', 'اكتشاف العوائق', 'متابعة حالة الجهاز'],
},
{
icon: 'route' as IconName,
tone: 'blue',
title: 'المتابعة الذكية',
text: 'رؤية أوضح للحالة والموقع والتنبيهات من مكان واحد.',
bullets: ['موقع مباشر', 'المناطق الآمنة', 'سجل الحركة والتنبيهات'],
},
{
icon: 'users' as IconName,
tone: 'orange',
title: 'للعائلات',
text: 'اطمئنان أكبر دون تحويل المتابعة اليومية إلى عبء.',
bullets: ['إشعارات مهمة', 'صلاحيات للعائلة', 'متابعة حالة المستخدم'],
},
{
icon: 'building' as IconName,
tone: 'green',
title: 'للجمعيات',
text: 'أدوات تساعد المؤسسات على إدارة المستفيدين والأجهزة بكفاءة.',
bullets: ['إدارة المستخدمين', 'إدارة الأجهزة', 'تقارير ومتابعة'],
},
];

export default function Welcome() {
const [lang, setLang] = useState<'ar' | 'en'>('ar');
const [mobileOpen, setMobileOpen] = useState(false);
const [darkMode, setDarkMode] = useState(false);

useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
    return () => {
        document.documentElement.dir = 'ltr';
    };
}, [lang]);

const ar = lang === 'ar';

const t = {
    home: ar ? 'الرئيسية' : 'Home',
    how: ar ? 'كيف تعمل؟' : 'How it works',
    features: ar ? 'المميزات' : 'Features',
    families: ar ? 'للأسر' : 'For families',
    ngos: ar ? 'للجمعيات' : 'For organizations',
    about: ar ? 'عن بصيرة' : 'About Basira',
    login: ar ? 'تسجيل الدخول' : 'Login',
    heroEyebrow: ar ? 'تقنية في خدمة الإنسان' : 'Technology in service of people',
    heroTitle: ar
        ? 'استقلالية أكبر للشخص، وطمأنينة أكبر لمن تحب.'
        : 'More independence for the person, more peace of mind for those who care.',
    heroText: ar
        ? 'بصيرة منظومة مساعدة ذكية تجمع بين العصا الذكية ومنصة المتابعة، لمساعدة المستخدم على التحرك باستقلالية أكبر مع إبقاء الأسرة على اطلاع عند الحالات المهمة والطوارئ.'
        : 'Basira combines a smart assistive cane with a monitoring platform to support independent movement while keeping families informed when important events or emergencies occur.',
    start: ar ? 'ابدأ مع بصيرة' : 'Start with Basira',
    discover: ar ? 'اكتشف كيف تعمل' : 'Discover how it works',
    trust1: ar ? 'تقنية موثوقة وآمنة' : 'Safety-focused technology',
    trust2: ar ? 'مبني بمعايير الوصول الرقمية' : 'Accessibility-minded',
    trust3: ar ? 'دعم الجمعيات والمنظمات' : 'For organizations',
    trust4: ar ? 'مناسب للأفراد والأسر' : 'For individuals & families',
    howTitle: ar ? 'كيف تعمل بصيرة؟' : 'How does Basira work?',
    howSub: ar
        ? 'من استشعار البيئة إلى وصول التنبيه، كل خطوة لها هدف واضح.'
        : 'From sensing the environment to delivering an alert, every step has a clear purpose.',
    featureTitle: ar ? 'مميزات تصنع فرقًا حقيقيًا' : 'Features designed around real needs',
    featureSub: ar
        ? 'منظومة واحدة تربط المستخدم بالعصا والأسرة ولوحة المتابعة.'
        : 'One system connecting the user, the cane, the family and the monitoring dashboard.',
    dashKicker: ar ? 'لوحة تحكم متكاملة' : 'Complete dashboard',
    dashTitle: ar ? 'كل ما تحتاجه لمتابعة المستخدمين في مكان واحد' : 'Everything you need in one place',
    dashText: ar
        ? 'تابع المستخدمين والأجهزة والتنبيهات والموقع وسجل الحركة من لوحة واضحة تساعدك على اتخاذ الإجراء المناسب في الوقت المناسب.'
        : 'Monitor users, devices, alerts, location and activity from one clear dashboard.',
    dashButton: ar ? 'استكشف لوحة التحكم' : 'Explore dashboard',
    familyTitle: ar ? 'طمأنينة أكبر للأسرة' : 'More peace of mind for families',
    familyText: ar
        ? 'تابع حالة من تحب، واستقبل التنبيهات المهمة، واعرف متى تحتاج إلى التدخل.'
        : 'Follow the status of someone you care about and receive important alerts when action may be needed.',
    familyButton: ar ? 'تعرف على تجربة الأسرة' : 'Family experience',
    orgTitle: ar ? 'أدوات أقوى للجمعيات' : 'Better tools for organizations',
    orgText: ar
        ? 'أدر المستفيدين والأجهزة والتنبيهات من مكان واحد، مع رؤية أوضح للعمليات اليومية.'
        : 'Manage beneficiaries, devices and alerts from one place with clearer operational visibility.',
    orgButton: ar ? 'للجمعيات والمنظمات' : 'For organizations',
    ctaTitle: ar ? 'جاهز تبدأ مع بصيرة؟' : 'Ready to start with Basira?',
    ctaText: ar
        ? 'تعرّف على المنصة وسجّل الدخول للوصول إلى لوحة التحكم.'
        : 'Explore the platform and sign in to access the dashboard.',
};

return (
    <>
        <Head title={ar ? 'بصيرة — تقنية في خدمة الإنسان' : 'Basira — Technology in service of people'} />

        <div className={`basira-page ${darkMode ? 'theme-dark' : ''}`}>
            <header className="site-header">
                <div className="container nav-inner">
                    <a href="#home" className="logo-link">
                        <Logo />
                    </a>

                    <nav className={`main-nav ${mobileOpen ? 'is-open' : ''}`}>
                        <a href="#home" onClick={() => setMobileOpen(false)}>{t.home}</a>
                        <a href="#how" onClick={() => setMobileOpen(false)}>{t.how}</a>
                        <a href="#features" onClick={() => setMobileOpen(false)}>{t.features}</a>
                        <a href="#families" onClick={() => setMobileOpen(false)}>{t.families}</a>
                        <a href="#organizations" onClick={() => setMobileOpen(false)}>{t.ngos}</a>
                        <a href="#about" onClick={() => setMobileOpen(false)}>{t.about}</a>
                    </nav>

                    <div className="nav-actions">
                        <button
                            className="theme-switch"
                            onClick={() => setDarkMode(!darkMode)}
                            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                            title={darkMode ? 'Light mode' : 'Dark mode'}
                        >
                            <span className={darkMode ? '' : 'active'}>☀</span>
                            <span className={darkMode ? 'active' : ''}>☾</span>
                        </button>
                        <button
                            className="lang-switch"
                            onClick={() => setLang(ar ? 'en' : 'ar')}
                            aria-label="Switch language"
                        >
                            <span className={!ar ? 'active' : ''}>EN</span>
                            <span className={ar ? 'active' : ''}>ع</span>
                        </button>
                        <a href="/admin/login" className="login-btn">{t.login}</a>
                        <button
                            className="mobile-menu"
                            onClick={() => setMobileOpen(!mobileOpen)}
                            aria-label="Menu"
                        >
                            <Icon name={mobileOpen ? 'close' : 'menu'} size={24} />
                        </button>
                    </div>
                </div>
            </header>

            <main>
                <section id="home" className="hero section">
                    <div className="container hero-grid">
                        <div className="hero-copy">
                            <div className="eyebrow">
                                <span />
                                {t.heroEyebrow}
                            </div>
                            <h1>{t.heroTitle}</h1>
                            <p>{t.heroText}</p>

                            <div className="hero-actions">
                                <a href="/admin/login" className="btn btn-primary">
                                    {t.start}
                                    <Icon name="arrow" size={18} />
                                </a>
                                <a href="#how" className="btn btn-secondary">
                                    {t.discover}
                                    <Icon name="arrow" size={18} />
                                </a>
                            </div>

                            <div className="hero-note">
                                <span className="note-icon"><Icon name="shield" size={16} /></span>
                                <span>{ar ? 'مصمم ليكون جزءًا من حياة المستخدم، لا عبئًا إضافيًا عليه.' : 'Designed to support daily life, not add another burden.'}</span>
                            </div>
                        </div>

                        <div className="hero-visual">
                            <div className="hero-orb orb-one" />
                            <div className="hero-orb orb-two" />

                            <div className="hero-photo-frame">
                                <img src={HERO_IMAGE} alt="شخص يستخدم عصا بيضاء وهاتفًا أثناء الحركة" />
                                <div className="photo-gradient" />
                            </div>


                            <div className="phone-card">
                                <div className="phone-top"><span /><span /><span /></div>
                                <div className="phone-map">
                                    <div className="map-road road-a" />
                                    <div className="map-road road-b" />
                                    <div className="map-road road-c" />
                                    <div className="map-dot"><span /></div>
                                    <div className="map-destination">⌖</div>
                                </div>
                                <div className="phone-bottom">
                                    <span>{ar ? 'المستخدم في نطاق آمن' : 'User is in a safe zone'}</span>
                                    <b>92%</b>
                                </div>
                            </div>

                            <div className="alert-card alert-top">
                                <div className="alert-icon green"><Icon name="check" size={17} /></div>
                                <div>
                                    <strong>{ar ? 'المسار آمن' : 'Route is clear'}</strong>
                                    <span>{ar ? 'تم تحديث الموقع الآن' : 'Location updated now'}</span>
                                </div>
                                <small>09:41</small>
                            </div>

                            <div className="alert-card alert-bottom">
                                <div className="alert-icon red"><Icon name="bell" size={17} /></div>
                                <div>
                                    <strong>{ar ? 'تنبيه عائق' : 'Obstacle alert'}</strong>
                                    <span>{ar ? 'عائق قريب أمام المستخدم' : 'Obstacle detected nearby'}</span>
                                </div>
                            </div>

                            <div className="scan-ring"><span /></div>
                        </div>
                    </div>
                </section>

                <section className="trust-strip">
                    <div className="container trust-grid">
                        {[
                            ['shield', t.trust1],
                            ['route', t.trust2],
                            ['building', t.trust3],
                            ['users', t.trust4],
                        ].map(([icon, text]) => (
                            <div className="trust-item" key={text}>
                                <span><Icon name={icon as IconName} size={20} /></span>
                                <strong>{text}</strong>
                            </div>
                        ))}
                    </div>
                </section>

                <section id="how" className="section how-section">
                    <div className="container">
                        <div className="section-heading centered">
                            <div className="eyebrow">{ar ? 'من الاستشعار إلى الاستجابة' : 'From sensing to response'}</div>
                            <h2>{t.howTitle}</h2>
                            <p>{t.howSub}</p>
                        </div>

                        <div className="steps-shell">
                            <div className="steps-line" />
                            <div className="steps-grid">
                                {steps.map(([icon, title, text], index) => (
                                    <div className="step" key={title}>
                                        <div className="step-number">{String(index + 1).padStart(2, '0')}</div>
                                        <div className="step-icon"><Icon name={icon} size={24} /></div>
                                        <h3>{title}</h3>
                                        <p>{ar ? text : [
                                            'Senses the environment around the user while moving.',
                                            'Identifies nearby obstacles and risks.',
                                            'Provides timely audio or vibration feedback.',
                                            'Updates the user location when needed.',
                                            'Important events can trigger a family alert.',
                                            'Families can follow status and respond quickly.',
                                        ][index]}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <section id="features" className="section features-section">
                    <div className="container">
                        <div className="section-heading centered">
                            <div className="eyebrow">{ar ? 'مصمم حول الاحتياج الحقيقي' : 'Built around real needs'}</div>
                            <h2>{t.featureTitle}</h2>
                            <p>{t.featureSub}</p>
                        </div>

                        <div className="features-grid">
                            {features.map((feature) => (
                                <article className={`feature-card ${feature.tone}`} key={feature.title}>
                                    <div className="feature-icon"><Icon name={feature.icon} size={25} /></div>
                                    <h3>{ar ? feature.title : ({
                                        'الأمان أولًا': 'Safety first',
                                        'المتابعة الذكية': 'Smart monitoring',
                                        'للعائلات': 'For families',
                                        'للجمعيات': 'For organizations',
                                    } as Record<string, string>)[feature.title]}</h3>
                                    <p>{ar ? feature.text : ({
                                        'وظائف مصممة حول السلامة والاستجابة السريعة للمواقف المهمة.': 'Functions designed around safety and timely response.',
                                        'رؤية أوضح للحالة والموقع والتنبيهات من مكان واحد.': 'Clearer visibility into status, location and alerts.',
                                        'اطمئنان أكبر دون تحويل المتابعة اليومية إلى عبء.': 'Peace of mind without turning daily monitoring into a burden.',
                                        'أدوات تساعد المؤسسات على إدارة المستفيدين والأجهزة بكفاءة.': 'Tools that help organizations manage users and devices efficiently.',
                                    } as Record<string, string>)[feature.text]}</p>
                                    <ul>
                                        {feature.bullets.map((bullet) => (
                                            <li key={bullet}>
                                                <span><Icon name="check" size={13} /></span>
                                                {ar ? bullet : bullet}
                                            </li>
                                        ))}
                                    </ul>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="section dashboard-section" id="about">
                    <div className="container dashboard-grid">
                        <div className="dashboard-preview">
                           <div className="laptop real-dashboard-frame">
                              <div className="real-dashboard-image-wrap">
                                   <img
                                      src="/dashboard.png"
                                      alt="Basira Dashboard"
                                      className="real-dashboard-image"
                                    />
                               </div>
                           </div>
                        </div>

                        <div className="dashboard-copy">
                            <div className="eyebrow">{t.dashKicker}</div>
                            <h2>{t.dashTitle}</h2>
                            <p>{t.dashText}</p>
                            <ul className="check-list">
                                {[
                                    ar ? 'إدارة المستخدمين والأجهزة' : 'Manage users and devices',
                                    ar ? 'متابعة التنبيهات والموقع' : 'Monitor alerts and location',
                                    ar ? 'رؤية أوضح للحالة اليومية' : 'Clear daily operational visibility',
                                ].map((item) => (
                                    <li key={item}><span><Icon name="check" size={15} /></span>{item}</li>
                                ))}
                            </ul>
                            <a href="/admin/login" className="text-button">
                                {t.dashButton}
                                <Icon name="arrow" size={18} />
                            </a>
                        </div>
                    </div>
                </section>

                <section id="families" className="section audiences-section">
                    <div className="container audience-grid">
                        <article className="audience-card family-card">
                            <img src={FAMILY_IMAGE} alt="عائلة في المنزل" />
                            <div className="audience-overlay" />
                            <div className="audience-content">
                                <span className="audience-tag"><Icon name="heart" size={14} /> {ar ? 'للأسر' : 'For families'}</span>
                                <h2>{t.familyTitle}</h2>
                                <p>{t.familyText}</p>
                                <a href="#home" className="audience-link">{t.familyButton}<Icon name="arrow" size={17} /></a>
                            </div>
                        </article>

                        <article id="organizations" className="audience-card org-card">
                            <img src={ORG_IMAGE} alt="مركز مجتمعي" />
                            <div className="audience-overlay" />
                            <div className="audience-content">
                                <span className="audience-tag"><Icon name="building" size={14} /> {ar ? 'للجمعيات والمنظمات' : 'For organizations'}</span>
                                <h2>{t.orgTitle}</h2>
                                <p>{t.orgText}</p>
                                <a href="#features" className="audience-link">{t.orgButton}<Icon name="arrow" size={17} /></a>
                            </div>
                        </article>
                    </div>
                </section>

                <section className="cta-section">
                    <div className="cta-decoration d1" />
                    <div className="cta-decoration d2" />
                    <div className="container cta-inner">
                        <div>
                            <span className="cta-kicker">{ar ? 'خطوتك التالية' : 'Your next step'}</span>
                            <h2>{t.ctaTitle}</h2>
                            <p>{t.ctaText}</p>
                        </div>
                        <a href="/admin/login" className="cta-button">
                            {t.login}
                            <Icon name="arrow" size={18} />
                        </a>
                    </div>
                </section>
            </main>

            <footer className="footer">
                <div className="container footer-grid">
                    <div>
                        <Logo />
                        <p>{ar ? 'معًا نحو مجتمع أكثر شمولًا.' : 'Together toward a more inclusive community.'}</p>
                    </div>
                    <div className="footer-links">
                        <a href="#home">{t.home}</a>
                        <a href="#how">{t.how}</a>
                        <a href="#features">{t.features}</a>
                        <a href="#families">{t.families}</a>
                        <a href="#organizations">{t.ngos}</a>
                        <a href="/admin/login">{t.login}</a>
                    </div>
                    <div className="footer-social">
                        <span>© 2026 بصيرة</span>
                    </div>
                </div>
            </footer>
        </div>


    </>
)}
