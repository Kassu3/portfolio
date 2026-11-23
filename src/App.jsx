import dashboardVideo from './assets/dashboard-demo.mp4';
import excavatorVideo from './assets/excavator-demo.mp4';
import fanshowcase from './assets/fan_showcase.png';
import aiagentVideo from './assets/ai-diagnostic-agent-demo.mp4';
function App() {
  // Esimerkkidata projekteista – voit muokata näitä tekstejä myöhemmin! 

  return (
    <div className="min-h-screen bg-[#0b0f19] text-gray-100 font-sans antialiased selection:bg-cyan-500 selection:text-white">

      {/* HEADER / NAVIGOINTI */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#0b0f19]/70 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <span className="text-xl sm:text-xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
            PORTFOLIO
          </span>
          <nav className="flex text-base space-x-3 md:text-lg sm:space-x-6 text-sm sm:text-base font-medium text-gray-400">
            <a href="#about" className="hover:text-cyan-400 transition-colors">Minusta</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Projektit</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Yhteys</a>
          </nav>
        </div>
      </header>

      {/* HERO-OSIO (Esittely) */}
      <section id="about" className="max-w-7xl mx-auto px-6 py-20 md:py-32 flex flex-col justify-center">
        <p className="text-cyan-400 font-semibold text-3xl mb-3 tracking-widest">MOI, OLEN KAISA</p>
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-4">
          Ohjelmistokehittäjä.
        </h1>
        <h2 className="text-3xl md:text-6xl font-bold tracking-tight text-gray-400 mb-6">
          Rakennan moderneja sovelluksia ja sulautettuja IoT-ratkaisuja.
        </h2>

        <p className="text-gray-400 text-xl max-w-6xl leading-relaxed mb-6">
          Olen erikoistunut Flutter-, QML-, React-pohjaisten käyttöliittymien, sekä toimivien laite- ja ohjelmistokokonaisuuksien suunnitteluun ja kehittämiseen. Alta löydät näytteitä töistäni, koodistani ja toteutuksistani.
        </p>

        <p className="text-gray-400 text-xl max-w-6xl leading-relaxed mb-6">
          Ennen ohjelmointiopintojani työskentelin vuosia ympäristöalan laboratoriossa ja yrittäjänä. Vastuullani oli useita analysaattoreita, niiden käyttöjärjestelmiä ja laboratorion uuden tietojärjestelmän sisäänajo ja kehitys - tästä heräsi innostukseni ohjelmointiin. Koneet, robotit ja laitteiden toiminnan selvittäminen ovat aina kiehtoneet minua. Nautin itseni haastamisesta ja uuden oppimisesta.
        </p>

        <p className="text-gray-400 text-xl max-w-6xl leading-relaxed mb-10">
          Aloitin ohjelmointiopintoni avoimessa AMK:ssa vuonna 2019 Pythonilla, HTML:llä ja CSS:llä, ja siirryin nopeasti mm. JavaScriptiin, C/C++:aan ja sulautettuihin järjestelmiin. Avointen opintojen jälkeen aloitin suorittamaan tieto- ja viestintätekniikan insinöörin monimuoto-opintoja HAMKissa. Opintojeni ohella olen rakentanut aktiivisesti omia projekteja aina Teslan dashboardista Timotei-heinän kypsyysasteen seurantaan ja hevosen AI-pohjaiseen video-ontumatutkimukseen.
        </p>

        <h3 className='text-2xl font-bold text-white mb-6'>Teknologiat ja työkalut:</h3>

        <div className='space-y-4 max-w-6xl'>
          <div>
            <h4 className='text-xl font-semibold text-cyan-400'>Kielet:</h4>
            <p className="text-gray-400 text-lg leading-relaxed">
              Dart, Python, Java, C/C++, Kotlin, PHP, JavaScript, TypeScript, QML, SQL
            </p>
          </div>

          <div>
            <h4 className='text-xl font-semibold text-cyan-400'>Käyttöliittymät ja Web:</h4>
            <p className="text-gray-400 text-lg leading-relaxed">
              Flutter, React, Qt6 / QML, React Native, HTML5, CSS3, Tailwind CSS, Vite, Streamlit, Bootstrap
            </p>
          </div>

          <div>
            <h4 className='text-xl font-semibold text-cyan-400'>Backend, Tietokannat ja Sulautetut:</h4>
            <p className="text-gray-400 text-lg leading-relaxed">
              ESP32, PlatformIO, MQTT, Node.js, Express, REST API, Firebase, PostgreSQL, MySQL, SQLite, MongoDB, JSON API
            </p>
          </div>

          <div>
            <h4 className='text-xl font-semibold text-cyan-400'>IoT & AI:</h4>
            <p className="text-gray-400 text-lg leading-relaxed">
              Ollama (LLM / RAG), Docker, I2C, Wokwi, AI, UDP, Gemma 2 / Phi-3
            </p>
          </div>

          <div>
            <h4 className='text-xl font-semibold text-cyan-400'>Suunnittelu ja kehitystyökalut:</h4>
            <p className="text-gray-400 text-lg leading-relaxed">
              Git, GitHub, CMake, Android Studio, Visual Studio 2022, Vs Code, Eclipse IDE, Figma, Adobe Photoshop, Power BI
            </p>
          </div>

          <div>
            <h4 className='text-xl font-semibold text-cyan-400'>Verkot, Infra & Valvonta:</h4>
            <p className="text-gray-400 text-lg leading-relaxed">
              Linux (Ubuntu 24.04), WSL2, Docker Engine, Containerlab, Ansible, FRRouting, NetBox, Prometheus, Grafana, Zabbix, SNMP, Syslog, Wireshark
            </p>
          </div>

          <div>
            <a
              href="#projects"
              className="inline-block bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 font-bold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity shadow-lg shadow-cyan-500/10"
            >
              Katso projektit
            </a>
          </div>
        </div>
      </section>

      {/* PROJEKTIT (Tämä skaalautuu automaattisesti mobiilista dekstopiin) */}
      <section id="projects" className="max-w-7xl mx-auto px-6 py-20 border-t border-gray-800">
        <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-3">
          <span className="text-cyan-400 font-mono text-xl">01.</span> Esiteltävät projektit
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {/* KORTTI 1: IoT DASHBOARD (Tässä pyörii video) */}
          <div className="bg-[#111827] border border-gray-800 rounded-xl p-6 flex flex-col justify-between hover:border-cyan-500/40 transition-all duration-300 group">
            <div>
              <div className="aspect-video rounded-lg mb-5 overflow-hidden border border-gray-800 group-hover:border-cyan-500/30 transition-colors bg-slate-950">
                <video
                  className="w-full h-full object-cover"
                  controls
                  preload="metadata"
                >
                  <source src={dashboardVideo} type="video/mp4" />
                  Selaimesi ei tue videotunnistetta.
                </video>
              </div>

              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                Reaaliaikainen IoT-Anturidata & Full Stack - Valvontajärjestelmä
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed mb-4">
                Toteutettu Reactilla ja Vitellä verkkosivusto, joka tallentaa ja visualisoi lennosta IoT-laitteen lähettämää sensoridataa, hyödyntää moderneja kaavioita ja responsiivista asettelua.
              </p>
              <h4 className='text-white font-bold mt-2 mb-1'>Avainominaisuudet & Teknologiat:</h4>
              <ul className='list-disc pl-5 flex flex-col gap-1 text-gray-400'>
                <li><strong>Laitteistosimulaatio:</strong> Järjestelmä hyödyntää <strong>Wokwi-alustalla</strong> simuloitua <strong>ESP32-mikrokontrolleria</strong>, johon on kytketty fyysisiä ympäristöantureita.</li>
                <li><strong>Relaatiotietokanta (SQL):</strong> Saapuva anturidata puretaan taustajärjestelmässä ja tallennetaan strukturoidusti <strong>SQL-tietokantaan</strong>. Tämä mahdollistaa historiadatasta suoritettavat SQL-haut ja pitkäaikaisen tiedon varastoinnin.</li>
                <li><strong>Reaaliaikainen tiedonsiirto:</strong> Anturitiedot pakataan JSON-muotoon ja välitetään API-rajapintojen (HTTP/WebSockets/MQTT-protokollalla) viiveettömästi eteenpäin.</li>
                <li><strong>Moderni Frontend-valvomo:</strong> Reactilla ja Vitellä rakennettu käyttöliittymä päivittää lukemat (kuten kosteuden, lämpötilan, tärinä, asento) dynaamisesti ruudulle.</li>
                <li><strong>Teknologiat:</strong> React.js, SQL (MySQL/PostgreSQL), Python backend/Node.js, ESP32, I2C, ADC, DHT22, MPU6050, Potentiometri, Wokwi, JSON API.</li>
              </ul>
            </div>

            <div>
              <div className="flex flex-wrap gap-2 mb-6">
                {["React", "Vite", "Tailwind CSS", "Python", "Node.js", "IoT", "ESP32", "MPU6050", "Potentiometri", "I2C", "DHT22", "ADC", "JSON API", "Wokwi", "SQL (MySQL/PostgreSQL"].map((tag, index) => (
                  <span key={index} className="text-lg font-mono bg-slate-900 text-emerald-400 px-2.5 py-1 rounded border border-emerald-500/10">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 text-lg font-medium border-t border-gray-800/60 pt-4">
                <a href="https://github.com/Kassu3/iot-dashboard" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-cyan-400 flex items-center gap-1 transition-colors">
                  Koodi GitHubissa ↗
                </a>
              </div>
            </div>
          </div>

          {/* KORTTI 2: SEURAAVA PROJEKTI (Odottaa uutta koodia) */}
          <div className='bg-[#111827] border border-gray-800 rounded-xl p-6 flex flex-col justify-between hover:border-cyan-500/40 transition-all duration-300 group'>
            <div>
              <div className='aspect-video bg-slate-950 rounded-lg mb-5 flex items-center justify-center border border-gray-800 group-hover:border-cyan-700 transition-colors overflow-hidden'>
                <video
                  className="w-full h-full object-cover"
                  controls
                  preload="metadata"
                >
                  <source src={excavatorVideo} type="video/mp4" />
                  Selaimesi ei tue videotunnistetta.
                </video>
              </div>

              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                Teollisen kaivinkoneen reaaliaikainen valvomo- ja ohjausjärjestelmä
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed mb-4">
                Tämä projekti on dynaaminen valvomo- ja ohjausliittymä (Dashboard) teollisuuskoneen telemetrian seurantaan ja ohjaukseen. Sovellus koostuu modernista C++ ja Qt/QML -pohjaisesta työpöytäsovelluksesta, joka kommunikoi reaaliaikaisesti Pythonilla toteutetun fysiikkasimulaattorin kanssa asynkronisen UDP-sokettiyhteyden yli. Järjestelmä sisältää älykkään tilakoneen ja varoitusjärjestelmän, joka reagoi kriittisiin tiloihin (kuten moottorin ylikuumenemiseen tai hydrauliikan ylipaineeseen) suojaten laitteistoa ja tarjoten välittömän hätäpysäytystoiminnon.
              </p>
              <h4 className='text-white text-lg font-bold mt-2 mb-1'>Avainominaisuudet & Teknologiat:</h4>
              <ul className='list-disc pl-5 text-lg flex flex-col gap-1 text-gray-400'>
                <li><strong>C++ & QML (Qt 6):</strong> Suorituskykyinen ja moderni työpöytäkäyttöliittymä, reaaliaikaisella QtCharts-datavisualisoinnilla.</li>
                <li><strong>Python & Fysiikkasimulaatio:</strong> Taustajärjestelmä, joka simuloi moottorin kuormitusta, lämpökäyttäytymistä ja hydrauliikkaa kohinasuodatuksella.</li>
                <li><strong>UDP-verkkoliikenne:</strong> Alhaisen latenssin kaksisuuntainen JSON-tiedonsiirto simulaattorin ja ohjauspaneelin välillä.</li>
                <li><strong>Dynaaminen lokalisointi:</strong> Täysi monikielisyystuki lennosta vaihdettavilla kielillä (FI, EN, DE, SV) toteutettuna Qt Linguistilla.</li>
                <li><strong>AI-Valmius (RAG):</strong> Arkkitehtuuri on suunniteltu laajennettavaksi älykkäällä AI-diagnostiikalla, joka hyödyntää laitteen telemetriadataa.</li>
              </ul>
            </div>

            <div>
              <div className='flex flex-wrap gap-2 mb-6'>
                {["C++", "QML (Qt 6)", "Python simulaatio", "IoT", "AI", "UDP", "Dynaaminen lokalisointi"].map((tag, index) => (
                  <span key={index} className="text-lg font-mono bg-slate-900 text-emerald-400 px-2.5 py-1 rounded border border-emerald-500/10">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 text-lg font-medium border-t border-gray-800/60 pt-4">
                <a href="https://github.com/Kassu3/heavy-industrial-hmi" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-cyan-400 flex items-center gap-1 transition-colors">
                  Koodi GitHubissa ↗
                </a>
              </div>
            </div>
          </div>

          {/* KORTTI 3: SEURAAVA PROJEKTI (Odottaa uutta koodia) */}
          <div className='bg-[#111827] border border-gray-800 rounded-xl p-6 flex flex-col justify-between hover:border-cyan-500/40 transition-all duration-300 group'>
            <div>
              <div className='aspect-video bg-slate-950 rounded-lg mb-5 flex items-center justify-center border border-gray-800 group-hover:border-cyan-700 transition-colors overflow-hidden'>
                <img
                  src={fanshowcase} alt="Mobiilisovelluksen näyttökuvat viuhkassa."
                />

              </div>

              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                Mobiili IoT-Ohjaus & Wi-Fi Etäohjaussovellus
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed mb-4">
                Ensimmäinen konkreettinen IoT-projektini, joka sai kipinän kotoa löytyneestä laitteesta ja sytytti kiinnostukseni sulautettuihin järjestelmiin. Toteutin cross-platform-mobiilisovelluksen, jolla hallitaan paikallisessa Wi-Fi-verkossa kommunikoivaa IoT-ilmalämpöpumppua (kuten ESP32-mikrokontrolleri) reaaliaikaisesti.
              </p>
              <h4 className='text-white text-lg font-bold mt-2 mb-1'>Avainominaisuudet & Teknologiat:</h4>
              <ul className='list-disc text-lg pl-5 flex flex-col gap-1 text-gray-400'>
                <li><strong>Suora Wi-Fi-yhteys (Local-IoT):</strong> Sovellus skannaa ja muodostaa suoran TCP/UDP- tai HTTP-yhteyden laitteeseen ilman ulkoista palvelinta.</li>
                <li><strong>Kaksisuuntainen ohjaus:</strong> Käyttäjä voi reaaliajassa seurata laitteen anturidataa sekä lähettää mobiililaitteesta ohjauskomentoja laitteelle (esim. lämpötilan säätö, puhalluksen voimakkuus tai tilatiedon muuttaminen).</li>
                <li><strong>Älykkäät push-ilmoitukset:</strong> Järjestelmä seuraa ja muistuttaa käyttäjää (esim. varoitusääni tai ilmoitus), jos laitteen suodattimia ei ole puhdistettu kuukauteen tai anturi on rikki.</li>
                <li><strong>Teknologiat:</strong> Flutter, Dart, Wi-Fi Sockets (TCP/UDP), HTTP-rajapinnat, ESP32, PlatformIO, IoT-protokolla,</li>
              </ul>
            </div>

            <div>
              <div className='flex flex-wrap text-lg gap-2 mb-6'>
                {["Flutter", "Wi-Fi", "AI", "IoT", "ESP32", "C++", "PlatformIO"].map((tag, index) => (
                  <span key={index} className="text-xs font-mono bg-slate-900 text-emerald-400 px-2.5 py-1 rounded border border-emerald-500/10">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 text-lg font-medium border-t border-gray-800/60 pt-4">
                <a href="https://github.com/Kassu3/air_heat_pump" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-cyan-400 flex items-center gap-1 transition-colors">
                  Koodi GitHubissa ↗
                </a>
              </div>
            </div>
          </div>

          {/* KORTTI 4: SEURAAVA PROJEKTI (Odottaa uutta koodia) */}
          <div className='bg-[#111827] border border-gray-800 rounded-xl p-6 flex flex-col justify-between hover:border-cyan-500/40 transition-all duration-300 group'>
            <div>
              <div className='aspect-video bg-slate-950 rounded-lg mb-5 flex items-center justify-center border border-gray-800 group-hover:border-cyan-700 transition-colors overflow-hidden'>
                <video
                  className="w-full h-full object-cover"
                  controls
                  preload="metadata"
                >
                  <source src={aiagentVideo} type="video/mp4" />
                  Selaimesi ei tue videotunnistetta.
                </video>
              </div>

              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                Älykäs AI-Diagnostiikkakeskus & RAG-vianmääritys
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed mb-4">
                Projektia laajennettiin integroimalla siihen älykäs diagnostiikkajärjestelmä, joka on toteutettu <strong>Pythonilla, Streamlitillä ja Ollama-rajapinnalla</strong>.
              </p>
              <h4 className='text-white text-lg font-bold mt-2 mb-1'>Avainominaisuudet & Teknologiat:</h4>
              <ul className='list-disc text-lg pl-5 flex flex-col gap-1 text-gray-400'>
                <li><strong>Reaaliaikainen RAG (Retrieval-Augmented Generation):</strong> Järjestelmä syöttää simulaattorin telemetriadatan (RPM, lämpötilat, paineet) suoraan paikalliselle tekoälymallille (<strong>Gemma 2 / Phi-3</strong>) ja vertaa sitä laitteen digitaaliseen huolto-oppaaseen.</li>
                <li><strong>Konetason ongelmanratkaisu:</strong> Tekoäly ei pelkästään keskustele, vaan se analysoi lennosta kriittiset tilat (kuten moottorin ylikuumenemisen tai hydrauliikan ylipaineen) ja antaa operaattorille välittömät, oppaan mukaiset toimintaohjeet ja nollauskoodit.</li>
                <li><strong>Säieturvallinen arkkitehtuuri:</strong> Käyttöliittymä hyödyntää Streamlit-fragmentteja ja asynkronista UDP-puskurin hallintaa, mikä mahdollistaa mittareiden jatkuvan, viiveettömän päivittymisen taustalla samalla kun tekoäly striimaa vastaustaan ruudulle.</li>
              </ul>

            </div>

            <div>
              <div className='flex flex-wrap text-lg gap-2 mb-6'>
                {["Python", "Gemma 2 / Phi-3", "AI", "Streamlit", "Ollama-rajapinta"].map((tag, index) => (
                  <span key={index} className="text-lg font-mono bg-slate-900 text-emerald-400 px-2.5 py-1 rounded border border-emerald-500/10">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 text-lg font-medium border-t border-gray-800/60 pt-4">
                <a href="https://github.com/Kassu3/maintenance_ai" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-cyan-400 flex items-center gap-1 transition-colors">
                  Koodi GitHubissa ↗
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* FOOTER / YHTEYSTIEDOT */}
      <footer id="contact" className="max-w-7xl mx-auto px-6 py-12 border-t border-gray-800 text-center text-lg text-gray-500">
        <p className="mb-2">Haluatko verkostoitua tai keskustella projekteista?</p>
        <p className="text-gray-400">Sähköposti • <a href="mailto:kaiza33333@gmail.com" target="_blank" rel="noreferrer" className="text-cyan-400 hover:underline">kaiza33333@gmail.com</a></p>
        <p className='text-gray-500 text-sm mt-8'>
          © {new Date().getFullYear()} Kaisa. Kaikki oikeudet pidätetään.
        </p>
      </footer>

    </div>
  );
}

export default App;