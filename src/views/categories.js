const categories = [
    {
        id: 0,
        title: 'Básico',
        desc: 'Este rosco se ofrece como un nivel introductorio a la aplicación, por tanto, tiene como objetivo ofrecer una primera experiencia que permita conocer el funcionamiento de la herramienta. Las preguntas a resolver son de distintas áreas, pero aspecto muy básicos.',
        img: '/roscos/basico.png',
        questions: [
            {
                text0: 'Empieza por la letra A',
                text: 'Planta comestible con tallos blancos y hojas verdes. También está en la ducha.',
                character: 'A',
                answer: 'alcachofa',
                status: 'unsolved'
            },
            {
                text0: 'Empieza por la letra B',
                text: 'Caja en la que se guardan medicinas.',
                character: 'B',
                answer: 'botiquín',
                status: 'unsolved'
            },
            {
                text0: 'Empieza por la letra C',
                text: 'Cama en la que se llevan de un lado a otro heridos o enfermos.',
                character: 'C',
                answer: 'camilla',
                status: 'unsolved'
            },
            {
                text0: 'Empieza por la letra D',
                text: 'Palabras que se escriben y se dicen como regalo a alguien',
                character: 'D',
                answer: 'dedicatoria',
                status: 'unsolved'
            },
            {
                text0: 'Empieza por la letra E',
                text: 'Mancharse un cristal con el vapor de agua.',
                character: 'E',
                answer: 'empañar',
                status: 'unsolved'
            },
            {
                text0: 'Empieza por la letra F',
                text: 'Cuento en el que los personajes son animales, con el que se aprende algo através de una moraleja.',
                character: 'F',
                answer: 'fábula',
                status: 'unsolved'
            },
            {
                text0: 'Empieza por la letra G',
                text: 'Preparar alimentos cocinándolos con calor',
                character: 'G',
                answer: 'guisar',
                status: 'unsolved'
            },
            {
                text0: 'Empieza por la letra H',
                text: 'Tela resistente que se cuelga de sus extremos y se utiliza como cama.',
                character: 'H',
                answer: 'hamaca',
                status: 'unsolved'
            },
            {
                text0: 'Empieza por la letra I',
                text: 'Alfiler que se abrocha quedando su punta dentro de un gancho.',
                character: 'I',
                answer: 'imperdible',
                status: 'unsolved'
            },
            {
                text0: 'Empieza por la letra J',
                text: 'Persona que monta a caballo.',
                character: 'J',
                answer: 'jinete',
                status: 'unsolved'
            },
            {
                text0: 'Empieza por la letra L',
                text: 'Mueble formado por dos camas puestas una encima de la otra.',
                character: 'L',
                answer: 'litera',
                status: 'unsolved'
            },
            {
                text0: 'Empieza por la letra M',
                text: 'Salsa que se hace batiendo huevo y aceite.',
                character: 'M',
                answer: 'mayonesa',
                status: 'unsolved'
            },
            {
                text0: 'Empieza por la letra N',
                text: 'Parte posterior de la cabeza situada encima del cuello.',
                character: 'N',
                answer: 'nuca',
                status: 'unsolved'
            },
            {
                text0: 'Empieza por la letra O',
                text: 'Borde del mar, de un lago o de un río.',
                character: 'O',
                answer: 'orilla',
                status: 'unsolved'
            },
            {
                text0: 'Empieza por la letra P',
                text: 'Quitar las arrugar a una prenda.',
                character: 'P',
                answer: 'planchar',
                status: 'unsolved'
            },
            {
                text0: 'Empieza por la letra Q',
                text: 'Producto natural o preparado que sirve para quitar manchas.',
                character: 'Q',
                answer: 'quitamanchas',
                status: 'unsolved'
            },
            {
                text0: 'Empieza por la letra R',
                text: 'Conjunto de uvas sostenidas en un mismo tallo.',
                character: 'R',
                answer: 'racimo',
                status: 'unsolved'
            },
            {
                text0: 'Empieza por la letra S',
                text: 'Enterrar semillas en la tierra para que crezcan',
                character: 'S',
                answer: 'sembrar',
                status: 'unsolved'
            },
            {
                text0: 'Empieza por la letra T',
                text: 'Asiento sin respaldo',
                character: 'T',
                answer: 'taburete',
                status: 'unsolved'
            },
            {
                text0: 'Empieza por la letra U',
                text: 'Extender mantequilla sobre una rebanada de pan.',
                character: 'U',
                answer: 'untar',
                status: 'unsolved'
            },
            {
                text0: 'Empieza por la letra V',
                text: 'Persona que vive en el mismo barrio o edificio que otra.',
                character: 'V',
                answer: 'vecino',
                status: 'unsolved'
            },
            {
                text0: 'Empieza por la letra W',
                text: 'Sistema de conexión inalámbrica para conectarse a internet.',
                character: 'W',
                answer: 'wifi',
                status: 'unsolved'
            },
            {
                text0: 'Contiene la letra X',
                text: 'Ave fabulosa que los antiguos creyeron que era única y renacía de sus cenizas.',
                character: 'X',
                answer: 'fénix',
                status: 'unsolved'
            },
            {
                text0: 'Empieza por la letra Y',
                text: 'Hueso que se encuentra dentro del oído, situado entre el martillo y el estribo. ',
                character: 'Y',
                answer: 'yunque',
                status: 'unsolved'
            },
            {
                text0: 'Empieza por la letra Z',
                text: 'Sonido que producen algunos insectos como la abeja o el mosquito.',
                character: 'Z',
                answer: 'zumbido',
                status: 'unsolved'
            }
        ]
    },
    {
        id: 1,
        title: 'Geografia',
        desc: '¿Nunca te has preguntado que es la geografía? Pues bien, es este rosco descubrirás preguntas cuál es tu conocimiento acerca de la forma de la tierra, la distribución y disposición de los elementos de la superficie, y la relación de los seres humanos con el medio físico.',
        img: '/roscos/geografia.jpeg',
        questions: [
            {
                text0: 'Empieza por la letra A',
                answer: 'Amazonas',
                character: 'A',
                text: 'Río más largo y caudaloso del mundo.',
                status: 'unsolved'
            },
            {
                text0: 'Empieza por la letra B',
                answer: 'Brasil',
                character: 'B',
                text: 'País más grande de América del Sur que tiene el portugués como lengua materna.',
                status: 'unsolved'
            },
            {
                text0: 'Empieza por la letra C',
                answer: 'China',
                character: 'C',
                text: 'País más poblado del mundo.',
                status: 'unsolved'
            },
            {
                text0: 'Empieza por la letra D',
                answer: 'Danés',
                character: 'D',
                text: 'Lengua nórdica que es el idioma oficial en Dinamarca.',
                status: 'unsolved'
            },
            {
                text0: 'Empieza por la letra E',
                answer: 'España',
                character: 'E',
                text: 'País europeo en el que se celebra la fiesta tradicional de "La tomatina".',
                status: 'unsolved'
            },
            {
                text0: 'Empieza por la letra F',
                answer: 'Filipinas',
                character: 'F',
                text: 'País que tiene por capital a Manila.',
                status: 'unsolved'
            },
            {
                text0: 'Empieza por la letra G',
                answer: 'Francia',
                character: 'G',
                text: 'País en el que puedes encontrar como dulce típico los "Macarons".',
                status: 'unsolved'
            },
            {
                text0: 'Empieza por la letra H',
                answer: 'Helsinki',
                character: 'H',
                text: 'Capital de Finlandia.',
                status: 'unsolved'
            },
            {
                text0: 'Empieza por la letra I',
                answer: 'India',
                character: 'I',
                text: 'País asiático en el que consideran a las vacas como animal sagrado.',
                status: 'unsolved'
            },
            {
                text0: 'Contiene la letra J',
                answer: 'Kilimanjaro',
                character: 'J',
                text: 'Monte más alto de África.',
                status: 'unsolved'
            },
            {
                text0: 'Empieza por la letra L',
                answer: 'Lima',
                character: 'L',
                text: 'Capital de Perú.',
                status: 'unsolved'
            },
            {
                text0: 'Empieza por la letra M',
                answer: 'Múnich',
                character: 'M',
                text: 'Ciudad europea en la que se celebra el Oktoberfest.',
                status: 'unsolved'
            },
            {
                text0: 'Empieza por la letra N',
                answer: 'Nilo',
                character: 'N',
                text: 'Río más largo de África.',
                status: 'unsolved'
            },
            {
                text0: 'Empieza por la letra O',
                answer: 'Oslo',
                character: 'O',
                text: 'Capital de Noruega.',
                status: 'unsolved'
            },
            {
                text0: 'Empieza por la letra P',
                answer: 'Portugal',
                character: 'P',
                text: 'País europeo en el que se puede visitar el archipiélago de Madeira.',
                status: 'unsolved'
            },
            {
                text0: 'Contiene la letra Q',
                answer: 'Albuquerque',
                character: 'Q',
                text: 'Ciudad estadounidense más grande de Nuevo México.',
                status: 'unsolved'
            },
            {
                text0: 'Empieza por la letra R',
                answer: 'Rusia',
                character: 'R',
                text: 'País más extenso del mundo.',
                status: 'unsolved'
            },
            {
                text0: 'Empieza por la letra S',
                answer: 'Sahara',
                character: 'S',
                text: 'Desierto cálido más grande el mundo.',
                status: 'unsolved'
            },
            {
                text0: 'Empieza por la letra T',
                answer: 'Tirana',
                character: 'T',
                text: 'Capital de Albania.',
                status: 'unsolved'
            },
            {
                text0: 'Empieza por la letra U',
                answer: 'Uganda',
                character: 'U',
                text: 'País cuya capital es Kampala.',
                status: 'unsolved'
            },
            {
                text0: 'Contiene la letra V',
                answer: 'Everest',
                character: 'V',
                text: 'Montaña más alta del mundo.',
                status: 'unsolved'
            },
            {
                text0: 'Empieza por la letra W',
                answer: 'Washington',
                character: 'W',
                text: 'Ciudad de EEUU donde puedes visitar la "Casa Blanca".',
                status: 'unsolved'
            },
            {
                text0: 'Contiene la letra X',
                answer: 'Extremadura',
                character: 'X',
                text: 'Comunidad autónoma española con capital en Mérida.',
                status: 'unsolved'
            },
            {
                text0: 'Contiene la letra Y',
                answer: 'Paraguay',
                character: 'Y',
                text: 'País sudamericano con capital en Asunción.',
                status: 'unsolved'
            },
            {
                text0: 'Empieza por la letra Z',
                answer: 'Zambeze',
                character: 'Z',
                text: 'Río en el que se pueden encontrar las famosas cataratas Victoria.',
                status: 'unsolved'
            }]
    },
    {
        id: 2,
        title: 'Ciencias Naturales',
        desc: '¿Amante de la naturaleza y el método científico? ¡Entonces este es tu rosco! Adéntrate en este nivel para descubrir tus límites en el conocimiento acerca del funcionamiento del universo y el mundo que nos rodea.',
        img: '/roscos/cienciasNaturales.jpeg',
        questions: [
            {
                text0: 'Empieza por la letra A',
                answer: 'Anatomía',
                character: 'A',
                text: 'Ciencia que estudia la estructura, forma y relaciones de las diferentes partes del cuerpo de los seres vivos.',
                status: 'unsolved'
            },
            {
                text0: 'Empieza por la letra B',
                answer: 'Biosfera',
                character: 'B',
                text: 'Conjunto que forman los seres vivos con el medio en que se desarrollan.',
                status: 'unsolved'
            },
            {
                text0: 'Empieza por la letra C',
                answer: 'Ciencia',
                character: 'C',
                text: 'Nombre genérico de las distintas ramas del saber humano, en especial las que tienen el mundo natural o físico o la tecnología como materias de estudio.',
                status: 'unsolved'
            },
            {
                text0: 'Empieza por la letra D',
                answer: 'Diluvio',
                character: 'D',
                text: 'Lluvia copiosa y violenta que provoca inundaciones.',
                status: 'unsolved'
            },
            {
                text0: 'Empieza por la letra E',
                answer: 'Estación',
                character: 'E',
                text: 'Cada uno de los cuatro períodos en que se divide el año comprendidos entre un equinoccio y un solsticio, o viceversa, y caracterizados por determinadas condiciones climáticas, por la longitud del día y otras características.',
                status: 'unsolved'
            },
            {
                text0: 'Empieza por la letra F',
                answer: 'Fluvial',
                character: 'F',
                text: 'Adjetivo relativo a los ríos o que tiene relación con ellos.',
                status: 'unsolved'
            },
            {
                text0: 'Empieza por la letra G',
                answer: 'Geotérmica',
                character: 'G',
                text: 'Energía renovable​ que se obtiene mediante el aprovechamiento del calor del interior de la Tierra.',
                status: 'unsolved'
            },
            {
                text0: 'Empieza por la letra H',
                answer: 'Hidrógeno',
                character: 'H',
                text: 'Elemento químico de número atómico 1, representado por el símbolo H.',
                status: 'unsolved'
            },
            {
                text0: 'Empieza por la letra I',
                answer: 'Inercia',
                character: 'I',
                text: 'Propiedad que tienen los cuerpos de permanecer en su estado de reposo relativo o movimiento relativo.',
                status: 'unsolved'
            },
            {
                text0: 'Empieza por la letra J',
                answer: 'Julio',
                character: 'J',
                text: 'Unidad de medida utilizada para medir energía, trabajo y calor.',
                status: 'unsolved'
            },
            {
                text0: 'Empieza por la letra L',
                answer: 'Lluvia',
                character: 'L',
                text: 'Precipitación acuosa en forma de gotas.',
                status: 'unsolved'
            },
            {
                text0: 'Empieza por la letra M',
                answer: 'Masa',
                character: 'M',
                text: 'Magnitud física con que medimos la cantidad de materia que contiene un cuerpo.',
                status: 'unsolved'
            },
            {
                text0: 'Empieza por la letra N',
                answer: 'Nube',
                character: 'N',
                text: 'Agregado visible de minúsculas gotitas de agua, de cristales de hielo o de ambos, suspendido en la atmósfera y producido por la condensación de vapor de agua.',
                status: 'unsolved'
            },
            {
                text0: 'Empieza por la letra O',
                answer: 'Oxígeno',
                character: 'O',
                text: 'Elemento químico de numero atómico 8, que es esencial en el proceso de respiración.',
                status: 'unsolved'
            },
            {
                text0: 'Empieza por la letra P',
                answer: 'Peso',
                character: 'P',
                text: 'Fuerza con que la Tierra atrae a un cuerpo, por acción de la gravedad.',
                status: 'unsolved'
            },
            {
                text0: 'Contiene la letra Q',
                answer: 'Níquel',
                character: 'Q',
                text: 'Metal del grupo de los elementos de transición, de color blanco plateado, resistente a la oxidación y con propiedades magnéticas; se usa en aleaciones de acero, aportando dureza y resistencia a la corrosión.',
                status: 'unsolved'
            },
            {
                text0: 'Empieza por la letra R',
                answer: 'Rebosar',
                character: 'R',
                text: 'Estar un recipiente muy lleno de algo hasta el punto de sobrepasar sus bordes o límites.',
                status: 'unsolved'
            },
            {
                text0: 'Empieza por la letra S',
                answer: 'Sonido',
                character: 'S',
                text: 'Sensación o impresión producida en el oído por un conjunto de vibraciones que se propagan por un medio elástico, como el aire.',
                status: 'unsolved'
            },
            {
                text0: 'Empieza por la letra T',
                answer: 'Terremoto',
                character: 'T',
                text: 'Sacudida brusca y pasajera de la corteza terrestre producida por la liberación de energía acumulada en forma de ondas sísmicas.',
                status: 'unsolved'
            },
            {
                text0: 'Empieza por la letra U',
                answer: 'Umbral',
                character: 'U',
                text: 'Cantidad mínima de señal que ha de estar presente para ser registrada por un sistema.',
                status: 'unsolved'
            },
            {
                text0: 'Empieza por la letra V',
                answer: 'Vivíparo',
                character: 'V',
                text: 'Se aplica a los animales cuyos embriones se desarrollan dentro del útero de la madre.',
                status: 'unsolved'
            },
            {
                text0: 'Contiene la letra W',
                answer: 'Darwin',
                character: 'W',
                text: 'Naturalista inglés, reconocido por plantear la idea de selección natural, justificándola en su obra "El origen de las especies" con numerosos ejemplos extraídos de la observación de la naturaleza.',
                status: 'unsolved'
            },
            {
                text0: 'Contiene la letra X',
                answer: 'Axilar',
                character: 'X',
                text: 'Perteneciente o relativo a la axila.',
                status: 'unsolved'
            },
            {
                text0: 'Empieza por la letra Y',
                answer: 'Yema',
                character: 'Y',
                text: 'Núcleo de los huevos de los vertebrados ovíparos; es esferoidal, de color amarillo y está rodeada por la clara.',
                status: 'unsolved'
            },
            {
                text0: 'Empieza por la letra Z',
                answer: 'Zoología',
                character: 'Z',
                text: 'Ciencia que estudia los animales.',
                status: 'unsolved'
            }]
    },
    {
        id: 3,
        title: 'Literatura',
        desc: 'Érase una vez un rosco lleno de palabras y libros por descubrir. Muchos han intentado ganarle en batalla, pero muy pocos han sido los que han logrado superarlo y salir ilesos. ¿Serás tú uno de ellos?',
        img: '/roscos/literatura.jpeg',
        questions: [
            {
                text0: 'Empieza por la letra A',
                answer: 'Anáfora',
                character: 'A',
                text: 'Figura retórica que consiste en la repetición de una o varias palabras al principio de una serie de versos u oraciones.',
                status: 'unsolved'
            },
            {
                text0: 'Empieza por la letra B',
                answer: 'Baroja',
                character: 'B',
                text: 'Apellido del escritor español de la Generación del 98 que escribió "El árbol de la ciencia".',
                status: 'unsolved'
            },
            {
                text0: 'Empieza por la letra C',
                answer: 'Clásico',
                character: 'C',
                text: 'Obra considerada valiosa que perdura a través del tiempo, casi un modelo en su género, es un libro que permanece en el gusto del público durante años.',
                status: 'unsolved'
            },
            {
                text0: 'Empieza por la letra D',
                answer: 'Descripción',
                character: 'D',
                text: 'Discurso oral o escrito en el que se explica cómo es una cosa, una persona o un lugar para ofrecer una imagen o una idea completa de ellos.',
                status: 'unsolved'
            },
            {
                text0: 'Empieza por la letra E',
                answer: 'Epíteto',
                character: 'E',
                text: 'Adjetivo calificativo que resalta las características y cualidades de un sustantivo, sin distinguirlo de los demás de su grupo.',
                status: 'unsolved'
            },
            {
                text0: 'Empieza por la letra F',
                answer: 'Fábula',
                character: 'F',
                text: 'Relato o composición literaria en prosa o en verso que proporciona una enseñanza o consejo moral.',
                status: 'unsolved'
            },
            {
                text0: 'Empieza por la letra G',
                answer: 'Gramática',
                character: 'G',
                text: 'Conjunto de normas y reglas para hablar y escribir correctamente una lengua.',
                status: 'unsolved'
            },
            {
                text0: 'Empieza por la letra H',
                answer: 'Hipérbole',
                character: 'H',
                text: 'Recurso estilístico literario que consiste en la exageración de cantidades, cualidades y características.',
                status: 'unsolved'
            },
            {
                text0: 'Empieza por la letra I',
                answer: 'Inglés',
                character: 'I',
                text: 'Lengua germánica occidental que surgió en los reinos anglosajones de Inglaterra y se extendió hasta el sudeste de Escocia, bajo la influencia del Reino de Northumbria.',
                status: 'unsolved'
            },
            {
                text0: 'Empieza por la letra J',
                answer: 'Juvenil',
                character: 'J',
                text: 'Literatura dirigida a lectores adolescentes y jóvenes.',
                status: 'unsolved'
            },
            {
                text0: 'Empieza por la letra L',
                answer: 'Lolita',
                character: 'L',
                text: 'Novela más conocida del escritor Vladimir Nabokov, que trata sobre la relación incestuosa y abusiva de un adulto de 40 años y su hijastra de 12.',
                status: 'unsolved'
            },
            {
                text0: 'Empieza por la letra M',
                answer: 'Metáfora',
                character: 'M',
                text: 'Figura retórica en el que se traslada el significado de un concepto a otro, estableciendo una relación de semejanza o analogía entre ambos términos. ',
                status: 'unsolved'
            },
            {
                text0: 'Empieza por la letra N',
                answer: 'Novela',
                character: 'N',
                text: 'Narración en prosa, generalmente extensa, que cuenta una historia de ficción o con un desarrollo más completo en cuanto al argumento y los personajes, que los relatos breves o cuentos.',
                status: 'unsolved'
            },
            {
                text0: 'Empieza por la letra O',
                answer: 'Onomatopeya',
                character: 'O',
                text: 'Palabra que tiene sonidos que se asemejan a lo que significa.',
                status: 'unsolved'
            },
            {
                text0: 'Empieza por la letra P',
                answer: 'Palabra',
                character: 'P',
                text: 'Unidad léxica constituida por un sonido o conjunto de sonidos articulados que tienen un significado fijo y una categoría gramatical.',
                status: 'unsolved'
            },
            {
                text0: 'Contiene la letra Q',
                answer: 'Aquiles',
                character: 'Q',
                text: 'Héroe de la guerra de Troya y uno de los principales protagonistas y más grandes guerreros de la Ilíada de Homero.',
                status: 'unsolved'
            },
            {
                text0: 'Empieza por la letra R',
                answer: 'Romanticismo',
                character: 'R',
                text: 'Rama de la literatura que se desarrolló a finales del siglo XVIII, que se opuso a los planteamientos racionalistas, así como, al capitalismo y a los estereotipos del clasismo.',
                status: 'unsolved'
            },
            {
                text0: 'Empieza por la letra S',
                answer: 'Símil',
                character: 'S',
                text: 'Comparación o expresión de la semejanza entre dos cosas.',
                status: 'unsolved'
            },
            {
                text0: 'Empieza por la letra T',
                answer: 'Teatro',
                character: 'T',
                text: 'Género literario constituido por obras, generalmente dialogadas, destinadas a ser representadas ante un público en un escenario.',
                status: 'unsolved'
            },
            {
                text0: 'Contiene la letra U',
                answer: 'Humor',
                character: 'U',
                text: 'Modo de presentar, enjuiciar o comentar la realidad resaltando el lado cómico, risueño o ridículo de las cosas.​',
                status: 'unsolved'
            },
            {
                text0: 'Empieza por la letra V',
                answer: 'Verso',
                character: 'V',
                text: 'Enunciado o conjunto de palabras que forma una unidad en un poema, sujeto a ritmo y a medida determinados.',
                status: 'unsolved'
            },
            {
                text0: 'Empieza por la letra W',
                answer: 'William',
                character: 'W',
                text: 'Nombre del escritor autor de obras como Hamlet o Romeo y Julieta.',
                status: 'unsolved'
            },
            {
                text0: 'Contiene la letra X',
                answer: 'Exclamación',
                character: 'X',
                text: 'Se trata de una expresión que refleja una emoción o una exaltación del ánimo.',
                status: 'unsolved'
            },
            {
                text0: 'Contiene la letra Y',
                answer: 'Prosopopeya',
                character: 'Y',
                text: 'Figura retórica de pensamiento que consiste en atribuir a los seres inanimados o abstractos características y cualidades propias de los seres animados.',
                status: 'unsolved'
            },
            {
                text0: 'Empieza por la letra Z',
                answer: 'Zombies',
                character: 'Z',
                text: 'Personajes contra los que se lucha en la famosa obra Guerra Mundial Z.',
                status: 'unsolved'
            }]
    },
    {
        id: 4,
        title: 'Matemáticas',
        desc: ' 1,2,3, x, y, z, α, β, λ… ¿Sabes cuál es la relación entre estos elementos? Si sabes la respuesta, ¡este es el rosco indicado para ti! Adentrate para poner a prueba tus conocimientos acerca del mundo de las matemáticas',
        img: '/roscos/matematicas.jpeg',
        questions: [
            {
                text0: 'Empieza por la letra A',
                answer: 'Aritmética',
                character: 'A',
                text: 'Parte de la matemática que estudia los números y las operaciones que se hacen con ellos.',
                status: 'unsolved'
            },
            {
                text0: 'Empieza por la letra B',
                answer: 'Booleano',
                character: 'B',
                text: 'Tipo de dato que puede representar valores de lógica binaria, esto es 2 valores, que normalmente representan falso o verdadero.​ Se utiliza normalmente en la programación, estadística, electrónica, matemáticas, etc.',
                status: 'unsolved'
            },
            {
                text0: 'Empieza por la letra C',
                answer: 'Cardinal',
                character: 'C',
                text: 'Número o cantidad de elementos de un conjunto, sea esta cantidad finita o infinita.',
                status: 'unsolved'
            },
            {
                text0: 'Empieza por la letra D',
                answer: 'Diferencia',
                character: 'D',
                text: 'Resultado de la resta o sustracción.',
                status: 'unsolved'
            },
            {
                text0: 'Empieza por la letra E',
                answer: 'Ecuación',
                character: 'E',
                text: 'Igualdad entre dos expresiones que contiene una o más variables.',
                status: 'unsolved'
            },
            {
                text0: 'Empieza por la letra F',
                answer: 'Fracción',
                character: 'F',
                text: 'Número que expresa una cantidad determinada de porciones que se toman de un todo dividido en partes iguales.',
                status: 'unsolved'
            },
            {
                text0: 'Empieza por la letra G',
                answer: 'Geometría',
                character: 'G',
                text: 'Parte de las matemáticas que estudia la extensión, la forma de medirla, las relaciones entre puntos, líneas, ángulos, planos y figuras, y la manera cómo se miden.',
                status: 'unsolved'
            },
            {
                text0: 'Empieza por la letra H',
                answer: 'Hipotenusa',
                character: 'H',
                text: 'Lado opuesto al ángulo recto en un triángulo rectángulo.',
                status: 'unsolved'
            },
            {
                text0: 'Empieza por la letra I',
                answer: 'Infinito',
                character: 'I',
                text: 'Ausencia de límites en una determinada dirección o a una posibilidad, que se representa con este signo: ∞.',
                status: 'unsolved'
            },
            {
                text0: 'Empieza por la letra J',
                answer: 'Justificar',
                character: 'J',
                text: 'Proceso mediante el cual una proposición o enunciado matemático es validado.',
                status: 'unsolved'
            },
            {
                text0: 'Empieza por la letra L',
                answer: 'Límite',
                character: 'L',
                text: 'Aproximación hacia un punto concreto de una sucesión o una función, a medida que los parámetros de esa sucesión o función se acercan a un determinado valor.',
                status: 'unsolved'
            },
            {
                text0: 'Empieza por la letra M',
                answer: 'Mediana',
                character: 'M',
                text: 'Valor que se encuentra a la mitad de los otros valores, es decir, que al ordenar los números de menor a mayor, éste se encuentra justamente en medio entre los que están por arriba y los que están por debajo.',
                status: 'unsolved'
            },
            {
                text0: 'Empieza por la letra N',
                answer: 'Número',
                character: 'N',
                text: 'Concepto matemático que expresa una cantidad con relación a la unidad de cómputo; resulta de contar los elementos que forman un conjunto.',
                status: 'unsolved'
            },
            {
                text0: 'Empieza por la letra O',
                answer: 'Operación',
                character: 'O',
                text: 'Técnicas mentales y escritas para calcular y resolver problemas que involucran distintos tipos de números.',
                status: 'unsolved'
            },
            {
                text0: 'Empieza por la letra P',
                answer: 'Polígono',
                character: 'P',
                text: 'Figura geométrica plana que está limitada por tres o más rectas y tiene tres o más ángulos y vértices.',
                status: 'unsolved'
            },
            {
                text0: 'Empieza por la letra Q',
                answer: 'Quincena',
                character: 'Q',
                text: 'Conjunto formado por 15 unidades.',
                status: 'unsolved'
            },
            {
                text0: 'Empieza por la letra R',
                answer: 'Restar',
                character: 'R',
                text: 'Realizar una operación aritmética que consiste en quitar una cantidad (sustraendo) de otra (minuendo) para averiguar la diferencia entre las dos.',
                status: 'unsolved'
            },
            {
                text0: 'Empieza por la letra S',
                answer: 'Secante',
                character: 'S',
                text: 'Recta que corta a una curva en dos o más puntos.',
                status: 'unsolved'
            },
            {
                text0: 'Empieza por la letra T',
                answer: 'Triángulo',
                character: 'T',
                text: 'Figura geométrica de tres lados y tres ángulos.',
                status: 'unsolved'
            },
            {
                text0: 'Empieza por la letra U',
                answer: 'Unidad',
                character: 'U',
                text: 'Elemento diferenciado y completo que forma parte de una serie o de un conjunto.',
                status: 'unsolved'
            },
            {
                text0: 'Empieza por la letra V',
                answer: 'Vector',
                character: 'V',
                text: 'Segmento de recta, contado a partir de un punto del espacio, cuya longitud representa a escala una magnitud, en una dirección determinada y en uno de sus sentidos.',
                status: 'unsolved'
            },
            {
                text0: 'Empieza por la letra W',
                answer: 'William',
                character: 'W',
                text: 'Nombre del matemático que utilizó por primera vez el símbolo π para referirse al número pi.',
                status: 'unsolved'
            },
            {
                text0: 'Contiene la letra X',
                answer: 'Exponente',
                character: 'X',
                text: 'Número que denota la potencia a que se debe elevar otra expresión u otro número (la base).',
                status: 'unsolved'
            },
            {
                text0: 'Contiene la letra Y',
                answer: 'Adyacente',
                character: 'Y',
                text: 'Que está muy próximo o unido a otra cosa.',
                status: 'unsolved'
            },
            {
                text0: 'Contiene la letra Z',
                answer: 'Traza',
                character: 'Y',
                text: 'Cantidad minúscula de una sustancia en una mezcla.',
                status: 'unsolved'
            }
        ],
    },
    {
        id: 5,
        title: 'Inglés',
        desc: '...',
        img: '/roscos/ingles.jpeg',
        questions: [
            {text0: 'Empieza por la letra A', character:'A',	status: 'unsolved', answer: 'After',  	         text:'¿Cómo se dice Después en inglés?'},
            {text0: 'Empieza por la letra B', character:'B',	status: 'unsolved', answer: 'Before', 	         text:'¿Cómo se dice Antes en inglés?'},
            {text0: 'Empieza por la letra C', character:'C',	status: 'unsolved', answer: 'Car',  	           text:'¿Cómo se dice Coche en inglés?'},
            {text0: 'Empieza por la letra D', character:'D',	status: 'unsolved', answer: 'Down', 	           text:'¿Cómo se diceAbajo en inglés?'},
            {text0: 'Empieza por la letra E', character:'E',	status: 'unsolved', answer: 'Eat',  	           text:'¿Cómo se dice Comer en inglés?'},
            {text0: 'Empieza por la letra F', character:'F',	status: 'unsolved', answer: 'Four', 	           text:'¿Cómo se dice Cuatro en inglés?'},
            {text0: 'Empieza por la letra G', character:'G',	status: 'unsolved', answer: 'Glasses',  	       text:'¿Cómo se dice Gafas en inglés?'},
            {text0: 'Empieza por la letra H', character:'H',	status: 'unsolved', answer: 'Hand', 	           text:'¿Cómo se dice Mano en inglés?'},
            {text0: 'Empieza por la letra I', character:'I',	status: 'unsolved', answer: 'Ice',  	           text:'¿Cómo se dice Hielo en inglés?'},
            {text0: 'Empieza por la letra J', character:'J',	status: 'unsolved', answer: 'Jail', 	           text:'¿Cómo se dice Cárcel en inglés?'},
            {text0: 'Empieza por la letra L', character:'L',	status: 'unsolved', answer: 'Lady', 	           text:'¿Cómo se dice Dama, señora en inglés?'},
            {text0: 'Empieza por la letra M', character:'M',	status: 'unsolved', answer: 'Man',  	           text:'¿Cómo se dice Hombre en inglés?'},
            {text0: 'Empieza por la letra N', character:'N',	status: 'unsolved', answer: 'New',  	           text:'¿Cómo se dice Nuevo en inglés?'},
            {text0: 'Empieza por la letra O', character:'O',	status: 'unsolved', answer: 'Open', 	           text:'¿Cómo se dice Abrir en inglés?'},
            {text0: 'Empieza por la letra P', character:'P',	status: 'unsolved', answer: 'Party',  	         text:'¿Cómo se dice Fiesta en inglés?'},
            {text0: 'Contiene la letra Q', character:'Q',	status: 'unsolved', answer: 'Queen',  	         text:'¿Cómo se dice Reina en inglés?'},
            {text0: 'Empieza por la letra R', character:'R',	status: 'unsolved', answer: 'Red',  	           text:'¿Cómo se dice Rojo en inglés?'},
            {text0: 'Empieza por la letra S', character:'S',	status: 'unsolved', answer: 'Salt', 	           text:'¿Cómo se dice Sal en inglés?'},
            {text0: 'Empieza por la letra T', character:'T',	status: 'unsolved', answer: 'Table',  	         text:'¿Cómo se dice Mesa en inglés?'},
            {text0: 'Empieza por la letra U', character:'U',	status: 'unsolved', answer: 'Umbrella', 	       text:'¿Cómo se dice Paraguas en inglés?'},
            {text0: 'Contiene la letra V', character:'V',	status: 'unsolved', answer: 'Valley', 	         text:'¿Cómo se dice Valle en inglés?'},
            {text0: 'Empieza por la letra W', character:'W',	status: 'unsolved', answer: 'Window', 	         text:'¿Cómo se diceVentana en inglés?'},
            {text0: 'Contiene la letra X', character:'X',	status: 'unsolved', answer: 'Box',  	           text:'¿Cómo se dice Caja en inglés?'},
            {text0: 'Empieza por la letra Y', character:'Y',	status: 'unsolved', answer: 'Yellow', 	         text:'¿Cómo se dice Amarillo en inglés?'},
            {text0: 'Empieza por la letra Z', character:'Z',	status: 'unsolved', answer: 'Zebra',  	         text:'¿Cómo se dice Cebra en inglés?'}
        ]
    },
    {
        id: 6,
        title: 'Anatomía',
        desc: '...',
        img: '/roscos/anatomia.jpeg',
        questions: [
            {text0: 'Empieza por la letra A', character:'A',	status: 'unsolved', answer: 'Articulación', 	   text:'Unión de dos huesos.'},
            {text0: 'Empieza por la letra B', character:'B',	status: 'unsolved', answer: 'Boca', 	           text:'Abertura por donde los animales reciben los alimentos.'},
            {text0: 'Empieza por la letra C', character:'C',	status: 'unsolved', answer: 'Corazón',  	       text:'Órgano central de la circulación de la sangre.'},
            {text0: 'Empieza por la letra D', character:'D',	status: 'unsolved', answer: 'Diente', 	         text:'Pieza ósea dura y blanca que crece, junto con otras, en la boca del hombre y otros vertebrados, que sirve para cortar o masticar los alimentos.'},
            {text0: 'Empieza por la letra E', character:'E',	status: 'unsolved', answer: 'Estómago', 	       text:'Ensanchamiento del tubo digestivo del hombre y otros animales situado entre el esófago y el intestino, en cuyas paredes están las glándulas que segregan los jugos gástricos que intervienen en la digestión.'},
            {text0: 'Empieza por la letra F', character:'F',	status: 'unsolved', answer: 'Falanges', 	       text:'Huesos pequeños y largos de los varios que forman el esqueleto de los dedos de la mano o del pie.'},
            {text0: 'Empieza por la letra G', character:'G',	status: 'unsolved', answer: 'Glúteos',  	       text:'Músculos que forman la nalga.'},
            {text0: 'Empieza por la letra H', character:'H',	status: 'unsolved', answer: 'Hígado', 	         text:'Órgano glandular del hombre y otros vertebrados, de forma aplanada, tamaño grande y color rojo oscuro, que interviene en la función digestiva, segrega la bilis, almacena sustancias nutrientes, elimina sustancias tóxicas y sintetiza enzimas, proteínas y glucosa; en el ser humano, se encuentra en la parte superior derecha del abdomen.'},
            {text0: 'Empieza por la letra I', character:'I',	status: 'unsolved', answer: 'Intestino',  	     text:'Porción tubular del aparato digestivo que se extiende desde el estómago hasta el ano y en la cual se completa la digestión de los alimentos y se verifica la absorción de los productos útiles resultantes.'},
            {text0: 'Contiene la letra J', character:'J',	status: 'unsolved', answer: 'Juanete',  	       text:'Prominencia anormal en la base del hueso del dedo gordo del pie que provoca un desplazamiento lateral de este dedo.'},
            {text0: 'Empieza por la letra L', character:'L',	status: 'unsolved', answer: 'Laringe',  	       text:'Órgano del conducto respiratorio, situado entre la tráquea y la faringe.'},
            {text0: 'Empieza por la letra M', character:'M',	status: 'unsolved', answer: 'Muela',  	         text:'Diente situado en la parte posterior de la mandíbula, que tiene varias raíces y sirve para triturar los alimentos.'},
            {text0: 'Empieza por la letra N', character:'N',	status: 'unsolved', answer: 'Nariz',  	         text:'Parte saliente del rostro humano situada entre los ojos y la boca, con dos orificios en la parte inferior y que sirve para respirar y oler.'},
            {text0: 'Empieza por la letra O', character:'O',	status: 'unsolved', answer: 'Ombligo',  	       text:'Cicatriz redondeada y arrugada que se forma en medio del vientre tras cortar y secarse el cordón umbilical.'},
            {text0: 'Empieza por la letra P', character:'P',	status: 'unsolved', answer: 'Pelo', 	           text:'Filamento delgado y flexible que se desarrolla en la piel de la mayoría de los mamíferos y otros animales.'},
            {text0: 'Contiene la letra Q', character:'Q',	status: 'unsolved', answer: 'Queratina',  	     text:'Proteína rica en azufre que constituye la parte fundamental de las capas más externas de la epidermis y de tejidos como las uñas, el pelo, las plumas, las pezuñas o los cuernos.'},
            {text0: 'Empieza por la letra R', character:'R',	status: 'unsolved', answer: 'Radio',  	         text:'Hueso más grande de los dos huesos del antebrazo.'},
            {text0: 'Empieza por la letra S', character:'S',	status: 'unsolved', answer: 'Sangre', 	         text:'Líquido, de color rojo en los vertebrados, que, impulsado por el corazón, circula por los vasos sanguíneos del cuerpo de las personas y los animales, transportando oxígeno, alimentos y productos de desecho.'},
            {text0: 'Empieza por la letra T', character:'T',	status: 'unsolved', answer: 'Talón',  	         text:'Parte posterior del pie humano.'},
            {text0: 'Empieza por la letra U', character:'U',	status: 'unsolved', answer: 'Uña',  	           text:'Placa córnea y dura que cubre y protege la parte superior de la punta de los dedos del hombre y otros vertebrados.'},
            {text0: 'Contiene la letra V', character:'V',	status: 'unsolved', answer: 'Vértebra', 	       text:'Hueso corto que se articula con otros del mismo tipo formando la columna de los vertebrados.'},
            {text0: 'Empieza por la letra W', character:'W',	status: 'unsolved', answer: 'William',  	       text:'Nombre del médico inglés que describió por primera vez la circulación correcta de la sangre a partir del bombeo del corazón.'},
            {text0: 'Empieza por la letra X', character:'X',	status: 'unsolved', answer: 'Xifoides', 	       text:'Cartílago en que termina el esternón.'},
            {text0: 'Empieza por la letra Y', character:'Y',	status: 'unsolved', answer: 'Yunque', 	         text:'Hueso que pertenece a la cadena de huesecillos del oído medio, localizado en la caja del tímpano.'},
            {text0: 'Contiene la letra Z', character:'Z',	status: 'unsolved', answer: 'Antebrazo',  	     text:'Parte del brazo humano que va desde el codo hasta la muñeca.'}
        ]
    },
    {
        id: 7,
        title: 'Historia',
        desc: 'En muchos lugares, existen historias que pasan de generación en generación. Muchas de estas historias, junto a otros hallazgos y documentos, han permitido conocer la evolución de la humanidad y los sucesos ocurridos. ¿Será capaz de demostrar que lo conoces todo de este tema?',
        img: '/roscos/historia.jpeg',
        questions: [
            {text0:'Empieza por A', character: 'A', status:'unsolved', 	answer: 'Aquiles', text:'Héroe de la guerra de Troya y uno de los principales protagonistas y más grandes guerreros de la Ilíada de Homero.'},
            {text0:'Empieza por B', character: 'B', status:'unsolved', 	answer: 'Baco', text:'Dios del vino, de la ebriedad, de los excesos, especialmente sexuales, y de la naturaleza.'},
            {text0:'Empieza por C', character: 'C', status:'unsolved', 	answer: 'Carlomagno', text:'Rey de los francos desde 768, rey nominal de los lombardos desde 774 e Imperator Romanum gubernans Imperium​ desde 800 hasta su muerte. '},
            {text0:'Empieza por D', character: 'D', status:'unsolved', 	answer: 'Diana', text:'Diosa virgen de la caza, protectora de la naturaleza y la Luna.'},
            {text0:'Empieza por E', character: 'E', status:'unsolved', 	answer: 'Evita', text:'Política y actriz argentina, primera dama de la Nación Argentina, de apellido Perón. '},
            {text0:'Empieza por F', character: 'F', status:'unsolved', 	answer: 'Fátima', text:'Hija de Mahoma.'},
            {text0:'Empieza por G', character: 'G', status:'unsolved', 	answer: 'George', text:'Nombre de pila del presidente del Gobierno de EEUU apellidado Bush.'},
            {text0:'Empieza por H', character: 'H', status:'unsolved', 	answer: 'Hércules', text:'Llevó a cabo doce grandes trabajos, llamados Los doce trabajos de Heracles y fue divinizado.'},
            {text0:'Empieza por I', character: 'I', status:'unsolved', 	answer: 'Isaac', text:'Nombre de pila del científico apellidado Newton'},
            {text0:'Empieza por J', character: 'J', status:'unsolved', 	answer: 'Juana', text:'Doncella de Orleans, ​ fue una joven campesina que es considerada una heroína de Francia por su papel durante la fase final de la Guerra de los Cien Años.'},
            {text0:'Empieza por L', character: 'L', status:'unsolved', 	answer: 'Luis', text:'Nombre de pila del llamado "Rey Sol" de Francia.'},
            {text0:'Empieza por M', character: 'M', status:'unsolved', 	answer: 'Medusa', text:'Ser mitológico femenino, que convertía en piedra a aquellos que la miraban fijamente a los ojos. '},
            {text0:'Empieza por N', character: 'N', status:'unsolved', 	answer: 'Napoleón', text:'Militar y estadista francés, general republicano durante la Revolución francesa y el Directorio, y artífice del golpe de Estado del 18 de brumario que lo convirtió en primer cónsul de la República el 11 de noviembre de 1799.'},
            {text0:'Empieza por O', character: 'O', status:'unsolved', 	answer: 'Ovidio', text:'Poeta romano. Sus obras más conocidas son Arte de amar y Las metamorfosis.'},
            {text0:'Empieza por P', character: 'P', status:'unsolved', 	answer: 'Pedro', text:'Nombre de pila del actual presidente del Gobierno de España.'},
            {text0:'Contiene la Q', character: 'Q', status:'unsolved', 	answer: 'Saqueos', text:'Incursiones que realizaban los vikingos durante sus viajes a otros territorios.'},
            {text0:'Empieza por R', character: 'R', status:'unsolved', 	answer: 'Rómulo', text:'Fundador de la ciudad de Roma junto con su hermano Remo.'},
            {text0:'Empieza por S', character: 'S', status:'unsolved', 	answer: 'Sigmund', text:'Nombre de pila de psicoanalista apellidado Zeus.'},
            {text0:'Empieza por T', character: 'T', status:'unsolved', 	answer: 'Tomás', text:'Nombre de pila del patrón de la Universidad de Salamanca.'},
            {text0:'Empieza por U', character: 'U', status:'unsolved', 	answer: 'Utrecht', text:'Conjunto de tratados firmados por los estados antagonistas en la Guerra de Sucesión Española entre los años 1713 y 1715 en la ciudad neerlandesa de Utrecht y en la alemana de Rastatt.'},
            {text0:'Contiene la V', character: 'V', status:'unsolved', 	answer: 'Victoria', text:'Nombre de la actual reina de Reino Unido.'},
            {text0:'Contiene la W', character: 'W', status:'unsolved', 	answer: 'Washington', text:'Primer presidente de los EEUU.'},
            {text0:'Contiene la X', character: 'X', status:'unsolved', 	answer: 'Beatrix', text:'Nombre la reina de Países Bajos.'},
            {text0:'Contiene la Y', character: 'Y', status:'unsolved', 	answer: 'Rajoy', text:'Apellido del anterior presidente del Gobierno de España.'},
            {text0:'Empieza por Z', character: 'Z', status:'unsolved', 	answer: 'Zeus', text:'Divinidad a la que se denomina a veces con el título de «padre de los dioses y los hombres»,​ que gobierna a los dioses del Olimpo como un padre a una familia, de forma que incluso los que no eran sus hijos naturales se dirigen a él como tal.'}
        ]
    }

    ]


module.exports = categories;
