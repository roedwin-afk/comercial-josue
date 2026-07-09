// src/config/site.ts

export interface NavLink {
    label: string;
    href: string;
}

export interface TarjetaPrecio {
    numero: string;      // "01", "02", "03"
    titulo: string;
    texto: string;
    badges?: string[];   // solo la tarjeta de productos las usa
}

export interface InfoItem {
    tipo: "ubicacion" | "email" | "whatsapp"; // controla qué ícono se dibuja
    label: string;       // ej. "Dirección de la sucursal"
    valor: string;       // texto visible
    href?: string;        // si es un link (mailto, wa.me)
}

export const siteConfig = {
    // --- Identidad / header ---
    nombre: "Comercial Josué",
    logoIniciales: "CJ",
    logoSubtitulo: "SAN MIGUEL, EL SALVADOR",

    navLinks: [
        { label: "Nosotros", href: "#nosotros" },
        { label: "Valores", href: "#valores" },
        { label: "Ubicación", href: "#ubicacion" },
    ] satisfies NavLink[],

    // --- Contacto ---
    whatsappNumero: "50370000000", // ⚠️ pon el número real
    email: "comercialjosue@gmail.com",

    // --- Hero ---
    hero: {
        eyebrow: "Abastecimiento y Confianza",
        tituloAntes: "Número uno en",
        tituloAcento: "atención",
        tituloDespues: "y precios",
        parrafo:
            "Tu comercial y abarrotería de confianza en San Miguel. Distribuimos productos de consumo popular al detalle y por mayor con el servicio de excelencia que mereces.",
        mensajeWhatsapp: "Hola, quisiera hacer una consulta",
    },

    // --- Sección "Nosotros" ---
    about: {
        eyebrow: "Conócenos",
        titulo: "Nuestra propuesta de valor para ti",
        parrafo:
            "En Comercial Josué operamos con un fuerte sentido de responsabilidad social y de mercado, ofreciendo siempre la mejor relación calidad-precio y una atención atenta y honesta.",
    },

    // --- Tarjetas tipo etiqueta de precio ---
    tarjetas: [
        {
            numero: "01",
            titulo: "Nuestra Misión",
            texto:
                "Somos una empresa comercial sólida, dedicada a atender plenamente las necesidades de nuestros clientes al detalle y por mayor, a través de la comercialización de productos de consumo popular a precios justos.",
        },
        {
            numero: "02",
            titulo: "Nuestra Visión",
            texto:
                "Ser una empresa líder, reconocida en el mercado de productos de consumo popular, garantizando la satisfacción de nuestros clientes a nivel de toda la Zona Oriental del país.",
        },
        {
            numero: "03",
            titulo: "Nuestra Oferta",
            texto:
                "Ofrecemos variedad de productos de primera necesidad al mejor precio del mercado para abastecer tu hogar o tu propio negocio:",
            badges: ["Granos Básicos", "Jabones", "Detergentes", "Comida Mascotas", "Comestibles"],
        },
    ] satisfies TarjetaPrecio[],

    // --- Franja de valores ---
    valores: {
        eyebrow: "Pilares fundamentales",
        titulo: "Nuestros Valores",
        parrafo: "Nos guiamos por principios éticos sólidos en cada venta y atención al cliente.",
        chips: [
            "Fe en Jesucristo sobre todas las cosas",
            "Orientación al cliente",
            "Responsabilidad",
            "Disciplina",
        ],
    },

    // --- Ubicación / contacto ---
    ubicacion: {
        eyebrow: "Visítanos hoy mismo",
        titulo: "Estamos para servirte",
        notaMayoreo:
            "*¿Deseas cotizar precios al por mayor? Escríbenos directamente o visítanos en nuestra ubicación para darte una oferta personalizada.",
    },

    direccion: {
        linea1: "Colonia Santa Carlota, Calle Agua Zarca, San Miguel,",
        linea2: "500 mt al norte de Parque Memorial El Edén.",
    },

    mapaQuery: "Colonia Santa Carlota, Calle Agua Zarca, San Miguel, El Salvador",

    // Se arma en tiempo de ejecución con whatsappNumero/email, ver infoItems() abajo.

    // --- Botón flotante ---
    whatsappFloatMensaje: "Hola, vengo de su sitio web y quisiera más información.",

    // --- Footer ---
    // --- Footer ---
    footer: {
        copyrightTexto: "Comercial Josué. Todos los derechos reservados.",
        credits: "San Miguel, El Salvador",
    },

    // --- SEO ---
    seo: {
        titulo: "Comercial Josué | Número uno en atención y precios",
        descripcion:
            "Comercial Josué en San Miguel - Número uno en atención y precios. Venta de granos básicos, productos de consumo popular al detalle y por mayor.",
        idioma: "es",
    },
};

// Arma el link de wa.me con mensaje predefinido
export function whatsappLink(mensaje: string): string {
    return `https://wa.me/${siteConfig.whatsappNumero}?text=${encodeURIComponent(mensaje)}`;
}

// Arma el src del iframe de Google Maps
export function mapEmbedSrc(): string {
    const q = encodeURIComponent(siteConfig.mapaQuery);
    return `https://maps.google.com/maps?q=${q}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
}

// Los 3 ítems de contacto de la sección Ubicación (dirección, email, whatsapp).
// Se genera como función porque el href de whatsapp depende del helper de arriba.
export function infoItems(): InfoItem[] {
    return [
        {
            tipo: "ubicacion",
            label: "Dirección de la sucursal",
            valor: `${siteConfig.direccion.linea1} ${siteConfig.direccion.linea2}`,
        },
        {
            tipo: "email",
            label: "Correo electrónico",
            valor: siteConfig.email,
            href: `mailto:${siteConfig.email}`,
        },
        {
            tipo: "whatsapp",
            label: "Atención rápida por WhatsApp",
            valor: `+503 ${siteConfig.whatsappNumero.slice(-8, -4)}-${siteConfig.whatsappNumero.slice(-4)}`,
            href: whatsappLink("Hola, quisiera hacer una consulta"),
        },
    ];
}