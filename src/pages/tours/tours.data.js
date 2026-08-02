import IMAGES from "../../assets/images";

export const tours = [
    {
        id: 1,
        slug: "valle-de-las-tumbas",
        tag: "tumbas",
        name: "Valle de las Tumbas",
        category: "Senderismo de Alta Montaña",
        altitude: "4.450 msnm",
        duration: "1 día",
        difficulty: "Moderada",
        heroImage: IMAGES.tour.subPages.valle,
        shortDescription: "Adéntrate en un paisaje volcánico único donde la historia geológica y la belleza del páramo crean una experiencia inolvidable.",
        description: {
            introduction:
                "Explora uno de los paisajes más sorprendentes del Parque Nacional Natural Los Nevados, donde el páramo, los volcanes y la historia geológica se unen para ofrecer una experiencia inolvidable.",
            content:
                "Durante el recorrido atravesarás cañones volcánicos, frailejonales y senderos de alta montaña hasta llegar al Valle de las Tumbas, un escenario de aspecto lunar que refleja la fuerza y transformación constante de la naturaleza.",
            conclusion:
                "Ideal para quienes disfrutan el senderismo, la fotografía, la historia natural y las aventuras que conectan con la esencia de la montaña.",
            highlights: [
                {
                    title: "Ruta escénica",
                    description:
                        "Recorre una de las carreteras más hermosas de Colombia, rodeada de volcanes, montañas y miradores naturales."
                },
                {
                    title: "Geología viva",
                    description:
                        "Conoce el Cañón del Lagunilla, el Azufrado y otros escenarios marcados por la actividad volcánica y la historia del Nevado del Ruiz."
                },
                {
                    title: "Paisaje lunar",
                    description:
                        "Descubre el Valle de las Tumbas, un entorno único de alta montaña con panorámicas de los macizos La Olleta y Nevado del Ruiz."
                }
            ]
        },
        itinerary: [
            {
                time: "4:40 AM",
                activity: "Encuentro en la oficina de Espeletia Trips."
            },
            {
                time: "5:00 AM",
                activity: "Desayuno tradicional en Murillo."
            },
            {
                time: "6:00 AM",
                activity: "Interpretación ambiental en el Cañón del Lagunilla."
            },
            {
                time: "7:30 AM",
                activity: "Visita al Cañón del Azufrado y sector El Sifón."
            },
            {
                time: "8:00 AM",
                activity: "Registro e inducción en el Parque Nacional Natural Los Nevados."
            },
            {
                time: "9:00 AM",
                activity: "Caminata hacia Aguacerales, Arenales y Valle de las Tumbas."
            },
            {
                time: "2:00 PM",
                activity: "Regreso a Murillo, almuerzo y cierre de la experiencia."
            }
        ],
        equipment: [
            {
                title: "Primera capa",
                items: [
                    "Buso licrado o térmico",
                    "Pantalón de secado rápido"
                ]
            },
            {
                title: "Segunda capa",
                items: [
                    "Chaqueta o saco polar"
                ]
            },
            {
                title: "Protección exterior",
                items: [
                    "Chaqueta impermeable",
                    "Cortavientos"
                ]
            },
            {
                title: "Accesorios",
                items: [
                    "Botas de montaña",
                    "Guantes",
                    "Gorro",
                    "Cuello tipo buff",
                    "Gafas de sol"
                ]
            },
            {
                title: "Indispensables",
                items: [
                    "Morral de 25L",
                    "1 litro de agua",
                    "Snacks",
                    "Bloqueador solar"
                ]
            }
        ],
        tips: [
            {
                title: "Aclimatación",
                description:
                    "Descansa bien la noche anterior y mantente hidratado para disfrutar mejor la experiencia en altura."
            },
            {
                title: "Clima cambiante",
                description:
                    "En alta montaña el clima puede variar rápidamente, por lo que es indispensable llevar ropa impermeable."
            },
            {
                title: "Respeta el páramo",
                description:
                    "Permanece siempre sobre los senderos autorizados y evita alterar la flora y fauna del ecosistema."
            }
        ],
        prices: {
            national: "260.000",
            foreign: "290.000",

            groupInfo:
                "Salidas grupales desde 5 personas.",

            privateInfo:
                "Experiencias privadas para grupos de 2 a 4 personas.",

            includes: [
                "Desayuno y almuerzo campesino",
                "Transporte 4x4 desde Murillo",
                "Ingreso al PNN Los Nevados",
                "Guía local certificado",
                "Seguro de asistencia médica"
            ]
        }
    },
    {
        id: 2,
        slug: "termal-de-la-campanita",
        tag: "campanita",
        name: "Termal de la Campanita",
        category: "Senderismo y Bienestar",
        altitude: "3.200 msnm",
        duration: "1 día",
        difficulty: "Fácil - Moderada",
        heroImage: IMAGES.tour.subPages.campanita ,
        shortDescription: "Relájate en aguas termales naturales mientras disfrutas de la tranquilidad del páramo y de uno de los rincones más especiales de Murillo.",
        description: {
            introduction:
                "Recorre antiguos caminos de herradura que atraviesan bosques andinos y descienden hasta el majestuoso Cañón del Río Recio, donde la naturaleza y la historia campesina se encuentran en un escenario único.",

            content:
                "La caminata culmina en el Termal de la Campanita, un refugio natural donde las aguas termales brotan en medio de la montaña. Allí podrás disfrutar de un baño relajante y vivir una terapia de contraste alternando el calor del termal con las frías aguas del río.",

            conclusion:
                "Una experiencia ideal para quienes buscan conectar con la naturaleza, descubrir la historia local y disfrutar de un recorrido tranquilo que combina senderismo, bienestar y paisajes inolvidables.",

            highlights: [
                {
                    title: "Senderismo con historia",
                    description:
                        "Camina por antiguos caminos de arriería rodeados de bosque andino y palmas de cera, siguiendo rutas llenas de tradición."
                },
                {
                    title: "Termales naturales",
                    description:
                        "Relájate en aguas termales rodeadas por un entorno montañoso único y disfruta de una experiencia de bienestar al aire libre."
                },
                {
                    title: "Cultura campesina",
                    description:
                        "Conoce las historias, costumbres y memorias que conservan los habitantes de la región y sus tradicionales caminos."
                }
            ]
        },
        itinerary: [
            {
                time: "6:00 AM",
                activity: "Desayuno tradicional en Murillo."
            },
            {
                time: "6:30 AM",
                activity: "Traslado en vehículo 4x4 hacia Puerto Masato."
            },
            {
                time: "8:00 AM",
                activity: "Inicio del trekking por camino de herradura hasta el Cañón del Río Recio."
            },
            {
                time: "10:00 AM",
                activity: "Baño en el Termal de la Campanita y terapia de contraste con el río."
            },
            {
                time: "11:30 AM",
                activity: "Ascenso de regreso hacia Puerto Masato."
            },
            {
                time: "2:00 PM",
                activity: "Almuerzo campesino en Murillo y cierre de la experiencia."
            }
        ],
        equipment: [
            {
                title: "Vestimenta",
                items: [
                    "Buso térmico o licrado",
                    "Pantalón de secado rápido",
                    "Chaqueta impermeable"
                ]
            },
            {
                title: "Calzado",
                items: [
                    "Botas de senderismo con buen agarre"
                ]
            },
            {
                title: "Para el termal",
                items: [
                    "Vestido de baño",
                    "Toalla",
                    "Ropa de cambio"
                ]
            },
            {
                title: "Accesorios",
                items: [
                    "Gorra o sombrero",
                    "Gafas de sol",
                    "Cuello tipo buff"
                ]
            },
            {
                title: "Indispensables",
                items: [
                    "Morral de 25L",
                    "1 litro de agua",
                    "Snacks",
                    "Bloqueador solar"
                ]
            }
        ],
        tips: [
            {
                title: "Lleva ropa de cambio",
                description:
                    "Después del baño termal agradecerás tener ropa seca para el regreso."
            },
            {
                title: "Disfruta la terapia de contraste",
                description:
                    "Alternar las aguas termales con el Río Recio proporciona una sensación revitalizante y relajante."
            },
            {
                title: "Camina con tranquilidad",
                description:
                    "El recorrido no exige velocidad; tómate el tiempo para disfrutar el bosque y los paisajes."
            }
        ],
        prices: {

            national: "180.000",

            foreign: "180.000",

            groupInfo:
                "Salidas grupales desde 4 personas. Cupos limitados a 12 viajeros.",

            privateInfo:
                "Experiencias privadas para grupos de 1 a 3 personas.",

            includes: [
                "Desayuno y almuerzo campesino",
                "Transporte 4x4 desde Murillo",
                "Bastones de senderismo (si se requieren)",
                "Botas pantaneras (si se requieren)",
                "Guía local certificado",
                "Seguro de asistencia médica"
            ]
        }
    },
    {
        id: 3,
        slug: "termal-de-canaan",
        tag: "canaan",
        name: "Termal de Canaán",
        category: "Naturaleza, Cultura y Bienestar",
        location: "Murillo, Tolima",
        altitude: "3.000 msnm",
        duration: "1 día",
        distance: "50 km (Ruta 4x4)",
        difficulty: "Fácil",
        heroImage: IMAGES.tour.subPages.canaan ,
        shortDescription: "Descubre un oasis de aguas termales rodeado de naturaleza, ideal para desconectarte, descansar y renovar cuerpo y mente.",
        description: {
            introduction:
                "Recorre la histórica Ruta de la Templanza del Arriero en una aventura 4x4 que combina paisajes andinos, tradición campesina y algunos de los escenarios naturales más representativos de Murillo.",

            content:
                "Durante el recorrido descubrirás la Cascada del Abuelo, bosques altoandinos, el emblemático valle de palma de cera y el Termal de Canaán, un oasis natural donde las aguas calientes emergen en medio de la montaña para ofrecer un espacio de descanso y bienestar.",

            conclusion:
                "Una experiencia perfecta para quienes desean conocer la cultura local, disfrutar la naturaleza y relajarse en aguas termales después de una jornada llena de paisajes e historias.",

            highlights: [
                {
                    title: "Ruta 4x4 por la montaña",
                    description:
                        "Recorre caminos rurales rodeados de bosques andinos, cascadas y paisajes que conservan la esencia del antiguo camino de los arrieros."
                },
                {
                    title: "Naturaleza y patrimonio",
                    description:
                        "Visita la Cascada del Abuelo y el valle de palma de cera, dos escenarios que representan la riqueza natural y cultural de Murillo."
                },
                {
                    title: "Termales de Canaán",
                    description:
                        "Relájate en aguas termales naturales rodeadas por montañas, un espacio ideal para recuperar energía y conectar con la naturaleza."
                }
            ]
        },
        itinerary: [
            {
                time: "5:00 AM",
                activity: "Desayuno tradicional en Murillo."
            },
            {
                time: "5:40 AM",
                activity: "Salida en vehículo 4x4 por la Ruta de la Templanza del Arriero."
            },
            {
                time: "7:00 AM",
                activity: "Visita a la Cascada del Abuelo y recorrido por el bosque de niebla."
            },
            {
                time: "10:00 AM",
                activity: "Refrigerio en finca campesina y encuentro con saberes locales."
            },
            {
                time: "10:40 AM",
                activity: "Ingreso y tiempo libre en el Termal de Canaán."
            },
            {
                time: "1:30 PM",
                activity: "Almuerzo campesino en la Finca La Esperanza."
            },
            {
                time: "4:00 PM",
                activity: "Regreso al casco urbano de Murillo."
            }
        ],
        equipment: [
            {
                title: "Vestimenta",
                items: [
                    "Buso térmico o licrado",
                    "Pantalón de secado rápido",
                    "Chaqueta impermeable"
                ]
            },
            {
                title: "Calzado",
                items: [
                    "Botas de senderismo o montaña"
                ]
            },
            {
                title: "Para el termal",
                items: [
                    "Vestido de baño",
                    "Toalla",
                    "Ropa de cambio"
                ]
            },
            {
                title: "Accesorios",
                items: [
                    "Gorro",
                    "Guantes",
                    "Cuello tipo buff",
                    "Gafas de sol"
                ]
            },
            {
                title: "Indispensables",
                items: [
                    "Morral de 25L",
                    "1 litro de agua",
                    "Snacks",
                    "Bloqueador solar"
                ]
            }
        ],
        tips: [
            {
                title: "Disfruta el recorrido",
                description:
                    "Lleva tu cámara o celular con suficiente batería; durante la ruta encontrarás cascadas, palmas de cera y paisajes únicos."
            },
            {
                title: "Prepárate para el termal",
                description:
                    "Empaca ropa de cambio y una toalla para disfrutar cómodamente de las aguas termales."
            },
            {
                title: "Conecta con la cultura local",
                description:
                    "Aprovecha el recorrido para conocer las historias y tradiciones que comparten los guías y las familias campesinas."
            }
        ],
        prices: {

            national: "220.000",

            foreign: "220.000",

            groupInfo:
                "Salidas grupales desde 5 personas. Cupos máximos de 14 viajeros.",

            privateInfo:
                "Experiencias privadas para grupos de 1 a 4 personas.",

            includes: [
                "Desayuno, refrigerio y almuerzo campesino",
                "Transporte 4x4 durante todo el recorrido",
                "Ingreso al Termal de Canaán",
                "Guía local certificado",
                "Bastones de trekking (si se requieren)",
                "Botas pantaneras (si se requieren)",
                "Seguro de asistencia médica"
            ]
        }
    },
    {
        id: 4,
        slug: "mirador-de-los-nevados",
        tag: "mirador",
        name: "Mirador de los Nevados",
        category: "Trekking de Alta Montaña",
        location: "Murillo, Tolima",
        altitude: "3.743 msnm",
        duration: "1 día",
        distance: "9 km",
        difficulty: "Moderada",
        heroImage: IMAGES.tour.subPages.mirador,
        shortDescription: "Contempla panorámicas impresionantes de los volcanes y montañas del Parque Nacional desde uno de los miradores más emblemáticos de la región",
        description: {
            introduction:
                "Adéntrate en el Páramo del Oso y descubre un recorrido donde el bosque altoandino, los frailejones y los nacimientos de agua conducen hasta uno de los miradores naturales más impresionantes del Parque Nacional Natural Los Nevados.",

            content:
                "A lo largo del sendero caminarás entre ecosistemas de alta montaña mientras conoces la importancia del páramo como fuente de vida. El recorrido culmina en un balcón natural desde donde, si el clima lo permite, podrás contemplar el Nevado del Ruiz, Santa Isabel, Paramillo del Cisne y el Nevado del Tolima.",

            conclusion:
                "Una experiencia diseñada para quienes disfrutan el senderismo, la fotografía de paisaje y la inmensidad de los Andes colombianos.",

            highlights: [
                {
                    title: "Trekking de altura",
                    description:
                        "Recorre un sendero de 9 km atravesando el Páramo del Oso y el bosque altoandino, rodeado de frailejones y paisajes únicos."
                },
                {
                    title: "Panorámica de los nevados",
                    description:
                        "Disfruta uno de los mejores miradores naturales de la región con vistas privilegiadas hacia los principales nevados del Parque Nacional."
                },
                {
                    title: "La fábrica de agua",
                    description:
                        "Conoce nacimientos de aguas azufradas y comprende el papel fundamental del páramo en la conservación del recurso hídrico."
                }
            ]
        },
        itinerary: [
            {
                time: "4:30 AM",
                activity: "Encuentro y desayuno campesino en Murillo."
            },
            {
                time: "5:00 AM",
                activity: "Traslado en vehículo 4x4 hacia el sector Casa Roja."
            },
            {
                time: "6:10 AM",
                activity: "Inicio del trekking por páramo y bosque altoandino."
            },
            {
                time: "9:30 AM",
                activity: "Llegada al Mirador de los Nevados y tiempo para contemplación y fotografía."
            },
            {
                time: "10:30 AM",
                activity: "Inicio del descenso por el mismo sendero."
            },
            {
                time: "1:00 PM",
                activity: "Regreso a Casa Roja y traslado hacia Murillo."
            },
            {
                time: "2:10 PM",
                activity: "Almuerzo tradicional y cierre de la experiencia."
            }
        ],
        equipment: [
            {
                title: "Vestimenta",
                items: [
                    "Buso térmico o licrado",
                    "Pantalón de secado rápido",
                    "Chaqueta impermeable y cortavientos"
                ]
            },
            {
                title: "Calzado",
                items: [
                    "Botas de montaña de caña media o alta"
                ]
            },
            {
                title: "Accesorios",
                items: [
                    "Gorro",
                    "Guantes",
                    "Cuello tipo buff",
                    "Gafas de sol con protección UV"
                ]
            },
            {
                title: "Indispensables",
                items: [
                    "Morral de 25L",
                    "1 litro de agua",
                    "Snacks energéticos",
                    "Bloqueador solar"
                ]
            },
            {
                title: "Recomendado",
                items: [
                    "Ropa de cambio",
                    "Manta térmica de emergencia",
                    "Hidratación adicional"
                ]
            }
        ],
        tips: [
            {
                title: "El clima decide",
                description:
                    "Las mejores vistas dependen de las condiciones climáticas. Lleva paciencia y disfruta cada momento del recorrido."
            },
            {
                title: "Protección solar",
                description:
                    "Aunque la temperatura sea baja, la radiación UV en alta montaña es intensa. Usa protector solar y gafas con filtro UV."
            },
            {
                title: "Camina a tu ritmo",
                description:
                    "La altitud puede hacer que el esfuerzo se sienta mayor. Mantén un paso constante y aprovecha las pausas para admirar el paisaje."
            }
        ],
        prices: {

            national: "240.000",

            foreign: "240.000",

            groupInfo:
                "Salidas grupales desde 4 personas. Cupos máximos de 10 viajeros.",

            privateInfo:
                "Experiencias privadas para grupos de 1 a 3 personas.",

            includes: [
                "Desayuno y almuerzo tradicional",
                "Transporte 4x4 desde Murillo",
                "Guía local certificado",
                "Ingreso al recorrido",
                "Bastones de trekking (bajo solicitud)",
                "Botas pantaneras (si se requieren)",
                "Seguro de asistencia médica"
            ]
        }
    },
    {
        id: 5,
        slug: "camino-del-oso-mosul",
        tag: "oso",
        name: "Camino del Oso - Mosul",
        category: "Expedición de Alta Montaña",
        location: "Murillo, Tolima",
        altitude: "4.087 msnm",
        duration: "2 días / 1 noche",
        distance: "Aprox. 24 km",
        difficulty: "Alta",
        heroImage: IMAGES.tour.subPages.oso ,
        shortDescription: "Recorre antiguos senderos rodeados de bosques andinos, fauna silvestre y paisajes que conservan la esencia natural del Parque Nacional.",
        description: {
            introduction:
                "Vive una expedición de dos días por algunos de los paisajes más remotos del Parque Nacional Natural Los Nevados. El Camino del Oso – Mosul recorre páramos, bosques de niebla, lagunas de origen glaciar y antiguas rutas campesinas que conservan intacta la esencia de la montaña.",

            content:
                "La travesía atraviesa ecosistemas de alta montaña hasta llegar a la Finca Mosul, donde una familia campesina abre las puertas de su hogar para compartir la noche, la gastronomía tradicional y las historias que han dado vida a este territorio durante generaciones.",

            conclusion:
                "Una experiencia diseñada para amantes del trekking que buscan desconectarse, superar nuevos retos y conocer la riqueza natural y cultural de Murillo desde una perspectiva auténtica.",

            highlights: [
                {
                    title: "Expedición de dos días",
                    description:
                        "Recorre páramos, lagunas, bosques de niebla y cañones en una travesía que combina aventura, naturaleza y cultura campesina."
                },
                {
                    title: "Hospedaje rural",
                    description:
                        "Comparte una noche en la Finca Mosul, viviendo de cerca la hospitalidad, gastronomía y tradiciones de una familia campesina."
                },
                {
                    title: "Paisajes de alta montaña",
                    description:
                        "Camina entre Laguna Verde, el Boquerón, el Cañón del Río Azul y miradores naturales rodeados por los ecosistemas más representativos del parque."
                }
            ]
        },
        itinerary: [
            {
                time: "Día 1 · Mañana",
                activity:
                    "Salida desde Casa Roja e inicio del trekking atravesando la Reserva del Oso y el sector Siete Cabezas."
            },
            {
                time: "Día 1 · Mediodía",
                activity:
                    "Almuerzo junto al Río Recio, recorrido por Laguna Romerales y mirador de Laguna Verde."
            },
            {
                time: "Día 1 · Tarde",
                activity:
                    "Ascenso al Boquerón (4.087 msnm) y descenso hacia el Cañón del Río Azul."
            },
            {
                time: "Día 1 · Noche",
                activity:
                    "Llegada a la Finca Mosul, cena tradicional y alojamiento en casa campesina."
            },
            {
                time: "Día 2 · Mañana",
                activity:
                    "Desayuno e inicio del descenso por el bosque de niebla y el Cañón del Río Azul."
            },
            {
                time: "Día 2 · Tarde",
                activity:
                    "Llegada a la vereda La Estrella, regreso a Murillo y cierre de la expedición."
            }
        ],
        equipment: [
            {
                title: "Vestimenta",
                items: [
                    "Buso térmico",
                    "Pantalón de secado rápido",
                    "Chaqueta impermeable y cortavientos"
                ]
            },
            {
                title: "Calzado",
                items: [
                    "Botas de trekking de caña alta",
                    "Calzado cómodo para descansar en la finca"
                ]
            },
            {
                title: "Accesorios",
                items: [
                    "Gorro",
                    "Guantes",
                    "Cuello tipo buff",
                    "Gafas con protección UV",
                    "Bloqueador solar"
                ]
            },
            {
                title: "Seguridad",
                items: [
                    "Manta térmica",
                    "Muda completa de ropa protegida en bolsa impermeable"
                ]
            },
            {
                title: "Indispensables",
                items: [
                    "Morral de 30 a 40L",
                    "2 litros de agua",
                    "Snacks energéticos",
                    "Linterna frontal",
                    "Impermeable para el morral"
                ]
            }
        ],
        tips: [
            {
                title: "Prepárate físicamente",
                description:
                    "Es una expedición exigente. Se recomienda experiencia previa en caminatas de larga distancia y buena condición física."
            },
            {
                title: "Empaca ligero",
                description:
                    "Lleva únicamente lo necesario; un morral liviano hará mucho más cómodo el recorrido."
            },
            {
                title: "Disfruta la experiencia rural",
                description:
                    "La noche en la Finca Mosul es parte esencial del recorrido. Aprovecha para conocer las historias y costumbres de la comunidad local."
            }
        ],
        prices: {

            national: "850.000",

            foreign: "850.000",

            groupInfo:
                "Salidas grupales desde 4 personas. Cupos máximos de 10 viajeros.",

            privateInfo:
                "Experiencias privadas para grupos de 1 a 3 personas.",

            includes: [
                "2 desayunos",
                "2 almuerzos",
                "1 cena tradicional",
                "1 noche de alojamiento en casa campesina",
                "Transporte 4x4",
                "Guía local certificado",
                "Bastones de trekking",
                "Botas pantaneras (si se requieren)",
                "Seguro de asistencia médica"
            ]
        }
    },
    {
        id: 6,
        slug: "expedicion-nevado-santa-isabel",
        tag: "nevado",
        name: "Expedición Nevado Santa Isabel",
        category: "Alta Montaña y Glaciar",
        location: "Parque Nacional Natural Los Nevados",
        altitude: "4.950 msnm",
        duration: "2 días / 1 noche",
        distance: "Aprox. 18 km",
        difficulty: "Muy Alta",
        heroImage: IMAGES.tour.subPages.nevado ,
        shortDescription: "Conquista las nieves del Nevado Santa Isabel y vive una aventura de alta montaña rodeada de glaciares, lagunas y paisajes espectaculares.",
        description: {
            introduction:
                "Vive una expedición de alta montaña hacia uno de los últimos glaciares tropicales de Colombia. El Nevado Santa Isabel ofrece una experiencia única para quienes desean desafiar sus límites y descubrir la majestuosidad del Parque Nacional Natural Los Nevados.",

            content:
                "Durante dos días recorrerás páramos, morrenas glaciares y senderos de alta montaña mientras realizas un proceso de aclimatación que culmina con el ascenso al glaciar utilizando equipo técnico especializado. Cada etapa está diseñada para garantizar una experiencia segura y memorable.",

            conclusion:
                "Más que alcanzar una cima, esta expedición representa un encuentro con la inmensidad de la naturaleza y una oportunidad para vivir la alta montaña colombiana de la mano de guías especializados.",

            highlights: [
                {
                    title: "Aclimatación en Laguna Verde",
                    description:
                        "Prepara tu cuerpo para la altura recorriendo uno de los paisajes más emblemáticos del parque, rodeado de frailejones y ecosistemas de páramo."
                },
                {
                    title: "Ascenso al glaciar",
                    description:
                        "Utiliza crampones, piolet y equipo técnico para alcanzar el borde glaciar acompañado por guías certificados en alta montaña."
                },
                {
                    title: "Panorámica de los Andes",
                    description:
                        "Desde la zona alta contempla un espectacular horizonte dominado por los nevados Ruiz, Tolima, El Cisne y Quindío."
                }
            ]
        },
        itinerary: [
            {
                time: "Día 1 · Mañana",
                activity:
                    "Salida desde Manizales, ingreso al Parque Nacional Natural Los Nevados y desayuno campesino."
            },
            {
                time: "Día 1 · Media mañana",
                activity:
                    "Caminata de aclimatación hasta Laguna Verde del Cisne."
            },
            {
                time: "Día 1 · Tarde",
                activity:
                    "Almuerzo, charla técnica sobre seguridad y uso del equipo de montaña."
            },
            {
                time: "Día 1 · Noche",
                activity:
                    "Cena y alojamiento en el Refugio de Montaña El Cisne."
            },
            {
                time: "Día 2 · Madrugada",
                activity:
                    "Inicio del ascenso desde Conejeras hacia el glaciar."
            },
            {
                time: "Día 2 · Amanecer",
                activity:
                    "Equipamiento técnico con crampones, piolet, arnés y ascenso al borde glaciar."
            },
            {
                time: "Día 2 · Mañana",
                activity:
                    "Tiempo para contemplación, fotografía y regreso controlado."
            },
            {
                time: "Día 2 · Tarde",
                activity:
                    "Descenso, almuerzo y retorno hacia Manizales."
            }
        ],
        equipment: [
            {
                title: "Vestimenta",
                items: [
                    "Primera capa térmica",
                    "Pantalón de secado rápido",
                    "Chaqueta impermeable y cortavientos"
                ]
            },
            {
                title: "Calzado",
                items: [
                    "Botas de alta montaña",
                    "Polainas",
                    "Medias térmicas"
                ]
            },
            {
                title: "Accesorios",
                items: [
                    "Gorro",
                    "Guantes térmicos",
                    "Cuello tipo buff",
                    "Gafas con protección UV categoría alta"
                ]
            },
            {
                title: "Equipo personal",
                items: [
                    "Morral de 30L",
                    "1.5 litros de agua",
                    "Snacks energéticos",
                    "Bloqueador solar",
                    "Protector labial"
                ]
            },
            {
                title: "Equipo técnico",
                items: [
                    "Crampones",
                    "Piolet",
                    "Arnés",
                    "Casco",
                    "Linterna frontal"
                ]
            }
        ],
        tips: [
            {
                title: "Aclimátate correctamente",
                description:
                    "Descansa bien antes de la expedición, mantente hidratado y sigue las recomendaciones de los guías durante todo el proceso."
            },
            {
                title: "Escucha a los guías",
                description:
                    "La seguridad en el glaciar depende del trabajo en equipo y del cumplimiento de las indicaciones técnicas."
            },
            {
                title: "Respeta el glaciar",
                description:
                    "El Nevado Santa Isabel es uno de los últimos glaciares tropicales del país. Cada visitante tiene la responsabilidad de contribuir a su conservación."
            }
        ],
        expedition: {
            nights: 1,
            accommodation: "Refugio de Montaña El Cisne",
            meals: [
                "2 desayunos",
                "2 almuerzos",
                "1 cena"
            ]
        },
        experience: {
            level: "Avanzado",
            hikingDistance: "18 km",
            maxAltitude: "4.950 msnm",
            estimatedTime: "2 días"
        },
        prices: {

            national: "1.400.000",

            foreign: "1.400.000",

            groupInfo:
                "Salidas grupales para 4 a 10 participantes.",

            privateInfo:
                "Expediciones privadas para grupos de 1 a 3 personas.",

            includes: [
                "Transporte 4x4 desde Manizales",
                "Guías certificados en alta montaña",
                "Ingreso al Parque Nacional Natural Los Nevados",
                "Equipo técnico de glaciar (crampones, piolet, arnés, casco, cuerdas y linterna frontal)",
                "Bastones de trekking",
                "Seguro de asistencia médica"
            ]
        }
    }
];