// ===== Internationalization (i18n) System =====

const translations = {
    es: {
        // Navbar
        nav_features: "Características",
        nav_services: "Servicios",
        nav_stats: "Estadísticas",
        nav_contact: "Contacto",
        nav_login: "Iniciar Sesión",
        nav_cta: "Solicita tu Demo",
        
        // Hero
        hero_badge: "Nueva versión 2.0 disponible",
        hero_title: "Mesa de Ayuda",
        hero_title_gradient: "Inteligente",
        hero_title_end: "para tu Empresa",
        hero_description: "Gestiona tickets, rastrea dispositivos y automatiza el soporte técnico desde una única plataforma. Potenciada con IA para resolver incidencias más rápido.",
        hero_cta_demo: "Solicitar Demo →",
        hero_cta_video: "▶ Ver Video",
        stat_companies: "Empresas",
        stat_satisfaction: "Satisfacción",
        stat_support: "Soporte",
        
        // Dashboard Preview
        dashboard_title: "Dashboard - Amaru",
        dash_tickets: "Tickets",
        dash_devices: "Dispositivos",
        dash_resolved: "Resueltos",
        notif_title: "Nuevo ticket recibido",
        notif_priority: "Prioridad: Alta",
        device_online: "En línea",
        
        // Features
        features_tag: "Características",
        features_title: "Todo lo que necesitas en un solo lugar",
        features_description: "Herramientas poderosas diseñadas para optimizar la gestión de soporte técnico.",
        feature_1_title: "Tracking de Dispositivos",
        feature_1_desc: "Monitorea la ubicación y estado de todos los equipos de cómputo en tiempo real.",
        feature_2_title: "Tickets por Email",
        feature_2_desc: "Crea tickets automáticamente desde correos electrónicos. Sin fricciones.",
        feature_3_title: "Estado en Tiempo Real",
        feature_3_desc: "Visualiza el estado de vida de cada dispositivo: online, offline o en mantenimiento.",
        feature_4_title: "Reportes Avanzados",
        feature_4_desc: "Genera informes detallados con métricas clave y análisis predictivo con IA.",
        feature_5_title: "Gestión de Equipos",
        feature_5_desc: "Asigna tickets inteligentemente según disponibilidad y especialidad.",
        feature_6_title: "Seguridad Empresarial",
        feature_6_desc: "Protección de datos con encriptación, SSO y cumplimiento de normativas.",
        
        // Services
        services_tag: "Servicios",
        services_title: "Servicios que transforman tu soporte Empresarial",
        service_1_title: "Geolocalización de Activos",
        service_1_desc: "Rastrea la ubicación exacta de cada dispositivo en tu organización.",
        service_2_title: "Sistema de Tickets",
        service_2_desc: "Gestión completa de incidencias con flujos automatizados y SLA.",
        service_3_title: "Monitoreo Continuo",
        service_3_desc: "Vigilancia 24/7 del estado de salud de todos tus equipos.",
        service_4_title: "Automatización IA",
        service_4_desc: "Resolución automática de problemas comunes con inteligencia artificial.",
        
        // Stats
        stat_resolved: "Tickets Resueltos",
        stat_monitored: "Dispositivos Monitoreados",
        stat_trust: "Empresas Confían",
        stat_response: "Resolución Promedio",
        
        // CTA
        cta_title: "¿Listo para transformar tu soporte IT?",
        cta_description: "Únete a más de 500 empresas que ya optimizaron su mesa de ayuda con Amaru.",
        cta_button: "Solicita tu Demo →",
        cta_contact: "Contactar Ventas",
        
        // Contact
        contact_tag: "Contacto",
        contact_title: "Hablemos de tu proyecto",
        contact_description: "Nuestro equipo está listo para ayudarte a implementar la solución perfecta.",
        contact_email: "Email",
        contact_phone: "Teléfono",
        contact_office: "Oficina",
        form_name: "Nombre completo",
        form_name_placeholder: "Tu nombre",
        form_email: "Email corporativo",
        form_email_placeholder: "tu@empresa.com",
        form_company: "Empresa",
        form_company_placeholder: "Nombre de tu empresa",
        form_message: "Mensaje",
        form_message_placeholder: "Cuéntanos sobre tu proyecto...",
        form_submit: "Enviar Mensaje ✈️",
        form_sending: "Enviando...",
        form_success: "¡Mensaje enviado correctamente! Te contactaremos pronto.",
        
        // Footer
        footer_description: "Plataforma integral de mesa de ayuda para empresas modernas.",
        footer_product: "Producto",
        footer_features: "Características",
        footer_pricing: "Precios",
        footer_integrations: "Integraciones",
        footer_api: "API",
        footer_company: "Empresa",
        footer_about: "Sobre Nosotros",
        footer_careers: "Carreras",
        footer_blog: "Blog",
        footer_press: "Prensa",
        footer_resources: "Recursos",
        footer_docs: "Documentación",
        footer_support: "Soporte",
        footer_status: "Status",
        footer_community: "Comunidad",
        footer_rights: "Todos los derechos reservados.",
        footer_privacy: "Privacidad",
        footer_terms: "Términos",
        footer_cookies: "Cookies"
    },
    
    en: {
        // Navbar
        nav_features: "Features",
        nav_services: "Services",
        nav_stats: "Statistics",
        nav_contact: "Contact",
        nav_login: "Sign In",
        nav_cta: "Request Demo",
        
        // Hero
        hero_badge: "New version 2.0 available",
        hero_title: "Help Desk",
        hero_title_gradient: "Intelligent",
        hero_title_end: "for your Business",
        hero_description: "Manage tickets, track devices, and automate technical support from a single platform. AI-powered to resolve incidents faster.",
        hero_cta_demo: "Request Demo →",
        hero_cta_video: "▶ Watch Video",
        stat_companies: "Companies",
        stat_satisfaction: "Satisfaction",
        stat_support: "Support",
        
        // Dashboard Preview
        dashboard_title: "Dashboard - Amaru",
        dash_tickets: "Tickets",
        dash_devices: "Devices",
        dash_resolved: "Resolved",
        notif_title: "New ticket received",
        notif_priority: "Priority: High",
        device_online: "Online",
        
        // Features
        features_tag: "Features",
        features_title: "Everything you need in one place",
        features_description: "Powerful tools designed to optimize technical support management.",
        feature_1_title: "Device Tracking",
        feature_1_desc: "Monitor the location and status of all computer equipment in real time.",
        feature_2_title: "Email Tickets",
        feature_2_desc: "Create tickets automatically from emails. No friction.",
        feature_3_title: "Real-Time Status",
        feature_3_desc: "View the life status of each device: online, offline, or in maintenance.",
        feature_4_title: "Advanced Reports",
        feature_4_desc: "Generate detailed reports with key metrics and AI predictive analysis.",
        feature_5_title: "Team Management",
        feature_5_desc: "Intelligently assign tickets based on availability and specialty.",
        feature_6_title: "Enterprise Security",
        feature_6_desc: "Data protection with encryption, SSO, and regulatory compliance.",
        
        // Services
        services_tag: "Services",
        services_title: "Services that transform your IT support",
        service_1_title: "Asset Geolocation",
        service_1_desc: "Track the exact location of each device in your organization.",
        service_2_title: "Ticket System",
        service_2_desc: "Complete incident management with automated workflows and SLA.",
        service_3_title: "Continuous Monitoring",
        service_3_desc: "24/7 surveillance of the health status of all your equipment.",
        service_4_title: "AI Automation",
        service_4_desc: "Automatic resolution of common problems with artificial intelligence.",
        
        // Stats
        stat_resolved: "Tickets Resolved",
        stat_monitored: "Devices Monitored",
        stat_trust: "Companies Trust Us",
        stat_response: "Average Resolution",
        
        // CTA
        cta_title: "Ready to transform your IT support?",
        cta_description: "Join over 500 companies that have already optimized their help desk with Amaru.",
        cta_button: "Request Demo →",
        cta_contact: "Contact Sales",
        
        // Contact
        contact_tag: "Contact",
        contact_title: "Let's talk about your project",
        contact_description: "Our team is ready to help you implement the perfect solution.",
        contact_email: "Email",
        contact_phone: "Phone",
        contact_office: "Office",
        form_name: "Full name",
        form_name_placeholder: "Your name",
        form_email: "Corporate email",
        form_email_placeholder: "you@company.com",
        form_company: "Company",
        form_company_placeholder: "Your company name",
        form_message: "Message",
        form_message_placeholder: "Tell us about your project...",
        form_submit: "Send Message ✈️",
        form_sending: "Sending...",
        form_success: "Message sent successfully! We'll contact you soon.",
        
        // Footer
        footer_description: "Comprehensive help desk platform for modern businesses.",
        footer_product: "Product",
        footer_features: "Features",
        footer_pricing: "Pricing",
        footer_integrations: "Integrations",
        footer_api: "API",
        footer_company: "Company",
        footer_about: "About Us",
        footer_careers: "Careers",
        footer_blog: "Blog",
        footer_press: "Press",
        footer_resources: "Resources",
        footer_docs: "Documentation",
        footer_support: "Support",
        footer_status: "Status",
        footer_community: "Community",
        footer_rights: "All rights reserved.",
        footer_privacy: "Privacy",
        footer_terms: "Terms",
        footer_cookies: "Cookies"
    },
    
    fr: {
        // Navbar
        nav_features: "Fonctionnalités",
        nav_services: "Services",
        nav_stats: "Statistiques",
        nav_contact: "Contact",
        nav_login: "Connexion",
        nav_cta: "Demander une Démo",
        
        // Hero
        hero_badge: "Nouvelle version 2.0 disponible",
        hero_title: "Service d'Assistance",
        hero_title_gradient: "Intelligent",
        hero_title_end: "pour votre Entreprise",
        hero_description: "Gérez les tickets, suivez les appareils et automatisez le support technique depuis une seule plateforme. Propulsé par l'IA pour résoudre les incidents plus rapidement.",
        hero_cta_demo: "Demander une Démo →",
        hero_cta_video: "▶ Voir la Vidéo",
        stat_companies: "Entreprises",
        stat_satisfaction: "Satisfaction",
        stat_support: "Support",
        
        // Dashboard Preview
        dashboard_title: "Tableau de Bord - Amaru",
        dash_tickets: "Tickets",
        dash_devices: "Appareils",
        dash_resolved: "Résolus",
        notif_title: "Nouveau ticket reçu",
        notif_priority: "Priorité: Haute",
        device_online: "En ligne",
        
        // Features
        features_tag: "Fonctionnalités",
        features_title: "Tout ce dont vous avez besoin en un seul endroit",
        features_description: "Outils puissants conçus pour optimiser la gestion du support technique.",
        feature_1_title: "Suivi des Appareils",
        feature_1_desc: "Surveillez l'emplacement et l'état de tous les équipements informatiques en temps réel.",
        feature_2_title: "Tickets par Email",
        feature_2_desc: "Créez automatiquement des tickets à partir des emails. Sans friction.",
        feature_3_title: "État en Temps Réel",
        feature_3_desc: "Visualisez l'état de chaque appareil: en ligne, hors ligne ou en maintenance.",
        feature_4_title: "Rapports Avancés",
        feature_4_desc: "Générez des rapports détaillés avec des métriques clés et une analyse prédictive IA.",
        feature_5_title: "Gestion d'Équipe",
        feature_5_desc: "Assignez intelligemment les tickets selon la disponibilité et la spécialité.",
        feature_6_title: "Sécurité Entreprise",
        feature_6_desc: "Protection des données avec chiffrement, SSO et conformité réglementaire.",
        
        // Services
        services_tag: "Services",
        services_title: "Services qui transforment votre support IT",
        service_1_title: "Géolocalisation des Actifs",
        service_1_desc: "Suivez l'emplacement exact de chaque appareil dans votre organisation.",
        service_2_title: "Système de Tickets",
        service_2_desc: "Gestion complète des incidents avec flux automatisés et SLA.",
        service_3_title: "Surveillance Continue",
        service_3_desc: "Surveillance 24/7 de l'état de santé de tous vos équipements.",
        service_4_title: "Automatisation IA",
        service_4_desc: "Résolution automatique des problèmes courants avec l'intelligence artificielle.",
        
        // Stats
        stat_resolved: "Tickets Résolus",
        stat_monitored: "Appareils Surveillés",
        stat_trust: "Entreprises Font Confiance",
        stat_response: "Résolution Moyenne",
        
        // CTA
        cta_title: "Prêt à transformer votre support IT?",
        cta_description: "Rejoignez plus de 500 entreprises qui ont déjà optimisé leur service d'assistance avec Amaru.",
        cta_button: "Demander une Démo →",
        cta_contact: "Contacter les Ventes",
        
        // Contact
        contact_tag: "Contact",
        contact_title: "Parlons de votre projet",
        contact_description: "Notre équipe est prête à vous aider à implémenter la solution parfaite.",
        contact_email: "Email",
        contact_phone: "Téléphone",
        contact_office: "Bureau",
        form_name: "Nom complet",
        form_name_placeholder: "Votre nom",
        form_email: "Email professionnel",
        form_email_placeholder: "vous@entreprise.com",
        form_company: "Entreprise",
        form_company_placeholder: "Nom de votre entreprise",
        form_message: "Message",
        form_message_placeholder: "Parlez-nous de votre projet...",
        form_submit: "Envoyer le Message ✈️",
        form_sending: "Envoi en cours...",
        form_success: "Message envoyé avec succès! Nous vous contacterons bientôt.",
        
        // Footer
        footer_description: "Plateforme complète de service d'assistance pour les entreprises modernes.",
        footer_product: "Produit",
        footer_features: "Fonctionnalités",
        footer_pricing: "Tarifs",
        footer_integrations: "Intégrations",
        footer_api: "API",
        footer_company: "Entreprise",
        footer_about: "À Propos",
        footer_careers: "Carrières",
        footer_blog: "Blog",
        footer_press: "Presse",
        footer_resources: "Ressources",
        footer_docs: "Documentation",
        footer_support: "Support",
        footer_status: "Statut",
        footer_community: "Communauté",
        footer_rights: "Tous droits réservés.",
        footer_privacy: "Confidentialité",
        footer_terms: "Conditions",
        footer_cookies: "Cookies"
    },
    
    pt: {
        // Navbar
        nav_features: "Recursos",
        nav_services: "Serviços",
        nav_stats: "Estatísticas",
        nav_contact: "Contato",
        nav_login: "Entrar",
        nav_cta: "Solicite sua Demo",
        
        // Hero
        hero_badge: "Nova versão 2.0 disponível",
        hero_title: "Central de Atendimento",
        hero_title_gradient: "Inteligente",
        hero_title_end: "para sua Empresa",
        hero_description: "Gerencie tickets, rastreie dispositivos e automatize o suporte técnico a partir de uma única plataforma. Impulsionado por IA para resolver incidentes mais rápido.",
        hero_cta_demo: "Solicitar Demo →",
        hero_cta_video: "▶ Ver Vídeo",
        stat_companies: "Empresas",
        stat_satisfaction: "Satisfação",
        stat_support: "Suporte",
        
        // Dashboard Preview
        dashboard_title: "Painel - Amaru",
        dash_tickets: "Tickets",
        dash_devices: "Dispositivos",
        dash_resolved: "Resolvidos",
        notif_title: "Novo ticket recebido",
        notif_priority: "Prioridade: Alta",
        device_online: "Online",
        
        // Features
        features_tag: "Recursos",
        features_title: "Tudo o que você precisa em um só lugar",
        features_description: "Ferramentas poderosas projetadas para otimizar a gestão de suporte técnico.",
        feature_1_title: "Rastreamento de Dispositivos",
        feature_1_desc: "Monitore a localização e o status de todos os equipamentos de computação em tempo real.",
        feature_2_title: "Tickets por Email",
        feature_2_desc: "Crie tickets automaticamente a partir de emails. Sem atrito.",
        feature_3_title: "Status em Tempo Real",
        feature_3_desc: "Visualize o status de vida de cada dispositivo: online, offline ou em manutenção.",
        feature_4_title: "Relatórios Avançados",
        feature_4_desc: "Gere relatórios detalhados com métricas-chave e análise preditiva com IA.",
        feature_5_title: "Gestão de Equipes",
        feature_5_desc: "Atribua tickets de forma inteligente com base na disponibilidade e especialidade.",
        feature_6_title: "Segurança Empresarial",
        feature_6_desc: "Proteção de dados com criptografia, SSO e conformidade regulatória.",
        
        // Services
        services_tag: "Serviços",
        services_title: "Serviços que transformam seu suporte de TI",
        service_1_title: "Geolocalização de Ativos",
        service_1_desc: "Rastreie a localização exata de cada dispositivo em sua organização.",
        service_2_title: "Sistema de Tickets",
        service_2_desc: "Gestão completa de incidentes com fluxos automatizados e SLA.",
        service_3_title: "Monitoramento Contínuo",
        service_3_desc: "Vigilância 24/7 do estado de saúde de todos os seus equipamentos.",
        service_4_title: "Automação com IA",
        service_4_desc: "Resolução automática de problemas comuns com inteligência artificial.",
        
        // Stats
        stat_resolved: "Tickets Resolvidos",
        stat_monitored: "Dispositivos Monitorados",
        stat_trust: "Empresas Confiam",
        stat_response: "Resolução Média",
        
        // CTA
        cta_title: "Pronto para transformar seu suporte de TI?",
        cta_description: "Junte-se a mais de 500 empresas que já otimizaram sua central de atendimento com Amaru.",
        cta_button: "Solicite sua Demo →",
        cta_contact: "Contatar Vendas",
        
        // Contact
        contact_tag: "Contato",
        contact_title: "Vamos falar sobre seu projeto",
        contact_description: "Nossa equipe está pronta para ajudá-lo a implementar a solução perfeita.",
        contact_email: "Email",
        contact_phone: "Telefone",
        contact_office: "Escritório",
        form_name: "Nome completo",
        form_name_placeholder: "Seu nome",
        form_email: "Email corporativo",
        form_email_placeholder: "voce@empresa.com",
        form_company: "Empresa",
        form_company_placeholder: "Nome da sua empresa",
        form_message: "Mensagem",
        form_message_placeholder: "Conte-nos sobre seu projeto...",
        form_submit: "Enviar Mensagem ✈️",
        form_sending: "Enviando...",
        form_success: "Mensagem enviada com sucesso! Entraremos em contato em breve.",
        
        // Footer
        footer_description: "Plataforma completa de central de atendimento para empresas modernas.",
        footer_product: "Produto",
        footer_features: "Recursos",
        footer_pricing: "Preços",
        footer_integrations: "Integrações",
        footer_api: "API",
        footer_company: "Empresa",
        footer_about: "Sobre Nós",
        footer_careers: "Carreiras",
        footer_blog: "Blog",
        footer_press: "Imprensa",
        footer_resources: "Recursos",
        footer_docs: "Documentação",
        footer_support: "Suporte",
        footer_status: "Status",
        footer_community: "Comunidade",
        footer_rights: "Todos os direitos reservados.",
        footer_privacy: "Privacidade",
        footer_terms: "Termos",
        footer_cookies: "Cookies"
    }
};

// Language metadata
const languageNames = {
    es: { name: 'Español', flag: '🇪🇸' },
    en: { name: 'English', flag: '🇺🇸' },
    fr: { name: 'Français', flag: '🇫🇷' },
    pt: { name: 'Português', flag: '🇧🇷' }
};

// Current language
let currentLanguage = localStorage.getItem('language') || 'es';

// Get translation
function t(key) {
    return translations[currentLanguage]?.[key] || translations['es'][key] || key;
}

// Set language
function setLanguage(lang) {
    if (translations[lang]) {
        currentLanguage = lang;
        localStorage.setItem('language', lang);
        document.documentElement.lang = lang;
        updatePageContent();
        updateLanguageSelector();
    }
}

// Update all page content with translations
function updatePageContent() {
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
            if (element.placeholder) {
                element.placeholder = t(key);
            }
        } else {
            element.textContent = t(key);
        }
    });
    
    // Update placeholder attributes separately
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        element.placeholder = t(key);
    });
    
    // Update document title based on language
    const titles = {
        es: 'Amaru | Mesa de Ayuda Inteligente',
        en: 'Amaru | Intelligent Help Desk',
        fr: 'Amaru | Service d\'Assistance Intelligent',
        pt: 'Amaru | Central de Atendimento Inteligente'
    };
    document.title = titles[currentLanguage] || titles['es'];
}

// Update language selector UI
function updateLanguageSelector() {
    const currentLangElement = document.getElementById('currentLang');
    const currentFlagElement = document.getElementById('currentFlag');
    
    if (currentLangElement && currentFlagElement) {
        currentLangElement.textContent = languageNames[currentLanguage].name;
        currentFlagElement.textContent = languageNames[currentLanguage].flag;
    }
    
    // Update active state in dropdown
    document.querySelectorAll('.lang-option').forEach(option => {
        const lang = option.getAttribute('data-lang');
        option.classList.toggle('active', lang === currentLanguage);
    });
}

// Initialize language selector
function initLanguageSelector() {
    const selector = document.getElementById('langSelector');
    const dropdown = document.getElementById('langDropdown');
    
    if (selector && dropdown) {
        // Toggle dropdown
        selector.addEventListener('click', (e) => {
            e.stopPropagation();
            dropdown.classList.toggle('active');
        });
        
        // Language options click
        dropdown.querySelectorAll('.lang-option').forEach(option => {
            option.addEventListener('click', (e) => {
                e.stopPropagation();
                const lang = option.getAttribute('data-lang');
                setLanguage(lang);
                dropdown.classList.remove('active');
            });
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', () => {
            dropdown.classList.remove('active');
        });
    }
}

// Initialize i18n
document.addEventListener('DOMContentLoaded', () => {
    document.documentElement.lang = currentLanguage;
    updatePageContent();
    initLanguageSelector();
    updateLanguageSelector();
});

// Export for external use
window.i18n = {
    t,
    setLanguage,
    getCurrentLanguage: () => currentLanguage,
    getLanguages: () => Object.keys(translations)
};
