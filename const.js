/* A M O U N T   O F   Q U E S T I O N S*/

const num_questions_epileptoid = 100;
const num_questions_cyclothymic = 100;
const num_questions_asthenic = 100;
const num_questions_shizoid = 100;
const num_questions_isteroid = 60;

/* Q U E S T I O N S */

const questions_epileptoid = [
  "Он не видит недостатки в своей внешности и поведении.",
  "Он нравится себе.",
  "Его самолюбие легко задеть, особенно проявляя неповиновение.",
  "Он легко переносит одиночество.",
  "По сути своей он мизантроп.",
  "Люди часто вызывают у него гнев или зависть.",
  "Он не переносит нанесенной ему обиды и готов отомстить.",
  "Если вы прерываете с ним отношения, не думайте, что это вам так просто сойдет с рук.",
  "Он всегда переоценивает свои самые незначительные достижения и раздувает их до небес.",
  "Он легко выражает свои негативные чувства в адрес окружающих и употребляет много негативных высказываний о других людях.",
  "Он недоверчив, подозрителен и держит дистанцию в отношениях.",
  "Он не склонен делиться своими чувствами и открывать душу, потому что он знает, что в душу ему наплюют, причем он может назвать потенциальных обидчиков поименно.",
  "Он считает, что завистники и недруги хотят нарушить его планы в отношении будущего.",
  "Он не хочет брать на себя обязательства и ответственность ради других.",
  "Он не хочет устанавливать симметричные отношения с другими людьми и старается использовать окружающих.",
  "Он великий манипулятор.",
  "Если вы идете в кафе в складчину, он постарается заплатить меньше всех.",
  "Он никогда не пропустит кого–либо вперед и легко перебивает других.",
  "Ему кажется, что он хорошо понимает других, видя в них лишь одни недостатки.",
  "Он часто приписывает другим свои неблаговидные черты (злопамятность, скупость, завистливость и др.).",
  "У него отсутствует чувство благодарности.",
  "В близких отношениях он старается доминировать.",
  "Он не признает права других, старается навязывать и диктовать свои условия.",
  "Его редко удается переубедить, он игнорирует логические доводы и отстаивает свое мнение, даже если понимает, что не прав.",
  "Он принимает повседневные решения, не советуясь с семьей.",
  "На критику, несогласие с ним он реагирует гневом и даже желанием отомстить.",
  "Он старается общаться с выгодными ему людьми.",
  "На работе он угождает начальству и обладает талантом повиновения.",
  "Он старается манипулировать сослуживцами, любит унижать подчиненных.",
  "Он признает только силу и доброжелательное отношение часто воспринимает как слабость.",
  "Он идет на демонстрацию силы при первом удобном случае и получает удовольствие от подавления других.",
  "Он рвется к власти и часто занимает гораздо более высокое положение, чем то, которого он достоин.",
  "В любви он берущий.",
  "Обычно члены семьи и родственники побаиваются его.",
  "Он устанавливает тотальный контроль за поведением жены и детей.",
  "Он легко манипулирует людьми.",
  "Он легко идет на измены.",
  "Он необычайно ревнив и подозрителен.",
  "Он старается не тратить деньги.",
  "Он больше всего на свете ценит власть.",
  "У него частые конфликты с родными из–за ерунды.",
  "Иногда он не может удержаться ни на одной работе из–за своей конфликтности и неуживчивости.",
  "Он не переносит неконтролируемых ситуаций.",
  "У него частые конфликты с соседями.",
  "При общении он любит подчеркивать слабые стороны собеседника и игнорирует его сильные стороны.",
  "Жертвенность он считает проявлением глупости.",
  "Страдания других его не волнуют.",
  "Он может физически наказывать жену и детей.",
  "У него хорошая психологическая защита.",
  "У него отличное здоровье, и он физически силен.",
  "Он прекрасный спортсмен и предпочитает силовые виды спорта, борьбу.",
  "Он любит укреплять свое здоровье и старается вести здоровый образ жизни.",
  "Он может отлично переносить нагрузки.",
  "У него часто не очень высокий интеллект.",
  "Он не очень любит работать, любит поспать и поваляться в кровати.",
  "У него всегда отличный аппетит и сон.",
  "Он любит роскошь и дорогую обстановку дома.",
  "Дома у него всегда порядок, и за нарушение порядка он наказывает.",
  "Часто у него бисерный почерк.",
  "Он обожает деньги, любит их пересчитывать и копить.",
  "Деньги для него — эквивалент власти.",
  "Он скуп и с трудом расстается с деньгами.",
  "Он аккуратно ведет финансовую документацию.",
  "Он не любит приглашать гостей из–за финансовых затрат.",
  "Ради денег он рискнет и легко пойдет на нарушение закона.",
  "У него невозможно одолжить деньги.",
  "При ведении бизнеса с ним нужно быть осторожным.",
  "В семье он легко переложит ответственность за заработок денег на плечи других.",
  "В детские годы он доставлял много проблем родителям с дисциплиной, успеваемостью, ленью.",
  "В школе он любил драться.",
  "Он часто равнодушен к театру, музыке, живописи.",
  "Ему не нужны прогулки на природе, но он признает общение с природой, дающее ему материальные ценности (рыбная ловля, охота).",
  "Он любит крепкие алкогольные напитки и склонен злоупотреблять ими.",
  "В состоянии опьянения он может терять контроль и становится опасным для окружающих.",
  "Он азартен и любит играть на деньги.",
  "Он любит хорошо и много поесть.",
  "Он не разговаривает за едой.",
  "Он любит развлекаться за чужой счет.",
  "Он пунктуален и всегда приходит вовремя.",
  "В случае разрыва отношений он может быть мстительным и опасным.",
  "В порыве мести, ради обогащения он может пойти на преступление.",
  "У него бывают периоды плохого, гневливого настроения без всякой причины.",
  "Он может устроить скандал, ссору по ничтожному поводу.",
  "Иногда для него присущи так называемые циклы жестокости, которые включают нарастание гнева, взрыв в виде скандала или драки, раскаяние и примирение с жертвой, новое нарастание гнева и т.д.",
  "Такое явление, как домашняя жестокость, вызвана в основном людьми данного характера.",
  "Он внимательно следит за своим здоровьем и никогда не пропустит визита к врачу.",
  "Он предрасположен к гипертонии.",
  "Он не верит врачам и считает, что его не хотят лечить.",
  "Заболев, он завидует молодым и здоровым.",
  "На работе он бюрократ.",
  "Ему чужды новизна, поиск. Они раздражают его, и он будет препятствовать проявлению любой инициативы.",
  "Для него более важны правила, чем интересы дела.",
  "Для него подходят профессии, связанные с выполнением строго очерченных обязанностей (чиновник).",
  "Для него хороши профессии, связанные с подавлением и стремлением соблюдать законы (армия, полиция).",
  "Диалог с ним возможен лишь с позиции силы.",
  "Для дружбы и любви он часто выбирает более слабого партнера.",
  "В отношении с ребенком он устанавливает режим подавления.",
  "Он часто не заботится о пожилых или беспомощных родителях.",
  "После развода он часто теряет интерес к детям и перестает им помогать.",
  "Чаще других он вступает в брак по расчету.",
];
const questions_cyclothymic = [
  "Вы редко задумываетесь о своей внешности.",
  "Вы всегда сохраняете самоуважение и достоинство.",
  "Вы любите принимать самостоятельные решения.",
  "Вы легко берете на себя ответственность.",
  "Вы любите решать проблемы и не переносите состояние бездеятельности.",
  "Вы бесстрашны.",
  "Вы любите преодоление препятствий, неизвестность, борьбу.",
  "У вас, как правило, хорошее настроение.",
  "У вас большая поисковая активность в условиях, не обещающих положительного прогноза.",
  "Вы ориентированы на движение вперед, к успеху, но можете довольствоваться малым.",
  "Общение с людьми — высшее наслаждение для вас.",
  "Вы не переносите одиночества.",
  "В споре вы всегда будете отстаивать свою точку зрения, однако учитываете и доводы другого человека.",
  "Вы не боитесь сказать «нет», хотя будете выражать свое несогласие дипломатично.",
  "У вас хорошие отношения с начальством, коллегами, подчиненными.",
  "Вы с удовольствием поможете тому, у кого сейчас трудное время.",
  "Если окружающие хотят вас унизить, вы даете отпор.",
  "Вы легко соблюдаете границы в отношениях и способны признать право другого человека на частную жизнь.",
  "Вы разговорчивы, открыты и не можете хранить захватывающую информацию.",
  "Вы любите покушать в компании.",
  "Вы любите приглашать гостей и ходить в гости.",
  "При общении вы легко подчеркиваете сильные стороны другого человека и можете оказать ему поддержку в областях его слабости.",
  "Вы способны понять самых разных людей и принять их странности.",
  "Вы хороший сосед.",
  "Вы всегда признаете право другого человека на свободу и самостоятельное принятие решений.",
  "Вы часто оказываетесь в центре внимания, хотя не стремитесь к этому.",
  "Вы предпочитаете устанавливать с окружающими симметричные отношения, когда обе стороны вносят одинаковый вклад в отношения.",
  "Вы не любите подавлять других, но, если нужно, легко идете на демонстрацию силы.",
  "Даже в близких отношениях вы сохраняете независимость.",
  "Вы легко признаете права других, если они признают ваши.",
  "Вы спокойно переносите критику, несогласие с вами или нежелание общаться с вами.",
  "Вы любите узнавать новых людей.",
  "Вы прирожденный лидер.",
  "Вы с благодарностью оглядываетесь на прошлое, цените настоящее. В отношении будущего вы имеете самые радужные предположения.",
  "Ваш позитивный прогноз на будущее часто чрезмерно завышен.",
  "Вы, как говорят боксеры, хорошо держите удар.",
  "Вы одновременно можете решать несколько задач.",
  "Вы не переносите мелочного контроля, диктата, подавления.",
  "Вы не мстительны и легко забываете обиду.",
  "У вас редко возникает чувство гнева.",
  "Вы сравнительно легко принимаете жизненные потери.",
  "Вы быстро адаптируетесь в новых условиях.",
  "Вы любите менять квартиры и место проживания.",
  "У вас отличная психологическая защита.",
  "Вы легко начинаете новое дело, но вам трудно довести его до конца.",
  "Вы любите разнообразие в еде, проведении свободного времени.",
  "Вам нравится передвигать мебель в квартире.",
  "Вы любите добираться до работы разными путями.",
  "Вы хороший стратег, но часто невнимательны к деталям и мелочам.",
  "Вам трудно соблюдать порядок, зато вы легко его нарушаете.",
  "Вам трудно быть пунктуальным, и вы часто опаздываете.",
  "Вы любите путешествовать, и перемещение в пространстве всегда успокаивает вас.",
  "Вы любите коллективные виды спорта.",
  "У вас несколько хобби.",
  "Вы легко учитесь и все схватываете на лету.",
  "Вы хорошо переносите физические нагрузки, стресс, голод, недосыпание.",
  "Вы легко относитесь к деньгам и любите их тратить.",
  "Вам трудно копить деньги и планировать бюджет.",
  "Вы любите делать подарки, и вам присуща щедрость сердца и кармана.",
  "Деньги дают вам возможность в большей степени наслаждаться миром.",
  "Вы любите развлекаться, ходить в театры, рестораны.",
  "Вы часто забываете вовремя оплатить счета и всегда опаздываете с оформлением налоговой декларации.",
  "Ведение финансовой документации вызывает у вас досаду и требует от вас напряжения.",
  "В детстве вы были доброжелательным, веселым и общительным ребенком.",
  "У вас с детства хороший аппетит и сон.",
  "Скорее всего, у вас был непростой подростковый возраст.",
  "Вы любите разнообразие в жизни.",
  "Вы можете пойти на супружескую измену, сохранив при этом прекрасные отношения с женой (мужем).",
  "Вы не ревнивы.",
  "Вы ориентированы на семью при условии сохранения вашего права на частную жизнь.",
  "Вы хорошая поддержка для супруги (супруга) и любите украшать их жизнь.",
  "Вы не пристаете к детям по мелочам, но следите за тем, чтобы у них было хорошее настроение.",
  "Наверно, вы даете детям слишком много свободы.",
  "Вы любите решать проблемы с женой и детьми сообща.",
  "У вас дома хороший психологический климат.",
  "Люди любят бывать у вас в доме.",
  "Вы любите домашних животных, но часто беспечны в отношении ухода за ними.",
  "У вас прекрасные отношения с родственниками.",
  "Вас любит и уважает ваша семья.",
  "Вы заботитесь о престарелых родителях.",
  "Вы доставляли им хлопоты с самого раннего детства (побеги из детского сада, попытки отправиться в кругосветное путешествие, драки за правое дело, физические травмы из-за переоценки своих возможностей).",
  "Вы беспечны по отношению к своему здоровью.",
  "Вы ненавидите ходить по врачам и лечиться.",
  "Вы можете долго и напряженно работать.",
  "У вас, как правило, хорошие взаимоотношения с коллегами на работе.",
  "Даже серьезные заболевания не меняют вашего беспечного отношения к жизни.",
  "Депрессия меняет ваше отношение к себе, вызывает чувство неуверенности, снижает присущую вам высокую самооценку.",
  "Депрессия убивает ваш коммуникативный талант, меняет отношение к окружающим, вызывает потребность в уединении, заставляет вас избегать общения.",
  "Депрессия изменяет ваше отношение к миру и присущий вам оптимизм.",
  "Вы относитесь к малоспящим, но при депрессии ваша потребность во сне может резко возрастать.",
  "Вы можете долго работать без устали, но при депрессии ваша производительность резко падает.",
  "При депрессии ваше беспечное отношение к будущему сменяется чувством тревоги и неуверенности.",
  "Первые эпизоды депрессии могли появиться у вас в детстве и подростковом возрасте.",
  "После окончания депрессии вы быстро наверстываете упущенное.",
  "Вам не свойственно чувство зависти.",
  "Вы берете на работу ярких людей и стараетесь продвигать их по службе.",
  "Вы не боитесь конкуренции.",
  "Вы умеете проигрывать.",
  "Вы можете осуществлять крупномасштабные проекты.",
  "Вам подходят профессии, связанные с меняющимися обстоятельствами, общением с разными людьми, принятием на себя ответственности и необходимости принятия решений.",
];
const questions_asthenic = [
  "Вы находите в своей внешности недостатки и это вас огорчает.",
  "Если окружающие говорят о ваших достоинствах, вы испытываете чувство неудобства.",
  "Вы недооцениваете свои интеллектуальные достижения.",
  "Вас легко обидеть. Слово, жест или молчание другого человека могут легко ранить вас.",
  "Вы не верите в свои силы и стараетесь найти союзников в осуществлении даже тех проектов, которые вы можете осуществить самостоятельно.",
  "Вы нерешительны и подвержены колебаниям при принятии даже самых простых решений.",
  "Вы плохо переносите одиночество, хотя оно необходимо вам для восстановления сил.",
  "Вы необычайно тяжело переносите разрыв с другим человеком, и это занижает вашу самооценку.",
  "В своем прошлом вы склонны находить одни ошибки.",
  "В жизни, окружающей вас сегодня, вы в первую очередь подмечаете теневые стороны.",
  "Вы склонны строить негативный прогноз событий.",
  "У вас завышенное чувство долга.",
  "Вам трудно требовать что–либо для себя.",
  "Если вы идете в кафе в складчину, вы заплатите больше остальных.",
  "Если хвалят вашу одежду, вы будете приуменьшать ее ценность, говорить, что купили ее на распродаже, что ей 100 лет и тому подобное.",
  "Вы пропускаете всех вперед.",
  "Вы хорошо понимаете окружающих, сочувствуете им, с удовольствием помогаете им.",
  "Вы нуждаетесь в общении, но устаете от него.",
  "Вам необходимо делиться своими чувствами с окружающими.",
  "У вас повышенное чувство благодарности.",
  "В близких отношениях вы легко попадаете в зависимость.",
  "Вы легко признаете права других и легко идете на самоуничижение.",
  "Вам трудно отстаивать свое мнение, вы быстро соглашаетесь, даже если внутренне не согласны.",
  "Вам нелегко принимать повседневные решения без совета с другими, их поддержки и одобрения.",
  "Вы чувствительны к мнению окружающих.",
  "Вам трудно выражать несогласие с другими и говорить слово «нет».",
  "Вы болезненно переживаете критику, несогласие с вами, нежелание общаться с вами. Все это занижает вашу самооценку.",
  "По возможности вы стараетесь не общаться с теми, кому не нравитесь.",
  "Общение с новыми людьми может даваться вам с трудом из–за опасений критики или отвержения с их стороны.",
  "Вам часто кажется, что окружающим неинтересно с вами общаться.",
  "Вы прекрасный исполнитель, но вам крайне трудно руководить людьми.",
  "Вам трудно устанавливать симметричные отношения с людьми, и вы всегда вносите больший вклад в любые отношения.",
  "Вам крайне трудно пойти на демонстрацию силы.",
  "Вы не позволяете себе выразить негативные чувства в адрес окружающих.",
  "Вы, как правило, занимаете более низкое положение, чем то, которого достойны.",
  "Люди легко пользуются вами.",
  "В любви вы дающий.",
  "Вы любимы своей семьей.",
  "Вы необычайно привязаны к тем, кого любите.",
  "Вы не будете преодолевать препятствия ради себя, но сделаете это ради других.",
  "Вашу внутреннюю утонченность окружающие часто принимают за слабость.",
  "Вы легко приукрашаете и идеализируете людей.",
  "Ваши хорошие отношения на работе основаны на вашей исполнительности, безотказности, стремлении помочь окружающим.",
  "Вы побаиваетесь начальства.",
  "Вы с удовольствием поможете тому, кому сейчас трудно.",
  "Вы не уверены в себе и тревожны.",
  "Вы легко прощаете других, но жестоко корите себя за сделанные ошибки.",
  "Вы заботитесь о семье, родных, друзьях, соседях.",
  "Вы не уверены в любви близких людей к вам.",
  "Вы почти постоянно испытываете тревогу о своих близких. Вы спокойны в полной мере, если они все находятся рядом с вами.",
  "Вы легко приносите себя в жертву и не делаете из этого подвига.",
  "При общении вы легко подчеркиваете сильные стороны другого человека, но не говорите о своих достоинствах.",
  "Вы часто испытываете страдание от несовершенства людей и окружающего мира. Вы все принимаете близко к сердцу.",
  "Незаслуженная обида, прекрасная музыка или стихи могут вызвать у вас слезы.",
  "Начало нового дела, инициация проекта являются для вас сильнейшим стрессом.",
  "Вы скорее пессимист, чем оптимист.",
  "Перемены пугают вас, даже изменение ситуации к лучшему может вызвать у вас панику.",
  "Вам трудно принимать решения и брать на себя ответственность.",
  "Вы всегда боялись экзаменов.",
  "Перед экзаменом у вас часто болел живот и вы испытывали недомогание.",
  "Длительное интеллектуальное напряжение, например экзаменационная сессия, повышало вашу заболеваемость.",
  "Вы плохо адаптируетесь в новых условиях.",
  "Вы плохо переносите физические нагрузки, голод, холод, жару, недосыпание, интеллектуальные перегрузки.",
  "Вы хорошо функционируете на фоне щадящего образа жизни.",
  "Вы часто испытываете физический дискомфорт. Почти каждый день у вас что–то болит.",
  "У вас проблемы с гастроэнтерологией.",
  "Вы метеочувствительны.",
  "С детства у вас чуткий сон.",
  "Вы долгоспящий и нуждаетесь в большом количестве сна.",
  "Вы тревожны, впечатлительны и обладаете повышенной чувствительностью к стрессам.",
  "Вы с трудом принимаете самые незначительные жизненные потери.",
  "Вы не любите менять обстановку дома и передвигать мебель.",
  "Ремонт для вас — катастрофа.",
  "Вы хорошо справляетесь с одной задачей. Необходимость выполнять одновременно несколько дел является для вас сильнейшим стрессом.",
  "Вам с трудом дается начало нового дела, и вы можете паниковать, раздражаться, плакать и даже заболеть.",
  "Как только вы привыкаете к новым условиям, вы начинаете хорошо функционировать.",
  "Вы не даете отпора на мелочный контроль, диктат, подавление, но в этих условиях у вас могут появиться физические и ментальные недомогания.",
  "Длительное состояние фрустрации приводит к тому, что вы начинаете «рассыпаться».",
  "В ситуации хронического стресса у вас появляются невро–генные нарушения соматики, обилие жалоб на здоровье при хороших анализах.",
  "Вы ненавидите переезжать, менять квартиры.",
  "Вы аккуратны, и в квартире у вас всегда порядок, все на своих местах.",
  "Вы всегда вовремя оплачиваете счета и раньше всех оформляете налоговую декларацию.",
  "В школе вы хорошо и прилежно учились.",
  "Вы не любили отвечать у доски и быть в центре внимания.",
  "Вы прекрасно работаете с информацией.",
  "Скорее всего, у вас высокий интеллект.",
  "Вы тонко чувствуете живопись.",
  "Вы любите природу.",
  "Вы любите цветы, домашних животных и хорошо о них заботитесь.",
  "Вы не любите спорт и редко достигаете в нем хороших результатов.",
  "Тихий вечер дома в кругу семьи или друзей, пребывание на природе — лучший отдых для вас.",
  "В детстве ваши родители имели много хлопот с вашим здоровьем.",
  "Вы всегда внимательны к потребностям своего партнера.",
  "Вам было бы трудно пойти на супружескую измену.",
  "Вы являетесь отличной системой поддержки для близких.",
  "Вы бережливы и осторожно тратите деньги.",
  "Деньги дают вам ощущение защиты от жизненных стрессов и снижают вашу неуверенность перед будущим. Они уменьшают вашу веру в то, что «черный день» обязательно наступит.",
  "Вы не очень любите ходить в кафе и рестораны (нарушение диеты, трата денег, шум).",
  "Вы редко опаздываете, чаще приходите раньше.",
  "Вы любите лечиться и успокаиваетесь в кабинете врача.",
];
const questions_shizoid = [
  "У него высокий интеллект.",
  "Он осознает свое интеллектуальное превосходство над окружающими.",
  "Он постоянно ведет интеллектуальный поиск.",
  "Часто он блестяще, энциклопедически образован.",
  "Он тонко чувствует поэзию, музыку, живопись, интеллектуальное кино.",
  "Он крайне неточно представляет окружающую его жизнь.",
  "Нам трудно понять, о чем он думает.",
  "Он плохо понимает чувства окружающих.",
  "Он не замечает важных изменений в жизни окружающих, в обстановке вокруг него.",
  "Его мало волнует, чем живут другие люди.",
  "Он холоден и не склонен к проявлению теплых чувств.",
  "Он становится разговорчивым лишь с избранными и среди них может быть общительным.",
  "Он любит одиночество.",
  "Ему трудно и неинтересно поддерживать светский разговор.",
  "Он не любит ходить в гости.",
  "В гостях он, как правило, молчалив.",
  "Его представления о людях часто наивны и оторваны от жизни.",
  "Он беспомощен перед интригой.",
  "Несмотря на свой мощный интеллект, он может быть игрушкой в руках манипулятора.",
  "Он может легко согласиться с собеседником, лишь бы его оставили в покое.",
  "Ему трудно определить границы в отношениях с другими, и он легко их нарушает.",
  "На вторжение в свой внутренний мир он отвечает протестом и гневом.",
  "Он не переносит критики своих идей и ненавидит оппонентов.",
  "Он не здоровается с соседями.",
  "Он не любит быть в центре внимания или не замечает этой ситуации.",
  "Он спокойно и невозмутимо воспринимает критику по бытовым вопросам, воспитанию детей, отношениям с женой, часто даже не слыша, что ему говорят.",
  "Он забывает о праздниках, днях рождения, забывает делать подарки по их случаю.",
  "У него не развита потребность в принадлежности к какой–либо группе людей.",
  "У него нет потребности заботы о ком–то.",
  "Он не жалует окружающих своим вниманием.",
  "Его бестактные или грубые высказывания в адрес окружающих продиктованы невозможностью понять чувства других.",
  "В детстве родители отмечали, что он может долго играть один.",
  "Ему всегда было тяжело общаться со сверстниками, он держался особняком и в детском саду, и в школе.",
  "В школе он прекрасно учился и превосходил сверстников по интеллекту.",
  "В школе сверстники не любили его, делали его объектом насмешек и даже издевательств.",
  "Он отрицает необходимость симметричных отношений и какого–либо вклада в отношения.",
  "Он старается не брать на себя ответственность за судьбы других людей.",
  "Если кто–то из членов его семьи болеет, он может этого не заметить.",
  "Он может выбрать партнершу внешне неинтересную, но интеллектуальную.",
  "Он не приспособлен к бытовой жизни.",
  "Его бытовая неприспособленность навязывает жене роль матери и домработницы.",
  "Из–за своей бытовой беспомощности он нуждается в системе поддержки.",
  "Семья нужна ему в первую очередь для его защиты от решения бытовых проблем.",
  "Он плохая поддержка для супруги и детей и не балует их своим вниманием.",
  "Он не любит обсуждать семейные проблемы, но внезапно может проявить к ним интерес в самой непредсказуемой форме.",
  "Он не замечает жизни семьи.",
  "Он не любит маленьких детей.",
  "Он плохой родитель, плохо осведомлен о проблемах детей.",
  "Он проявляет интерес к детям, когда они подрастают и с ними можно поговорить об умных вещах.",
  "Он человек крайностей.",
  "Он мало обращает внимания на одежду или, наоборот, отличается гиперэстетизмом.",
  "Он ест, что попало, или, наоборот, он изощренный гурман.",
  "Ему трудно выразить свои чувства и облечь их в слова.",
  "У него часто превосходная механическая память.",
  "С детства у него отличный сон.",
  "Он относится к малоспящим и ему может хватать 4–5 часов сна.",
  "У него причудливое хобби, которому он отдается со всей страстью.",
  "Вокруг него беспорядок, и он его не замечает.",
  "Он рассеян, теряет очки и документы.",
  "У него всегда трудности с финансовой документацией.",
  "Он забывает вовремя оплатить счета. Ведение финансовой документации вызывает у него чувство раздражения и гнева.",
  "Он оформляет налоговую декларацию позже всех, делает это плохо и теряет деньги.",
  "Он предпочитает одиночные виды спорта.",
  "Если он совершает преступление, то только в одиночку.",
  "Одиночество не утруждает его.",
  "Он плохо понимает чувства жены, да они ему не особо интересны.",
  "Он охотно обсуждает с женой свои внебрачные связи.",
  "У него частые конфликты на работе, причины которых он не понимает.",
  "На работе у него плохие отношения, за исключением ситуаций, где ценят его интеллект.",
  "Он непригоден для руководства людьми, за исключением позиции научного руководителя.",
  "Он может долго и напряженно работать.",
  "Он плохо замечает течение времени и часто опаздывает.",
  "Он не мстителен и легко забывает обиду, если она касается бытовой жизни.",
  "Он легко проигрывает, если это не касается проигрыша в значимой для него интеллектуальной области.",
  "Он легко инициирует проекты в области интеллекта, но отказывается делать это в бытовых вопросах.",
  "Он любит путешествовать в одиночку.",
  "Часто общество собаки он предпочитает обществу людей.",
  "У него прекрасное здоровье.",
  "Он почти никогда не испытывает тревогу или страх.",
  "Он часто любит экзотические диеты и нестандартные методы укрепления здоровья.",
  "Он не любит ходить к врачам.",
  "Он мало болеет и до глубокой старости сохраняет отличное здоровье.",
  "У него сильная нервная система.",
  "Он отлично справляется с любыми перегрузками.",
  "Он старается не менять среду обитания.",
  "Ему трудно обживаться в новой обстановке.",
  "У него хорошая стрессоустойчивость в отношении стрессов окружающего мира, так как он их не замечает.",
  "Он крайне чувствителен к вторжению в свои внутренние схемы.",
  "Он может одновременно решать несколько задач в интеллектуальной, но не в бытовой области.",
  "Он тщательно анализирует ошибки в интеллектуальной области, но не учится на ошибках в повседневной жизни.",
  "Он не склонен признавать свои просчеты, касающиеся отношений с окружающими.",
  "Под влиянием стресса возрастает его нелюдимость, неразговорчивость, падает способность замечать других и понимать их жизнь.",
  "Ему трудно планировать бюджет, разумно тратить деньги, копить их.",
  "Он понимает, что деньги легализуют его право на странности, чудачества, нестандартность.",
  "Он абстрактный гуманист, но не способен направить поток тепла и заботы на конкретного человека.",
  "Он не может правильно вести себя в простейших социальных играх.",
  "Женщины–шизоиды почти всегда плохие хозяйки.",
  "Женщины–шизоиды часто делают блестящую профессиональную карьеру.",
  "Как правило, они холодные матери, не понимающие проблем ребенка.",
  "Шизоидам подходят виды деятельности, реализующие их яркий интеллектуальный потенциал и предполагающие ограниченное общение.",
];
const questions_isteroid = [
  "У истероида высокая самооценка, часто ничем не подкрепленная",
  "Самое важное для него — произвести впечатление",
  "Его сиюминутные привычки определяются той средой, в которой он находится",
  "Он, как правило, тщательно следит за своей внешностью",
  "В его одежде яркие тона, причудливые фасоны",
  "У него часто необычная прическа",
  "Даже в старости он употребляют яркий макияж, вычурную одежду",
  "Он часто «молодится», и его одежда соответствует более молодому возрасту",
  "Он любит говорить о знакомстве с сильными мира сего",
  "Его поведение меняется в зависимости от того, кто его окружает, и определяется той ролью, которая считается престижной в данной социальной группе",
  "У него хорошая эмпатия, и он хорошо понимает окружающих",
  "Он использует свою эмпатию для осознания того, как произвести наибольшее впечатление на окружающих",
  "Он часто врет, приукрашая себя. Он может страдать симптомами болезни Мюнхгаузена",
  "Его потребность в принадлежности к престижному кругу людей необычайно велика",
  "Он прекрасно включается в социальные игры",
  "Он часто производит приятное впечатление при первом знакомстве, но скоро окружающие понимают его поверхностные, неглубокие чувства",
  "У него нет потребности заботы о других",
  "Ему доставляет удовольствие манипулировать другими",
  "Он всегда много обещает, лишь бы произвести впечатление",
  "Часто он плохой друг, и на него нельзя положиться",
  "Он любит поверхностные контакты и светскую жизнь",
  "Он легко меняет друзей и знакомых",
  "Он не хочет делать вклад в отношения",
  "Он легко использует других",
  "Он старается переложить ответственность на других",
  "Больше всего на свете он любит развлекаться",
  "Если ему дать возможность, он всю жизнь проведет в пустых развлечениях",
  "Он не думает о будущем и беспечно к нему относится",
  "У него слабая нервная система",
  "Он плохо переносит физические и нервные нагрузки, недосыпание, голод, интеллектуальные нагрузки",
  "У него не очень крепкое здоровье",
  "Он легко уходит в болезнь, чтобы получить выгоды (не учиться, не работать, снять с себя ответственность)",
  "С детства он любил быть в центре внимания",
  "Родители часто воспитывали его по принципу «кумир семьи»",
  "В детстве он часто капризничал",
  "Он требовал постоянного внимания к себе",
  "Он часто устраивал истерики, добиваясь своего от родителей",
  "У него часто не складывались отношения со сверстниками",
  "В своей возрастной группе он старался быть около лидера",
  "Женщины–истероиды — всегда искусные, прирожденные кокетки",
  "Их главная жизненная цель — удачное замужество",
  "Мужчины–истероиды часто являются охотниками за богатыми женщинами",
  "Истероиды, как никто другой, владеют искусством обольщения",
  "Они стараются выбирать в качестве партнера шизоида, которым они легко манипулируют",
  "Благодаря постоянному кокетству и манипуляции женщина–истероид часто удачлива в роли жены",
  "Она плохая хозяйка, но любит пустить пыль в глаза при приходе гостей",
  "Дома у нее часто неуютно",
  "Она часто плохая мать, ее раздражает плач детей",
  "Проблемы детей ей не интересны",
  "Она старается спихнуть с себя уход за детьми",
  "Развлечения и светская жизнь для нее более интересны и значимы, чем проблемы детей",
  "Истероид не способен признавать свои просчеты и ошибки",
  "Он не любит работать и не переносит длительных усилий",
  "Он не любит преодолевать препятствия",
  "Он не думает о будущем семьи и детей",
  "Непомерный эгоцентризм, завышенная самооценка не позволяют ему признать свои ошибки и просчеты",
  "Он может быть успешен в театре, шоу–бизнесе, в профессиях, где он всегда будет в центре внимания",
  "Преступники–истероиды это аферисты, обманщики, вкравшиеся в доверие своей будущей жертвы",
  "Истероид чаще других старается достичь жизненного успеха не трудом, а за счет выгодного брака, престижных знакомых, отсуживания денег",
  "Довольно редко он делает успешную карьеру в науке, высоких технологиях, исполнительском искусстве, всюду, где требуются значительные, планомерные усилия.",
];

export {
  num_questions_epileptoid,
  num_questions_cyclothymic,
  num_questions_asthenic,
  num_questions_shizoid,
  num_questions_isteroid,
  questions_epileptoid,
  questions_cyclothymic,
  questions_asthenic,
  questions_isteroid,
  questions_shizoid,
};
