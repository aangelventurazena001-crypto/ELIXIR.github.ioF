// Base de datos de productos
const productos = {
    'dior-sauvage': {
        titulo: 'Dior Sauvage',
        marca: 'by Christian Dior',
        categoria: 'PERFUME PARA HOMBRE',
        precio: 459,
        precioAnterior: 599,
        descuento: '23% de descuento',
        rating: 4.8,
        reviews: 2547,
        imagenPrincipal: 'img/suaveg1.jpeg',  // ✅ CAMBIADO
        miniaturas: [
            'img/suaveg1.jpeg',               // ✅ CAMBIADO
            'img/suaveg2.jpeg',               // ✅ CAMBIADO (necesitas esta imagen)
            'img/diorsauvae3.jpeg',               // ✅ CAMBIADO (necesitas esta imagen)
            'img/dior4.jpeg'
        ],
        descripcionCorta: 'Una fragancia salvaje y noble que captura la esencia de un cielo al atardecer. Con notas frescas de bergamota calabresa y pimienta de Sichuan que se combinan con la masculinidad del ambroxán.',
        tamanos: [
            { ml: 60, precio: 299 },
            { ml: 100, precio: 459 },
            { ml: 200, precio: 789 }
        ],
        piramideOlfativa: {
            salida: {
                emoji: '🍋',
                notas: [
                    { nombre: 'Bergamota de Calabria', descripcion: 'Cítrico fresco y chispeante' },
                    { nombre: 'Pimienta de Sichuan', descripcion: 'Especiado vibrante y picante' }
                ]
            },
            corazon: {
                emoji: '🌿',
                notas: [
                    { nombre: 'Lavanda', descripcion: 'Aromático suave y elegante' },
                    { nombre: 'Elemi', descripcion: 'Resinoso fresco y especiado' },
                    { nombre: 'Geranio', descripcion: 'Floral verde y refinado' }
                ]
            },
            fondo: {
                emoji: '🌲',
                notas: [
                    { nombre: 'Ambroxán', descripcion: 'Amaderado mineral y sensual' },
                    { nombre: 'Cedro de Virginia', descripcion: 'Madera noble y persistente' },
                    { nombre: 'Vetiver', descripcion: 'Terroso profundo y masculino' }
                ]
            }
        },
        descripcionCompleta: {
            sobre: 'Dior Sauvage es una fragancia que captura la esencia de espacios abiertos bajo un cielo de un azul nocturno ardiente. Una fragancia radical que conjuga nobleza e intensidad con notas frescas y sensuales.',
            inspiracion: 'Inspirado en paisajes desérticos al atardecer, cuando el cielo se tiñe de tonos rojizos y dorados. François Demachy, Perfumista-Creador de Dior, ha diseñado una composición en la que la nobleza de la Bergamota se intensifica con notas amaderadas viriles.',
            ocasion: 'Perfecta para uso diario y ocasiones especiales. Su versatilidad permite utilizarla tanto en ambientes formales como casuales. Ideal para primavera y verano, aunque su carácter amaderado la hace apropiada para cualquier estación.'
        },
        especificaciones: {
            marca: 'Christian Dior',
            tipo: 'Eau de Toilette',
            concentracion: '10-15%',
            duracion: '8-10 horas',
            estela: 'Moderada a Fuerte',
            genero: 'Masculino',
            familiaOlfativa: 'Amaderada Aromática Fresca',
            año: '2015',
            perfumista: 'François Demachy',
            presentacion: 'Frasco de vidrio con atomizador',
            autenticidad: '100% Original con garantía',
            origen: 'Francia'
        }
    },

    'bleu-chanel': {
        titulo: 'Bleu de Chanel',
        marca: 'by Chanel',
        categoria: 'PERFUME PARA HOMBRE',
        precio: 520,
        precioAnterior: 680,
        descuento: '24% de descuento',
        rating: 4.9,
        reviews: 3241,
        imagenPrincipal: 'img/belu1.jpeg',
        miniaturas: [
            'img/bleu2.jpeg',
            'img/bleu3.jpeg',
            'img/bleu4.jpeg',
            'img/belu1.jpeg'
        ],
        descripcionCorta: 'Una fragancia aromática amaderada que encarna la libertad. Una composición audaz que revela una personalidad decidida y determinada.',
        tamanos: [
            { ml: 50, precio: 350 },
            { ml: 100, precio: 520 },
            { ml: 150, precio: 750 }
        ],
        piramideOlfativa: {
            salida: {
                emoji: '🍊',
                notas: [
                    { nombre: 'Cítrico', descripcion: 'Frescura vibrante' },
                    { nombre: 'Menta', descripcion: 'Aromático refrescante' }
                ]
            },
            corazon: {
                emoji: '🌸',
                notas: [
                    { nombre: 'Pomelo', descripcion: 'Cítrico amargo' },
                    { nombre: 'Jazmín', descripcion: 'Floral elegante' }
                ]
            },
            fondo: {
                emoji: '🪵',
                notas: [
                    { nombre: 'Cedro', descripcion: 'Amaderado seco' },
                    { nombre: 'Sándalo', descripcion: 'Cremoso cálido' },
                    { nombre: 'Incienso', descripcion: 'Místico profundo' }
                ]
            }
        },
        descripcionCompleta: {
            sobre: 'BLEU DE CHANEL es la fragancia de un hombre que se niega a dejarse llevar. Un aromático amaderado con una personalidad decidida y determinada.',
            inspiracion: 'Inspirado en el azul del cielo infinito, símbolo de libertad absoluta. Una fragancia para el hombre moderno que forja su propio destino.',
            ocasion: 'Ideal para el hombre contemporáneo. Perfecta para el día y la noche, tanto en entornos profesionales como sociales.'
        },
        especificaciones: {
            marca: 'Chanel',
            tipo: 'Eau de Parfum',
            concentracion: '15-20%',
            duracion: '8-12 horas',
            estela: 'Fuerte',
            genero: 'Masculino',
            familiaOlfativa: 'Aromática Amaderada',
            año: '2010',
            perfumista: 'Jacques Polge',
            presentacion: 'Frasco minimalista con atomizador',
            autenticidad: '100% Original con garantía',
            origen: 'Francia'
        }
    },

    'la-vie-est-belle': {
        titulo: 'La Vie Est Belle',
        marca: 'by Lancôme',
        categoria: 'PERFUME PARA MUJER',
        precio: 389,
        precioAnterior: 510,
        descuento: '24% de descuento',
        rating: 4.7,
        reviews: 4120,
        imagenPrincipal: 'img/lavie1.jpeg',
        miniaturas: [
            'img/lavie2.jpeg',
            'img/lavie3.jpeg',
            'img/lavie4.jpeg',
            'img/lavie1.jpeg'
        ],
        descripcionCorta: 'Una fragancia dulce y femenina que transmite alegría y armonía. El perfume de la felicidad con iris, pachulí y vainilla gourmand.',
        tamanos: [
            { ml: 30, precio: 199 },
            { ml: 50, precio: 289 },
            { ml: 100, precio: 389 }
        ],
        piramideOlfativa: {
            salida: {
                emoji: '🍐',
                notas: [
                    { nombre: 'Pera', descripcion: 'Frutal jugosa' },
                    { nombre: 'Grosella Negra', descripcion: 'Dulce ácida' }
                ]
            },
            corazon: {
                emoji: '🌺',
                notas: [
                    { nombre: 'Iris', descripcion: 'Floral elegante' },
                    { nombre: 'Jazmín', descripcion: 'Blanco sensual' },
                    { nombre: 'Azahar', descripcion: 'Delicado luminoso' }
                ]
            },
            fondo: {
                emoji: '🍦',
                notas: [
                    { nombre: 'Vainilla', descripcion: 'Gourmand cremosa' },
                    { nombre: 'Praline', descripcion: 'Dulce tentador' },
                    { nombre: 'Pachulí', descripcion: 'Terroso profundo' }
                ]
            }
        },
        descripcionCompleta: {
            sobre: 'La Vie Est Belle, el perfume de la felicidad. Una declaración de la belleza de la vida y del derecho a ser feliz.',
            inspiracion: 'Inspirada en la visión de la belleza natural y la alegría de vivir. Una fragancia que celebra la libertad de elegir tu propia felicidad.',
            ocasion: 'Perfecta para el día a día y ocasiones especiales. Una fragancia versátil que se adapta a cualquier momento.'
        },
        especificaciones: {
            marca: 'Lancome',
            tipo: 'Eau de Parfum',
            concentracion: '15-20%',
            duracion: '6-8 horas',
            estela: 'Moderada',
            genero: 'Femenino',
            familiaOlfativa: 'Floral Frutal Gourmand',
            año: '2012',
            perfumista: 'Olivier Polge, Dominique Ropion, Anne Flipo',
            presentacion: 'Frasco con alas de cristal',
            autenticidad: '100% Original con garantía',
            origen: 'Francia'
        }
    },

    'coco-mademoiselle': {
        titulo: 'Coco Mademoiselle',
        marca: 'by Chanel',
        categoria: 'PERFUME PARA MUJER',
        precio: 550,
        precioAnterior: 720,
        descuento: '24% de descuento',
        rating: 4.9,
        reviews: 5280,
        imagenPrincipal: 'img/coco2.jpeg',
        miniaturas: [
            'img/coco2.jpeg',
            'img/coco3.jpeg',
            'img/coco4.jpeg',
            'img/coco1.jpeg'
        ],
        descripcionCorta: 'Sensual y sofisticado, un clásico moderno. Oriental fresco con notas de naranja, Jazmín, rosa y pachulí.',
        tamanos: [
            { ml: 35, precio: 350 },
            { ml: 50, precio: 420 },
            { ml: 100, precio: 550 }
        ],
        piramideOlfativa: {
            salida: {
                emoji: '🍊',
                notas: [
                    { nombre: 'Naranja', descripcion: 'Cítrica fresca' },
                    { nombre: 'Bergamota', descripcion: 'Chispeante elegante' }
                ]
            },
            corazon: {
                emoji: '🌹',
                notas: [
                    { nombre: 'Jazmín', descripcion: 'Floral seductor' },
                    { nombre: 'Rosa', descripcion: 'Romántica suave' },
                    { nombre: 'Litchi', descripcion: 'Frutal exótico' }
                ]
            },
            fondo: {
                emoji: '🎋',
                notas: [
                    { nombre: 'Pachulí', descripcion: 'Terroso sensual' },
                    { nombre: 'Vainilla', descripcion: 'Cálida envolvente' },
                    { nombre: 'Vetiver', descripcion: 'Amaderado elegante' }
                ]
            }
        },
        descripcionCompleta: {
            sobre: 'COCO MADEMOISELLE es una fragancia oriental fresca y ambarina. Una fragancia con personalidad decidida y sorprendente frescura.',
            inspiracion: 'Inspirada en la audacia de Coco Chanel, una mujer que rompe las reglas. Para la mujer moderna que no teme ser ella misma.',
            ocasion: 'Ideal para la mujer segura y sofisticada. Perfecta para el día y la noche, especialmente en ocasiones especiales.'
        },
        especificaciones: {
            marca: 'Chanel',
            tipo: 'Eau de Parfum',
            concentracion: '15-20%',
            duracion: '7-9 horas',
            estela: 'Moderada a Fuerte',
            genero: 'Femenino',
            familiaOlfativa: 'Oriental Fresca',
            año: '2001',
            perfumista: 'Jacques Polge',
            presentacion: 'Frasco cuadrado minimalista',
            autenticidad: '100% Original con garantía',
            origen: 'Francia'
        }
    },

    'valentino-uomo': {
        titulo: 'Valentino Uomo',
        marca: 'by Valentino',
        categoria: 'PERFUME PARA HOMBRE',
        precio: 570,
        precioAnterior: 700,
        descuento: '18% de descuento',
        rating: 4.7,
        reviews: 4100,
        imagenPrincipal: 'img/valentino1.jpeg',
        miniaturas: [
        'img/valentino1.jpeg',
        'img/valentino2.jpeg',
        'img/valentino3.jpeg',
        'img/valentino4.jpeg'
        ],
        descripcionCorta: 'Elegante y sofisticado. Aromático amaderado con notas de cacao, avellana y cuero suave.',
        tamanos: [
        { ml: 50, precio: 420 },
        { ml: 100, precio: 570 },
        { ml: 150, precio: 710 }
        ],
        piramideOlfativa: {
        salida: {
        emoji: '🍊',
        notas: [
        { nombre: 'Bergamota', descripcion: 'Cítrica fresca y elegante' },
        { nombre: 'Mandarina', descripcion: 'Dulce y brillante' }
        ]
        },
        corazon: {
        emoji: '🍫',
        notas: [
        { nombre: 'Cacao', descripcion: 'Dulce y amaderado' },
        { nombre: 'Avellana', descripcion: 'Cálida y suave' },
        { nombre: 'Flor de Iris', descripcion: 'Sutil y elegante' }
        ]
        },
        fondo: {
        emoji: '🪵',
        notas: [
        { nombre: 'Cuero', descripcion: 'Fuerte y masculino' },
        { nombre: 'Sándalo', descripcion: 'Amaderado y cálido' },
        { nombre: 'Cedro', descripcion: 'Refrescante y elegante' }
        ]
        }
        },
        descripcionCompleta: {
        sobre: 'Valentino Uomo es un perfume masculino que combina dulzura y elegancia con notas amaderadas y gourmand.',
        inspiracion: 'Inspirado en el hombre moderno que busca sofisticación y estilo en cada detalle.',
        ocasion: 'Ideal para la noche, eventos especiales y citas donde quieres impresionar.'
        },
        especificaciones: {
        marca: 'Valentino',
        tipo: 'Eau de Parfum',
        concentracion: '15-20%',
        duracion: '7-9 horas',
        estela: 'Moderada a intensa',
        genero: 'Masculino',
        familiaOlfativa: 'Amaderada Gourmand',
        año: '2014',
        perfumista: 'Sophie Labbé',
        presentacion: 'Frasco elegante con tapón metálico y diseño sofisticado',
        autenticidad: '100% Original con garantía',
        origen: 'Italia'
        }
    },

    'paco-rabanne-1million': {
        titulo: '1 Million',
        marca: 'by Paco Rabanne',
        categoria: 'PERFUME PARA HOMBRE',
        precio: 560,
        precioAnterior: 700,
        descuento: '20% de descuento',
        rating: 4.8,
        reviews: 5200,
        imagenPrincipal: 'img/million1.jpeg',
        miniaturas: [
        'img/million1.jpeg',
        'img/million2.jpeg',
        'img/million3.jpeg',
        'img/million4.jpeg'
        ],
        descripcionCorta: 'Audaz y lujoso, un clásico moderno. Aromático especiado con notas de pomelo, canela y cuero.',
        tamanos: [
        { ml: 50, precio: 430 },
        { ml: 100, precio: 560 },
        { ml: 150, precio: 690 }
        ],
        piramideOlfativa: {
        salida: {
        emoji: '🍊',
        notas: [
        { nombre: 'Pomelo', descripcion: 'Cítrica fresca y vibrante' },
        { nombre: 'Menta', descripcion: 'Refrescante y energética' }
        ]
        },
        corazon: {
        emoji: '🌶️',
        notas: [
        { nombre: 'Canela', descripcion: 'Especiada y cálida' },
        { nombre: 'Rosa', descripcion: 'Sutil y elegante' },
        { nombre: 'Especia roja', descripcion: 'Picante y atractiva' }
        ]
        },
        fondo: {
        emoji: '🪵',
        notas: [
        { nombre: 'Cuero', descripcion: 'Fuerte y masculino' },
        { nombre: 'Ámbar', descripcion: 'Dulce y envolvente' },
        { nombre: 'Madera blanca', descripcion: 'Suave y elegante' }
        ]
        }
        },
        descripcionCompleta: {
        sobre: '1 Million de Paco Rabanne es un perfume masculino que combina frescura, especias y notas amaderadas creando un aroma audaz y lujoso.',
        inspiracion: 'Inspirado en la riqueza, el poder y la confianza masculina.',
        ocasion: 'Ideal para la noche, fiestas, citas y ocasiones donde quieres destacar.'
        },
        especificaciones: {
        marca: 'Paco Rabanne',
        tipo: 'Eau de Toilette',
        concentracion: '12-15%',
        duracion: '6-8 horas',
        estela: 'Moderada a intensa',
        genero: 'Masculino',
        familiaOlfativa: 'Aromático Especiado',
        año: '2008',
        perfumista: 'Domitille Bertier',
        presentacion: 'Frasco en forma de lingote dorado, icónico y llamativo',
        autenticidad: '100% Original con garantía',
        origen: 'España'
        }
    },

    'acqua-gio': {
        titulo: 'Acqua di Gio Profondo',
        marca: 'by Giorgio Armani',
        categoria: 'PERFUME PARA HOMBRE',
        precio: 520,
        precioAnterior: 650,
        descuento: '20% de descuento',
        rating: 4.8,
        reviews: 4300,
        imagenPrincipal: 'img/gio1.jpeg',
        miniaturas: [
        'img/gio1.jpeg',
        'img/gio2.jpeg',
        'img/gio3.jpeg',
        'img/gio4.jpeg'
        ],
        descripcionCorta: 'Refrescante y profundo, aroma sofisticado.',
        tamanos: [
        { ml: 50, precio: 380 },
        { ml: 100, precio: 520 },
        { ml: 150, precio: 650 }
        ],
        piramideOlfativa: {
        salida: {
        emoji: '🍋',
        notas: [
        { nombre: 'Bergamota', descripcion: 'Cítrica fresca y chispeante' },
        { nombre: 'Mandarina', descripcion: 'Dulce y jugosa' }
        ]
        },
        corazon: {
        emoji: '🌊',
        notas: [
        { nombre: 'Notas marinas', descripcion: 'Refrescante y ligera' },
        { nombre: 'Romero', descripcion: 'Herbal y elegante' },
        { nombre: 'Geranio', descripcion: 'Floral sutil' }
        ]
        },
        fondo: {
        emoji: '🪵',
        notas: [
        { nombre: 'Ámbar', descripcion: 'Cálido y envolvente' },
        { nombre: 'Madera de cedro', descripcion: 'Amaderado elegante' },
        { nombre: 'Incienso', descripcion: 'Profundo y sofisticado' }
        ]
        }
        },
        descripcionCompleta: {
        sobre: 'Acqua di Gio Profondo es un perfume masculino fresco y sofisticado que combina notas marinas con un fondo amaderado y profundo.',
        inspiracion: 'Inspirado en el océano y la libertad de la naturaleza. Para el hombre moderno que busca elegancia y frescura.',
        ocasion: 'Ideal para uso diario y ocasiones especiales, perfecto para primavera y verano.'
        },
        especificaciones: {
        marca: 'Giorgio Armani',
        tipo: 'Eau de Parfum',
        concentracion: '15-18%',
        duracion: '8-10 horas',
        estela: 'Moderada',
        genero: 'Masculino',
        familiaOlfativa: 'Aromático Acuático',
        año: '2020',
        perfumista: 'Alberto Morillas',
        presentacion: 'Frasco elegante con tapón metálico y diseño minimalista',
        autenticidad: '100% Original con garantía',
        origen: 'Italia'
        }
    },

    'bad-boy': {
        titulo: 'Bad Boy',
        marca: 'by Carolina Herrera',
        categoria: 'PERFUME PARA HOMBRE',
        precio: 540,
        precioAnterior: 680,
        descuento: '21% de descuento',
        rating: 4.7,
        reviews: 3950,
        imagenPrincipal: 'img/bad1.jpeg',
        miniaturas: [
        'img/bad1.jpeg',
        'img/bad2.jpeg',
        'img/bad3.jpeg',
        'img/bad4.jpeg'
        ],
        descripcionCorta: 'Fuerte y seductor, para hombres atrevidos.',
        tamanos: [
        { ml: 50, precio: 400 },
        { ml: 100, precio: 540 },
        { ml: 150, precio: 670 }
        ],
        piramideOlfativa: {
        salida: {
        emoji: '⚡',
        notas: [
        { nombre: 'Bergamota', descripcion: 'Cítrica fresca y chispeante' },
        { nombre: 'Pimienta negra', descripcion: 'Picante y enérgica' }
        ]
        },
        corazon: {
        emoji: '🌹',
        notas: [
        { nombre: 'Cedrón', descripcion: 'Herbal y fresco' },
        { nombre: 'Salvia', descripcion: 'Verde y elegante' },
        { nombre: 'Geranio', descripcion: 'Sutil floral' }
        ]
        },
        fondo: {
        emoji: '🪵',
        notas: [
        { nombre: 'Cacao', descripcion: 'Dulce y amaderado' },
        { nombre: 'Ámbar', descripcion: 'Cálido y envolvente' },
        { nombre: 'Tonka', descripcion: 'Suave y persistente' }
        ]
        }
        },
        descripcionCompleta: {
        sobre: 'Bad Boy de Carolina Herrera es una fragancia masculina que combina frescura, especias y notas amaderadas para un aroma audaz y seductor.',
        inspiracion: 'Inspirada en el hombre moderno, atrevido y seguro de sí mismo.',
        ocasion: 'Perfecta para la noche, eventos especiales y momentos en los que quieres destacar.'
        },
        especificaciones: {
        marca: 'Carolina Herrera',
        tipo: 'Eau de Parfum',
        concentracion: '15-18%',
        duracion: '8-10 horas',
        estela: 'Moderada a intensa',
        genero: 'Masculino',
        familiaOlfativa: 'Amaderada Especiada',
        año: '2019',
        perfumista: 'Annick Menardo',
        presentacion: 'Frasco en forma de rayo metálico, icónico y llamativo',
        autenticidad: '100% Original con garantía',
        origen: 'Estados Unidos'
        }
        },
        'armani-code': {
            titulo: 'Armani Code',
            marca: 'by Emporio Armani',
            categoria: 'PERFUME PARA HOMBRE',
            precio: 580,
            precioAnterior: 720,
            descuento: '19% de descuento',
            rating: 4.8,
            reviews: 4800,
            imagenPrincipal: 'img/armani1.jpeg',
            miniaturas: [
                'img/armani1.jpeg',
                'img/armani2.jpeg',
                'img/armani3.jpeg',
                'img/armani2.jpeg'
            ],
            descripcionCorta: 'Sofisticado y seductor, con notas de bergamota, limón, cuero y madera de olivo.',
            tamanos: [
                { ml: 50, precio: 420 },
                { ml: 100, precio: 580 },
                { ml: 150, precio: 710 }
            ],
            piramideOlfativa: {
                salida: {
                    emoji: '🍋',
                    notas: [
                        { nombre: 'Bergamota', descripcion: 'Cítrica fresca y elegante' },
                        { nombre: 'Limón', descripcion: 'Brillante y vivaz' }
                    ]
                },
                corazon: {
                    emoji: '🌿',
                    notas: [
                        { nombre: 'Flor de Olivo', descripcion: 'Sutil y aromática' },
                        { nombre: 'Cuarzo', descripcion: 'Refrescante y elegante' }
                    ]
                },
                fondo: {
                    emoji: '🪵',
                    notas: [
                        { nombre: 'Cuero', descripcion: 'Fuerte y masculino' },
                        { nombre: 'Madera de Olivo', descripcion: 'Amaderado y cálido' }
                    ]
                }
            },
            descripcionCompleta: {
                sobre: 'Armani Code de Emporio Armani es una fragancia masculina elegante y seductora, perfecta para cualquier ocasión especial.',
                inspiracion: 'Inspirada en la sofisticación y el estilo moderno del hombre urbano.',
                ocasion: 'Ideal para la noche, eventos formales y citas especiales.'
            },
            especificaciones: {
                marca: 'Emporio Armani',
                tipo: 'Eau de Toilette',
                concentracion: '12-15%',
                duracion: '6-8 horas',
                estela: 'Moderada',
                genero: 'Masculino',
                familiaOlfativa: 'Amaderada Especiada',
                año: '2004',
                perfumista: 'Domenico Pesci',
                presentacion: 'Frasco elegante y cilíndrico, minimalista y moderno',
                autenticidad: '100% Original con garantía',
                origen: 'Italia'
            }
        },

        'versace-dylan-blue': {
            titulo: 'Dylan Blue',
            marca: 'by Versace',
            categoria: 'PERFUME PARA HOMBRE',
            precio: 600,
            precioAnterior: 750,
            descuento: '20% de descuento',
            rating: 4.7,
            reviews: 4300,
            imagenPrincipal: 'img/versace1.jpeg',
            miniaturas: [
                'img/versace1.jpeg',
                'img/versace2.jpeg',
                'img/versace3.jpeg',
                'img/versace4.jpeg'
            ],
            descripcionCorta: 'Moderno y elegante, con notas de pomelo, incienso, violeta y madera de sándalo.',
            tamanos: [
                { ml: 50, precio: 450 },
                { ml: 100, precio: 600 },
                { ml: 150, precio: 730 }
            ],
            piramideOlfativa: {
                salida: {
                    emoji: '🍊',
                    notas: [
                        { nombre: 'Pomelo', descripcion: 'Cítrica fresca y vibrante' },
                        { nombre: 'Higo', descripcion: 'Dulce y sutil' }
                    ]
                },
                corazon: {
                    emoji: '🌿',
                    notas: [
                        { nombre: 'Incienso', descripcion: 'Ahumado y elegante' },
                        { nombre: 'Violeta', descripcion: 'Floral y delicada' }
                    ]
                },
                fondo: {
                    emoji: '🪵',
                    notas: [
                        { nombre: 'Madera de Sándalo', descripcion: 'Cálida y amaderada' },
                        { nombre: 'Almizcle', descripcion: 'Suave y duradera' }
                    ]
                }
            },
            descripcionCompleta: {
                sobre: 'Dylan Blue de Versace es una fragancia masculina moderna y elegante que combina frescura, notas florales y amaderadas, perfecta para el hombre seguro de sí mismo.',
                inspiracion: 'Inspirada en el Mediterráneo y la fuerza del hombre contemporáneo.',
                ocasion: 'Ideal para el día a día, la oficina, salidas casuales y noches especiales.'
            },
            especificaciones: {
                marca: 'Versace',
                tipo: 'Eau de Toilette',
                concentracion: '12-15%',
                duracion: '6-8 horas',
                estela: 'Moderada',
                genero: 'Masculino',
                familiaOlfativa: 'Aromático Fougère',
                año: '2014',
                perfumista: 'Alberto Morillas',
                presentacion: 'Frasco azul oscuro con tapón metálico, elegante y moderno',
                autenticidad: '100% Original con garantía',
                origen: 'Italia'
            }
        },

        'khamrah': {
            titulo: 'Khamrah – Lattafa',
            marca: 'Lattafa Perfumes',
            categoria: 'PERFUME UNISEX',
            precio: 590,
            precioAnterior: 720,
            descuento: '18% de descuento',
            rating: 4.9,
            reviews: 5200,
            imagenPrincipal: 'img/khamra1.jpeg',
            miniaturas: [
                'img/khamra1.jpeg',
                'img/khamra4.jpeg',
                'img/khamra3.jpeg',
                'img/khamra4.jpeg'
            ],
            descripcionCorta: 'Dulce, especiado y envolvente, con canela, nuez moscada y vainilla.',
            tamanos: [
                { ml: 50, precio: 420 },
                { ml: 100, precio: 590 },
                { ml: 150, precio: 730 }
            ],
            piramideOlfativa: {
                salida: {
                    emoji: '🍊',
                    notas: [
                        { nombre: 'Bergamota', descripcion: 'Cítrica y luminosa' },
                        { nombre: 'Canela', descripcion: 'Dulce, cálida y especiada' },
                        { nombre: 'Nuez Moscada', descripcion: 'Aromática e intensa' }
                    ]
                },
                corazon: {
                    emoji: '🌸',
                    notas: [
                        { nombre: 'Dátil', descripcion: 'Dulzor profundo y oriental' },
                        { nombre: 'Praliné', descripcion: 'Golosa y envolvente' },
                        { nombre: 'Mahónial', descripcion: 'Floral moderno y sofisticado' }
                    ]
                },
                fondo: {
                    emoji: '🪵',
                    notas: [
                        { nombre: 'Vainilla', descripcion: 'Cremosa y adictiva' },
                        { nombre: 'Amberwood', descripcion: 'Cálido y resinoso' },
                        { nombre: 'Benjuí', descripcion: 'Dulce oriental, balsámico' },
                        { nombre: 'Maderas' , descripcion: 'Toque amaderado elegante' }
                    ]
                }
            },
            descripcionCompleta: {
                sobre: 'Khamrah de Lattafa es un perfume dulce especiado con un toque oriental moderno. Su mezcla de canela, vainilla y dátil lo hace cálido, atractivo y altamente adictivo.',
                inspiracion: 'Inspirado en la mezcla perfecta entre lo árabe tradicional y lo gourmand occidental. Ideal para quienes quieren proyectar presencia y elegancia.',
                ocasion: 'Perfecto para fiestas, citas, noches frías, eventos especiales o para destacar con un aroma intenso.'
            },
            especificaciones: {
                marca: 'Lattafa',
                tipo: 'Eau de Parfum',
                concentracion: '20-25%',
                duracion: '8-12 horas',
                estela: 'Intensa',
                genero: 'Unisex',
                familiaOlfativa: 'Dulce Especiada Oriental',
                año: '2022',
                perfumista: 'No revelado',
                presentacion: 'Frasco dorado con estilo árabe elegante',
                autenticidad: '100% Original con garantía',
                origen: 'Emiratos Árabes Unidos'
            }
        },


        'gucci-bamboo': {
            titulo: 'Gucci Bamboo',
            marca: 'by Gucci',
            categoria: 'PERFUME PARA MUJER',
            precio: 520,
            precioAnterior: 650,
            descuento: '20% de descuento',
            rating: 4.6,
            reviews: 3200,
            imagenPrincipal: 'img/gucci-bambo4.jpeg',
            miniaturas: [
                'img/gucci-bamboo1.jpeg',
                'img/gucci-bamboo2.jpeg',
                'img/gucci-bamboo3.jpeg',
                'img/gucci-bambo4.jpeg'
            ],
            descripcionCorta: 'Elegante y fuerte, con notas de bergamota, lirio y vainilla.',
            tamanos: [
                { ml: 50, precio: 400 },
                { ml: 75, precio: 520 },
                { ml: 100, precio: 650 }
            ],
            piramideOlfativa: {
                salida: {
                    emoji: '🍊',
                    notas: [
                        { nombre: 'Bergamota', descripcion: 'Cítrica fresca y elegante' },
                        { nombre: 'Mandarina', descripcion: 'Dulce y brillante' }
                    ]
                },
                corazon: {
                    emoji: '🌸',
                    notas: [
                        { nombre: 'Lirio', descripcion: 'Floral y elegante' },
                        { nombre: 'Ylang Ylang', descripcion: 'Exótica y suave' }
                    ]
                },
                fondo: {
                    emoji: '🪵',
                    notas: [
                        { nombre: 'Vainilla', descripcion: 'Dulce y cálida' },
                        { nombre: 'Sándalo', descripcion: 'Amaderado y envolvente' }
                    ]
                }
            },
            descripcionCompleta: {
                sobre: 'Gucci Bamboo es un perfume femenino que combina fuerza y elegancia, con un aroma floral y amaderado que deja una estela duradera.',
                inspiracion: 'Inspirado en la mujer moderna, fuerte y decidida.',
                ocasion: 'Perfecto para el día a día, eventos sociales y ocasiones especiales.'
            },
            especificaciones: {
                marca: 'Gucci',
                tipo: 'Eau de Parfum',
                concentracion: '15-18%',
                duracion: '8-10 horas',
                estela: 'Moderada a intensa',
                genero: 'Femenino',
                familiaOlfativa: 'Floral Amaderada',
                año: '2015',
                perfumista: 'Alberto Morillas',
                presentacion: 'Frasco elegante con diseño de líneas geométricas y tapa dorada',
                autenticidad: '100% Original con garantía',
                origen: 'Italia'
            }
        },

        'ysl-black-opium': {
            titulo: 'Black Opium',
            marca: 'by Yves Saint Laurent',
            categoria: 'PERFUME PARA MUJER',
            precio: 590,
            precioAnterior: 730,
            descuento: '19% de descuento',
            rating: 4.8,
            reviews: 4100,
            imagenPrincipal: 'img/ysl-black-opium1.jpeg',
            miniaturas: [
                'img/ysl-black-opium1.jpeg',
                'img/ysl-black-opium2.jpeg',
                'img/ysl-black-opium3.jpeg',
                'img/ysl-black-opium4.jpeg'
            ],
            descripcionCorta: 'Sensual y atrevido, con notas de café, vainilla y flores blancas.',
            tamanos: [
                { ml: 50, precio: 450 },
                { ml: 90, precio: 590 },
                { ml: 120, precio: 720 }
            ],
            piramideOlfativa: {
                salida: {
                    emoji: '☕',
                    notas: [
                        { nombre: 'Café', descripcion: 'Intenso y estimulante' },
                        { nombre: 'Pera', descripcion: 'Dulce y jugosa' }
                    ]
                },
                corazon: {
                    emoji: '🌸',
                    notas: [
                        { nombre: 'Flor de Azahar', descripcion: 'Floral y elegante' },
                        { nombre: 'Jazmín', descripcion: 'Suave y seductor' }
                    ]
                },
                fondo: {
                    emoji: '🍮',
                    notas: [
                        { nombre: 'Vainilla', descripcion: 'Dulce y envolvente' },
                        { nombre: 'Cedro', descripcion: 'Amaderado y cálido' },
                        { nombre: 'Patchouli', descripcion: 'Terroso y elegante' }
                    ]
                }
            },
            descripcionCompleta: {
                sobre: 'Black Opium de YSL es una fragancia femenina intensa y seductora, que mezcla notas dulces y especiadas dejando una estela inolvidable.',
                inspiracion: 'Inspirado en la mujer moderna, atrevida y segura de sí misma.',
                ocasion: 'Ideal para la noche, eventos especiales y momentos donde quieres destacar.'
            },
            especificaciones: {
                marca: 'Yves Saint Laurent',
                tipo: 'Eau de Parfum',
                concentracion: '15-18%',
                duracion: '8-10 horas',
                estela: 'Moderada a intensa',
                genero: 'Femenino',
                familiaOlfativa: 'Oriental Floral',
                año: '2014',
                perfumista: 'Nathalie Lorson',
                presentacion: 'Frasco negro brillante con detalles rosados y textura brillante',
                autenticidad: '100% Original con garantía',
                origen: 'Francia'
            }
        },

        'versace-bright-crystal': {
            titulo: 'Bright Crystal',
            marca: 'by Versace',
            categoria: 'PERFUME PARA MUJER',
            precio: 580,
            precioAnterior: 700,
            descuento: '17% de descuento',
            rating: 4.8,
            reviews: 4200,
            imagenPrincipal: 'img/versace-bright-crystal2.jpeg',
            miniaturas: [
                'img/versace-bright-crystal4.jpeg',
                'img/versace-bright-crystal2.jpeg',
                'img/versace-bright-crystal3.jpeg',
                'img/versace-bright-crystal4.jpeg'
            ],
            descripcionCorta: 'Fresco y floral, con notas de granada, peonía y almizcle.',
            tamanos: [
                { ml: 50, precio: 450 },
                { ml: 90, precio: 580 },
                { ml: 150, precio: 720 }
            ],
            piramideOlfativa: {
                salida: {
                    emoji: '🍊',
                    notas: [
                        { nombre: 'Granada', descripcion: 'Frutal y jugosa' },
                        { nombre: 'Yuzu', descripcion: 'Cítrica y fresca' }
                    ]
                },
                corazon: {
                    emoji: '🌸',
                    notas: [
                        { nombre: 'Peonía', descripcion: 'Floral y delicada' },
                        { nombre: 'Magnolia', descripcion: 'Suave y elegante' },
                        { nombre: 'Loto', descripcion: 'Ligero y femenino' }
                    ]
                },
                fondo: {
                    emoji: '🌿',
                    notas: [
                        { nombre: 'Musk', descripcion: 'Suave y seductor' },
                        { nombre: 'Ambar', descripcion: 'Cálido y envolvente' },
                        { nombre: 'Madera de loto', descripcion: 'Sutil y refinada' }
                    ]
                }
            },
            descripcionCompleta: {
                sobre: 'Versace Bright Crystal es una fragancia femenina fresca, ligera y sofisticada, ideal para mujeres elegantes y modernas.',
                inspiracion: 'Inspirada en la feminidad y la pureza de un cristal brillante.',
                ocasion: 'Perfecta para el día, eventos casuales y momentos en los que se busca frescura y elegancia.'
            },
            especificaciones: {
                marca: 'Versace',
                tipo: 'Eau de Toilette',
                concentracion: '12-15%',
                duracion: '6-8 horas',
                estela: 'Moderada',
                genero: 'Femenino',
                familiaOlfativa: 'Floral Frutal',
                año: '2006',
                perfumista: 'Alberto Morillas',
                presentacion: 'Frasco transparente con tonos rosa y tapa en forma de cristal',
                autenticidad: '100% Original con garantía',
                origen: 'Italia'
            }
        },

        'chanel-no5': {
            titulo: 'Chanel No5',
            marca: 'by Chanel',
            categoria: 'PERFUME PARA MUJER',
            precio: 750,
            precioAnterior: 900,
            descuento: '17% de descuento',
            rating: 4.9,
            reviews: 6200,
            imagenPrincipal: 'img/chanel-no5-1.jpeg',
            miniaturas: [
                'img/chanel-no5-1.jpeg',
                'img/chanel-no5-2.jpeg',
                'img/chanel-no5-3.jpeg',
                'img/chanel-no5-4.jpeg'
            ],
            descripcionCorta: 'Clásico y elegante, un ícono atemporal con notas de jazmín, rosa y aldehídos.',
            tamanos: [
                { ml: 50, precio: 580 },
                { ml: 100, precio: 750 },
                { ml: 150, precio: 900 }
            ],
            piramideOlfativa: {
                salida: {
                    emoji: '🌸',
                    notas: [
                        { nombre: 'Aldehídos', descripcion: 'Brillantes y frescos' },
                        { nombre: 'Neroli', descripcion: 'Cítrica y delicada' }
                    ]
                },
                corazon: {
                    emoji: '🌹',
                    notas: [
                        { nombre: 'Jazmín', descripcion: 'Floral intenso y elegante' },
                        { nombre: 'Rosa', descripcion: 'Clásica y femenina' },
                        { nombre: 'Lirio del valle', descripcion: 'Sutil y fresco' }
                    ]
                },
                fondo: {
                    emoji: '🪵',
                    notas: [
                        { nombre: 'Sándalo', descripcion: 'Amaderado y suave' },
                        { nombre: 'Vainilla', descripcion: 'Dulce y cálida' },
                        { nombre: 'Ámbar', descripcion: 'Envolvente y elegante' }
                    ]
                }
            },
            descripcionCompleta: {
                sobre: 'Chanel No5 es un perfume femenino icónico que combina notas florales y aldehídicas, creando una fragancia elegante y sofisticada.',
                inspiracion: 'Inspirado en la feminidad clásica y la elegancia atemporal.',
                ocasion: 'Ideal para ocasiones especiales, eventos formales y momentos en los que quieres destacar.'
            },
            especificaciones: {
                marca: 'Chanel',
                tipo: 'Eau de Parfum',
                concentracion: '15-18%',
                duracion: '8-10 horas',
                estela: 'Moderada a intensa',
                genero: 'Femenino',
                familiaOlfativa: 'Floral Aldehídica',
                año: '1921',
                perfumista: 'Ernest Beaux',
                presentacion: 'Frasco icónico rectangular de vidrio con tapón cuadrado',
                autenticidad: '100% Original con garantía',
                origen: 'Francia'
            }
        },

        'ck-one': {
            titulo: 'CK One',
            marca: 'by Calvin Klein',
            categoria: 'PERFUME UNISEX',
            precio: 480,
            precioAnterior: 600,
            descuento: '20% de descuento',
            rating: 4.6,
            reviews: 4300,
            imagenPrincipal: 'img/ck-one1.jpeg',
            miniaturas: [
            'img/ck-one2.jpeg',
            'img/ck-one3.jpeg',
            'img/ck-one4.jpeg',
            'img/ck-one2.jpeg'

            ],
            descripcionCorta: 'Fresco y limpio, ideal para cualquier ocasión. Notas de cítricos y flores suaves.',
            tamanos: [
            { ml: 50, precio: 350 },
            { ml: 100, precio: 480 },
            { ml: 150, precio: 600 }
            ],
            piramideOlfativa: {
            salida: {
            emoji: '🍋',
            notas: [
            { nombre: 'Bergamota', descripcion: 'Cítrica y fresca' },
            { nombre: 'Limón', descripcion: 'Brillante y ligera' }
            ]
            },
            corazon: {
            emoji: '🌸',
            notas: [
            { nombre: 'Jazmín', descripcion: 'Floral y delicado' },
            { nombre: 'Violeta', descripcion: 'Sutil y suave' },
            { nombre: 'Neroli', descripcion: 'Aromático y elegante' }
            ]
            },
            fondo: {
            emoji: '🪵',
            notas: [
            { nombre: 'Sándalo', descripcion: 'Amaderado y cálido' },
            { nombre: 'Ámbar', descripcion: 'Dulce y envolvente' },
            { nombre: 'Musgo de roble', descripcion: 'Fresco y elegante' }
            ]
            }
            },
            descripcionCompleta: {
            sobre: 'CK One es una fragancia unisex que combina frescura cítrica con un corazón floral y un fondo amaderado, creando un aroma equilibrado y versátil.',
            inspiracion: 'Diseñado para romper barreras de género y ser accesible a todos.',
            ocasion: 'Ideal para el día a día, oficina y salidas informales.'
            },
            especificaciones: {
            marca: 'Calvin Klein',
            tipo: 'Eau de Toilette',
            concentracion: '10-12%',
            duracion: '4-6 horas',
            estela: 'Ligera a moderada',
            genero: 'Unisex',
            familiaOlfativa: 'Cítrica Floral',
            año: '1994',
            perfumista: 'Alberto Morillas',
            presentacion: 'Frasco transparente y minimalista, icónico y moderno',
            autenticidad: '100% Original con garantía',
            origen: 'Estados Unidos'
            }
            },

            'tom-ford-neroli': {
                titulo: 'Tom Ford Neroli Portofino',
                marca: 'by Tom Ford',
                categoria: 'PERFUME UNISEX',
                precio: 1350,
                precioAnterior: 1600,
                descuento: '16% de descuento',
                rating: 4.8,
                reviews: 4700,
                imagenPrincipal: 'img/tom-ford-neroli1.jpeg',
                miniaturas: [
                    'img/tom-ford-neroli4.jpeg',
                    'img/tom-ford-neroli2.jpeg',
                    'img/tom-ford-neroli3.jpeg',
                    'img/tom-ford-neroli4.jpeg'
                ],
                descripcionCorta: 'Fresco y cítrico, unisex elegante con notas de neroli, bergamota y flor de azahar.',
                tamanos: [
                    { ml: 50, precio: 1050 },
                    { ml: 100, precio: 1350 },
                    { ml: 250, precio: 2800 }
                ],
                piramideOlfativa: {
                    salida: {
                        emoji: '🍋',
                        notas: [
                            { nombre: 'Bergamota', descripcion: 'Cítrica y brillante' },
                            { nombre: 'Mandarina', descripcion: 'Dulce y jugosa' },
                            { nombre: 'Limón', descripcion: 'Fresco y vivificante' },
                            { nombre: 'Lavanda', descripcion: 'Aromática y limpia' }
                        ]
                    },
                    corazon: {
                        emoji: '🌸',
                        notas: [
                            { nombre: 'Neroli', descripcion: 'Floral cítrico elegante' },
                            { nombre: 'Flor de azahar', descripcion: 'Delicada y luminosa' },
                            { nombre: 'Jazmín', descripcion: 'Sensual y sofisticado' },
                            { nombre: 'Romero', descripcion: 'Aromático y herbal' }
                        ]
                    },
                    fondo: {
                        emoji: '🌿',
                        notas: [
                            { nombre: 'Ámbar', descripcion: 'Cálido y envolvente' },
                            { nombre: 'Angelica', descripcion: 'Terroso y verde' },
                            { nombre: 'Almizcle', descripcion: 'Suave y sensual' }
                        ]
                    }
                },
                descripcionCompleta: {
                    sobre: 'Neroli Portofino es una fragancia que transporta a la Riviera Italiana. Captura la esencia del Mediterráneo con su frescura cítrica y elegancia floral, evocando días soleados junto al mar.',
                    inspiracion: 'Inspirado en el glamour y la belleza de la costa italiana de Portofino, con sus jardines de cítricos y aguas cristalinas.',
                    ocasion: 'Ideal para primavera y verano, eventos diurnos, viajes a la playa y ocasiones elegantes pero relajadas. Perfecto para climas cálidos.'
                },
                especificaciones: {
                    marca: 'Tom Ford',
                    tipo: 'Eau de Parfum',
                    concentracion: '15-18%',
                    duracion: '6-8 horas',
                    estela: 'Moderada',
                    genero: 'Unisex',
                    familiaOlfativa: 'Cítrica Aromática',
                    año: '2011',
                    perfumista: 'Rodrigo Flores-Roux',
                    presentacion: 'Frasco elegante color azul cielo con detalles dorados',
                    autenticidad: '100% Original con garantía',
                    origen: 'Estados Unidos'
                }
            },

        'le-labo-santal': {
                titulo: 'Le Labo Santal 33',
                marca: 'by Le Labo',
                categoria: 'PERFUME UNISEX',
                precio: 1200,
                precioAnterior: 1450,
                descuento: '17% de descuento',
                rating: 4.9,
                reviews: 5800,
                imagenPrincipal: 'img/le-labo-santal3.jpeg',
                miniaturas: [
                    'img/le-labo-santal4.jpeg',
                    'img/le-labo-santal3.jpeg',
                    'img/le-labo-santal4.jpeg',
                    'img/le-labo-santal3.jpeg'
                ],
                descripcionCorta: 'Icónico unisex con sándalo, cedro, cardamomo y violeta. Amaderado y sofisticado.',
                tamanos: [
                    { ml: 50, precio: 950 },
                    { ml: 100, precio: 1200 },
                    { ml: 150, precio: 1500 }
                ],
                piramideOlfativa: {
                    salida: {
                        emoji: '🌶️',
                        notas: [
                            { nombre: 'Cardamomo', descripcion: 'Especiado y vibrante' },
                            { nombre: 'Pimienta', descripcion: 'Picante y energético' },
                            { nombre: 'Jengibre', descripcion: 'Cálido y aromático' }
                        ]
                    },
                    corazon: {
                        emoji: '🌸',
                        notas: [
                            { nombre: 'Violeta', descripcion: 'Floral suave y elegante' },
                            { nombre: 'Iris', descripcion: 'Polvoriento y refinado' },
                            { nombre: 'Papiro', descripcion: 'Verde y fresco' }
                        ]
                    },
                    fondo: {
                        emoji: '🪵',
                        notas: [
                            { nombre: 'Sándalo', descripcion: 'Cremoso y amaderado' },
                            { nombre: 'Cedro', descripcion: 'Fuerte y masculino' },
                            { nombre: 'Cuero', descripcion: 'Sensual y envolvente' }
                        ]
                    }
                },
                descripcionCompleta: {
                    sobre: 'Santal 33 es el perfume más icónico de Le Labo, una fragancia unisex que combina notas amaderadas, especiadas y florales en perfecta armonía. Su aroma distintivo y sofisticado lo ha convertido en un culto.',
                    inspiracion: 'Inspirado en el ambiente bohemio del oeste americano y la cultura de Brooklyn.',
                    ocasion: 'Ideal para cualquier ocasión, desde el día a día hasta eventos especiales. Perfecto todo el año.'
                },
                especificaciones: {
                    marca: 'Le Labo',
                    tipo: 'Eau de Parfum',
                    concentracion: '15-18%',
                    duracion: '8-10 horas',
                    estela: 'Moderada a intensa',
                    genero: 'Unisex',
                    familiaOlfativa: 'Amaderada Especiada',
                    año: '2011',
                    perfumista: 'Frank Voelkl',
                    presentacion: 'Frasco minimalista con etiqueta personalizada hecha a mano',
                    autenticidad: '100% Original con garantía',
                    origen: 'Estados Unidos'
                }
            },

        'byredo-gypsy': {
                titulo: 'Byredo Gypsy Water',
                marca: 'by Byredo',
                categoria: 'PERFUME UNISEX',
                precio: 1150,
                precioAnterior: 1400,
                descuento: '18% de descuento',
                rating: 4.8,
                reviews: 4200,
                imagenPrincipal: 'img/byredo-gypsy1.jpeg',
                miniaturas: [
                    'img/byredo-gypsy3.jpeg',
                    'img/byredo-gypsy2.jpeg',
                    'img/byredo-gypsy3.jpeg',
                    'img/byredo-gypsy2.jpeg'
                ],
                descripcionCorta: 'Fresco y amaderado, con bergamota, limón, pino, sándalo y vainilla. Bohemio y libre.',
                tamanos: [
                    { ml: 50, precio: 900 },
                    { ml: 100, precio: 1150 },
                    { ml: 150, precio: 1450 }
                ],
                piramideOlfativa: {
                    salida: {
                        emoji: '🍋',
                        notas: [
                            { nombre: 'Bergamota', descripcion: 'Cítrica y chispeante' },
                            { nombre: 'Limón', descripcion: 'Fresco y brillante' },
                            { nombre: 'Pimienta', descripcion: 'Picante y vibrante' }
                        ]
                    },
                    corazon: {
                        emoji: '🌲',
                        notas: [
                            { nombre: 'Pino', descripcion: 'Aromático y verde' },
                            { nombre: 'Incienso', descripcion: 'Místico y resinoso' },
                            { nombre: 'Orris', descripcion: 'Floral y elegante' }
                        ]
                    },
                    fondo: {
                        emoji: '🪵',
                        notas: [
                            { nombre: 'Sándalo', descripcion: 'Cremoso y suave' },
                            { nombre: 'Vainilla', descripcion: 'Dulce y reconfortante' },
                            { nombre: 'Ámbar', descripcion: 'Cálido y envolvente' }
                        ]
                    }
                },
                descripcionCompleta: {
                    sobre: 'Gypsy Water es una fragancia unisex que evoca la libertad de los nómadas y el romance de viajar. Combina frescura cítrica con notas amaderadas y especiadas, creando un aroma único y cautivador.',
                    inspiracion: 'Inspirado en el estilo de vida gitano, la libertad y la conexión con la naturaleza.',
                    ocasion: 'Perfecto para el día a día, aventuras al aire libre y ocasiones informales. Ideal para primavera y verano.'
                },
                especificaciones: {
                    marca: 'Byredo',
                    tipo: 'Eau de Parfum',
                    concentracion: '15-18%',
                    duracion: '6-8 horas',
                    estela: 'Moderada',
                    genero: 'Unisex',
                    familiaOlfativa: 'Amaderada Aromática',
                    año: '2008',
                    perfumista: 'Jerome Epinette',
                    presentacion: 'Frasco cilíndrico minimalista con tapa negra elegante',
                    autenticidad: '100% Original con garantía',
                    origen: 'Suecia'
                }
            },

        'maison-baccarat': {
                titulo: 'MFK Baccarat Rouge 540',
                marca: 'by Maison Francis Kurkdjian',
                categoria: 'PERFUME UNISEX',
                precio: 1800,
                precioAnterior: 2100,
                descuento: '14% de descuento',
                rating: 5.0,
                reviews: 7500,
                imagenPrincipal: 'img/maison-baccarat1.jpeg',
                miniaturas: [
                    'img/maison-baccarat2.jpeg',
                    'img/maison-baccarat3.jpeg',
                    'img/maison-baccarat1.jpeg',
                    'img/maison-baccarat2.jpeg'
                ],
                descripcionCorta: 'Luminoso y lujoso, con azafrán, jazmín, ámbar y cedro. Elegancia pura unisex.',
                tamanos: [
                    { ml: 35, precio: 1200 },
                    { ml: 70, precio: 1800 },
                    { ml: 200, precio: 3500 }
                ],
                piramideOlfativa: {
                    salida: {
                        emoji: '🌺',
                        notas: [
                            { nombre: 'Azafrán', descripcion: 'Especiado y luminoso' },
                            { nombre: 'Jazmín', descripcion: 'Floral y radiante' }
                        ]
                    },
                    corazon: {
                        emoji: '🪵',
                        notas: [
                            { nombre: 'Ámbar gris', descripcion: 'Mineral y brillante' },
                            { nombre: 'Madera de cedro', descripcion: 'Amaderado y elegante' }
                        ]
                    },
                    fondo: {
                        emoji: '🍯',
                        notas: [
                            { nombre: 'Resina de abeto', descripcion: 'Balsámico y envolvente' },
                            { nombre: 'Almizcle', descripcion: 'Suave y sensual' },
                            { nombre: 'Caramelo', descripcion: 'Dulce y gourmand' }
                        ]
                    }
                },
                descripcionCompleta: {
                    sobre: 'Baccarat Rouge 540 es una fragancia excepcional que captura la luz de forma única. Su brillo luminoso y su estela inolvidable lo han convertido en uno de los perfumes más deseados del mundo.',
                    inspiracion: 'Creado para celebrar los 250 años de la cristalería Baccarat, inspirado en la luz roja del cristal.',
                    ocasion: 'Ideal para ocasiones especiales, eventos de gala, citas importantes y momentos donde quieres dejar huella. Perfecto todo el año.'
                },
                especificaciones: {
                    marca: 'Maison Francis Kurkdjian',
                    tipo: 'Extrait de Parfum',
                    concentracion: '20-30%',
                    duracion: '10-12 horas',
                    estela: 'Intensa y envolvente',
                    genero: 'Unisex',
                    familiaOlfativa: 'Ámbar Floral',
                    año: '2014',
                    perfumista: 'Francis Kurkdjian',
                    presentacion: 'Frasco de cristal transparente con detalles dorados',
                    autenticidad: '100% Original con garantía',
                    origen: 'Francia'
                }
            },

            'diptyque-philosykos': {
    titulo: 'Diptyque Philosykos',
    marca: 'by Diptyque',
    categoria: 'PERFUME UNISEX',
    precio: 950,
    precioAnterior: 1150,
    descuento: '17% de descuento',
    rating: 4.7,
    reviews: 3100,
    imagenPrincipal: 'img/diptyque-philosykos1.jpeg',
    miniaturas: [
        'img/diptyque-philosykos2.jpeg',
        'img/diptyque-philosykos1.jpeg',
        'img/diptyque-philosykos2.jpeg',
        'img/diptyque-philosykos1.jpeg'
    ],
    descripcionCorta: 'Verde y cremoso, evoca la higuera con hojas, madera y látex. Fresco mediterráneo.',
    tamanos: [
        { ml: 50, precio: 750 },
        { ml: 75, precio: 950 },
        { ml: 100, precio: 1200 }
    ],
    piramideOlfativa: {
        salida: {
            emoji: '🍃',
            notas: [
                { nombre: 'Hoja de higuera', descripcion: 'Verde y fresca' },
                { nombre: 'Higo verde', descripcion: 'Frutal y vegetal' }
            ]
        },
        corazon: {
            emoji: '🌿',
            notas: [
                { nombre: 'Látex de higuera', descripcion: 'Cremoso y único' },
                { nombre: 'Coco', descripcion: 'Suave y tropical' },
                { nombre: 'Violeta', descripcion: 'Floral delicado' }
            ]
        },
        fondo: {
            emoji: '🪵',
            notas: [
                { nombre: 'Madera de higuera', descripcion: 'Amaderado y seco' },
                { nombre: 'Cedro', descripcion: 'Elegante y duradero' }
            ]
        }
    },
    descripcionCompleta: {
        sobre: 'Philosykos captura la esencia completa del árbol de higuera: sus hojas verdes, su fruto dulce, su látex lechoso y su madera cálida. Es un homenaje a los veranos mediterráneos.',
        inspiracion: 'Inspirado en los recuerdos de infancia bajo las higueras de Grecia y el Mediterráneo.',
        ocasion: 'Perfecto para primavera y verano, uso diurno, oficina y paseos casuales. Ideal para quienes aman las fragancias verdes.'
    },
    especificaciones: {
        marca: 'Diptyque',
        tipo: 'Eau de Toilette',
        concentracion: '8-12%',
        duracion: '5-7 horas',
        estela: 'Moderada',
        genero: 'Unisex',
        familiaOlfativa: 'Verde Amaderada',
        año: '1996',
        perfumista: 'Olivia Giacobetti',
        presentacion: 'Frasco ovalado clásico con etiqueta artística',
        autenticidad: '100% Original con garantía',
        origen: 'Francia'
    }
},

        'creed-aventus': {
            titulo: 'Creed Aventus',
            marca: 'by Creed',
            categoria: 'PERFUME UNISEX',
            precio: 2200,
            precioAnterior: 2650,
            descuento: '17% de descuento',
            rating: 4.9,
            reviews: 9800,
            imagenPrincipal: 'img/creed-aventus1.jpeg',
            miniaturas: [
                'img/creed-aventus2.jpeg',
                'img/creed-aventus1.jpeg',
                'img/creed-aventus2.jpeg',
                'img/creed-aventus1.jpeg'
            ],
            descripcionCorta: 'Frutal y ahumado, con piña, bergamota, abedul y almizcle. Poder y distinción.',
            tamanos: [
                { ml: 50, precio: 1650 },
                { ml: 100, precio: 2200 },
                { ml: 250, precio: 4200 }
            ],
            piramideOlfativa: {
                salida: {
                    emoji: '🍍',
                    notas: [
                        { nombre: 'Piña', descripcion: 'Frutal y jugosa' },
                        { nombre: 'Bergamota', descripcion: 'Cítrica y brillante' },
                        { nombre: 'Manzana', descripcion: 'Fresca y dulce' },
                        { nombre: 'Grosella negra', descripcion: 'Frutal y ácida' }
                    ]
                },
                corazon: {
                    emoji: '🌹',
                    notas: [
                        { nombre: 'Rosa', descripcion: 'Floral elegante' },
                        { nombre: 'Jazmín', descripcion: 'Sofisticado y sensual' },
                        { nombre: 'Pachulí', descripcion: 'Terroso y aromático' },
                        { nombre: 'Abedul', descripcion: 'Ahumado y distintivo' }
                    ]
                },
                fondo: {
                    emoji: '🪵',
                    notas: [
                        { nombre: 'Almizcle', descripcion: 'Sensual y duradero' },
                        { nombre: 'Musgo de roble', descripcion: 'Terroso y elegante' },
                        { nombre: 'Ámbar gris', descripcion: 'Marino y refinado' },
                        { nombre: 'Vainilla', descripcion: 'Dulce y cálida' }
                    ]
                }
            },
            descripcionCompleta: {
                sobre: 'Aventus es uno de los perfumes más aclamados de la última década. Su combinación única de notas frutales, florales y ahumadas crea una fragancia que representa el éxito, el poder y la confianza.',
                inspiracion: 'Inspirado en la vida dramática del emperador francés Napoleón Bonaparte y su ambición.',
                ocasion: 'Ideal para eventos importantes, reuniones de negocios, ocasiones formales y momentos donde quieres causar impacto. Perfecto todo el año.'
            },
            especificaciones: {
                marca: 'Creed',
                tipo: 'Eau de Parfum',
                concentracion: '18-20%',
                duracion: '10-12 horas',
                estela: 'Intensa y proyectada',
                genero: 'Unisex',
                familiaOlfativa: 'Frutal Amaderada',
                año: '2010',
                perfumista: 'Olivier Creed & Erwin Creed',
                presentacion: 'Frasco elegante plateado con detalles dorados y corona',
                autenticidad: '100% Original con garantía',
                origen: 'Francia'
            }
        },

        'jo-malone-wood': {
                titulo: 'Jo Malone Wood Sage & Sea Salt',
                marca: 'by Jo Malone London',
                categoria: 'PERFUME UNISEX',
                precio: 780,
                precioAnterior: 950,
                descuento: '18% de descuento',
                rating: 4.7,
                reviews: 5200,
                imagenPrincipal: 'img/jo-malone-wood1.jpeg',
                miniaturas: [
                    'img/jo-malone-wood2.jpeg',
                    'img/jo-malone-wood1.jpeg',
                    'img/jo-malone-wood2.jpeg',
                    'img/jo-malone-wood1.jpeg'
                ],
                descripcionCorta: 'Marino y terroso, con salvia, sal marina y algas. Escapada costera refrescante.',
                tamanos: [
                    { ml: 30, precio: 450 },
                    { ml: 100, precio: 780 },
                    { ml: 175, precio: 1200 }
                ],
                piramideOlfativa: {
                    salida: {
                        emoji: '🌊',
                        notas: [
                            { nombre: 'Sal marina', descripcion: 'Marino y fresco' },
                            { nombre: 'Brisa marina', descripcion: 'Acuático y vivificante' }
                        ]
                    },
                    corazon: {
                        emoji: '🌿',
                        notas: [
                            { nombre: 'Salvia', descripcion: 'Aromático y terroso' },
                            { nombre: 'Algas', descripcion: 'Verde y mineral' },
                            { nombre: 'Galbanum', descripcion: 'Verde y amargo' }
                        ]
                    },
                    fondo: {
                        emoji: '🪵',
                        notas: [
                            { nombre: 'Madera', descripcion: 'Seco y elegante' },
                            { nombre: 'Ámbar gris', descripcion: 'Suave y marino' }
                        ]
                    }
                },
                descripcionCompleta: {
                    sobre: 'Wood Sage & Sea Salt es una fragancia que captura la esencia de la costa británica: el viento salado, las rocas cubiertas de musgo y la salvia silvestre. Es una experiencia olfativa fresca y natural.',
                    inspiracion: 'Inspirado en los acantilados y playas de la costa británica, donde el mar se encuentra con la tierra.',
                    ocasion: 'Perfecto para uso diario, oficina, verano y salidas informales. Ideal para quienes buscan frescura natural.'
                },
                especificaciones: {
                    marca: 'Jo Malone London',
                    tipo: 'Cologne',
                    concentracion: '8-10%',
                    duracion: '4-6 horas',
                    estela: 'Ligera a moderada',
                    genero: 'Unisex',
                    familiaOlfativa: 'Aromática Acuática',
                    año: '2014',
                    perfumista: 'Christine Nagel',
                    presentacion: 'Frasco rectangular clásico color crema con cinta negra',
                    autenticidad: '100% Original con garantía',
                    origen: 'Reino Unido'
                }
            }
};