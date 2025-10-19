"use client";
import React, { useEffect, useState } from "react";
import { FileText, Download } from "lucide-react";

export default function RegulaminPage() {
  const sections = [
    { id: "postanowienia-ogolne", title: "Postanowienia ogólne" },
    { id: "definicje", title: "Definicje pojęć" },
    { id: "zasady-korzystania", title: "Zasady korzystania z usług" },
    { id: "przyjmowanie-sprzetu", title: "Przyjmowanie sprzętu" },
    { id: "ceny-platnosci", title: "Ceny i płatności" },
    { id: "terminy-realizacji", title: "Terminy realizacji" },
    { id: "odbior-sprzetu", title: "Odbiór sprzętu" },
    { id: "reklamacje", title: "Reklamacje" },
    { id: "odpowiedzialnosc", title: "Odpowiedzialność serwisu" },
    { id: "sila-wyzsza", title: "Siła wyższa" },
    { id: "postanowienia-konczace", title: "Postanowienia końcowe" },
  ];

  // simple scroll spy to highlight active section in TOC
  const [activeId, setActiveId] = useState<string | null>(sections[0]!.id);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        setActiveId(visible?.target.id ?? sections[0]!.id);
      },
      { root: null, rootMargin: "-20% 0px -40% 0px", threshold: [0, 0.1, 0.5, 1] }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-950 via-purple-950/20 to-slate-950 overflow-hidden text-white">
      {/* animated blobs (kept identical look) */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-700 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
      <div className="absolute top-0 -right-4 w-72 h-72 bg-violet-700 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-700 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-3">Regulamin Serwisu LuzeN</h1>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Poniżej znajdziesz pełny regulamin serwisu. Struktura jest czytelna — użyj spisu treści po lewej (na dużych ekranach) lub przewiń do interesującej sekcji.
          </p>
          <div className="mt-4 flex justify-center gap-3">
            <a
              href="/regulamin.pdf"
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/6 rounded-lg hover:bg-white/10 transition"
            >
              <FileText className="w-4 h-4" /> Pobierz PDF
            </a>
            <a
              href="#postanowienia-ogolne"
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/6 rounded-lg hover:bg-white/10 transition"
            >
              Przejdź do treści
            </a>
          </div>
        </div>

        {/* Two-column layout: TOC (sticky) + Content */}
        <div className="grid md:grid-cols-4 gap-8">
          {/* TOC - left column, sticky on md+ */}
          <aside className="md:col-span-1">
            <div className="hidden md:block sticky top-28">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 shadow-lg">
                <h3 className="text-lg font-semibold text-white mb-3">Spis treści</h3>
                <nav className="flex flex-col gap-2 text-gray-300">
                  {sections.map((s) => (
                    <a
                      key={s.id}
                      href={`#${s.id}`}
                      className={`block px-3 py-2 rounded-md hover:bg-white/10 transition-colors ${
                        activeId === s.id ? "bg-white/10 text-white font-medium" : ""
                      }`}
                    >
                      {s.title}
                    </a>
                  ))}
                </nav>
                <p className="text-xs text-gray-400 mt-4">
                  Zmiany regulaminu publikujemy na stronie — aktualizacje wchodzą w życie nie wcześniej niż po 7 dniach od publikacji.
                </p>
              </div>
            </div>

            {/* mobile simplified toc */}
            <div className="md:hidden bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10 shadow-lg mb-4">
              <h3 className="text-base font-semibold text-white mb-2">Spis treści</h3>
              <div className="flex flex-wrap gap-2">
                {sections.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="text-sm px-3 py-1 bg-white/6 rounded-md hover:bg-white/10"
                  >
                    {s.title}
                  </a>
                ))}
              </div>
            </div>
          </aside>

          {/* Content area */}
          <main className="md:col-span-3 space-y-8">
            {/* §1 */}
            <section id="postanowienia-ogolne" className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 shadow-inner">
              <h2 className="text-2xl font-bold text-white border-b border-white/20 pb-2 mb-4">§1. Postanowienia ogólne</h2>

              <h4 className="text-lg font-semibold text-white mb-2">1. Zakres działalności Serwisu</h4>
              <p className="text-gray-300 mb-2">
                Serwis komputerowy <strong>LuzeN</strong> świadczy profesjonalne usługi w zakresie:
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-1 mb-4">
                <li>naprawy sprzętu komputerowego, w tym komputerów stacjonarnych, laptopów, serwerów i urządzeń peryferyjnych;</li>
                <li>konserwacji sprzętu, obejmującej czyszczenie, diagnostykę prewencyjną, wymianę podzespołów i modernizację;</li>
                <li>diagnostyki oprogramowania i sprzętu w celu identyfikacji usterek oraz optymalizacji działania systemów;</li>
                <li>instalacji, konfiguracji i utrzymania oprogramowania oraz systemów operacyjnych;</li>
                <li>projektowania, konfiguracji i serwisowania sieci komputerowych (LAN, WAN, Wi-Fi) oraz urządzeń peryferyjnych;</li>
                <li>odzyskiwania danych z nośników pamięci, zarówno przy awariach logicznych, jak i fizycznych;</li>
                <li>doradztwa technicznego, w tym rekomendacji dotyczących zakupu sprzętu, optymalizacji systemów oraz bezpieczeństwa danych.</li>
              </ul>

              <h4 className="text-lg font-semibold text-white mb-2">2. Akceptacja regulaminu</h4>
              <p className="text-gray-300 mb-3">
                Korzystanie z usług Serwisu oznacza pełną akceptację niniejszego regulaminu. Klient zobowiązuje się do przestrzegania wszystkich jego postanowień, w tym procedur przyjmowania sprzętu, płatności, terminów realizacji oraz zasad odpowiedzialności za powierzony sprzęt.
              </p>

              <h4 className="text-lg font-semibold text-white mb-2">3. Zmiany regulaminu</h4>
              <p className="text-gray-300">
                Serwis zastrzega sobie prawo do wprowadzania zmian w regulaminie w dowolnym czasie. O każdej zmianie Klienci zostaną poinformowani poprzez aktualizację dokumentu w siedzibie Serwisu oraz na stronie internetowej <span className="underline">www.luzen.pl/regulamin</span>. Zmiany wchodzą w życie w terminie wskazanym przez Serwis, nie krótszym niż 7 dni od publikacji.
              </p>
            </section>

            {/* §2 */}
            <section id="definicje" className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 shadow-inner">
              <h2 className="text-2xl font-bold text-white border-b border-white/20 pb-2 mb-4">§2. Definicje pojęć</h2>

              <p className="text-gray-300 mb-3">Aby zapewnić pełną przejrzystość i jednoznaczność postanowień regulaminu, poniżej przedstawione są podstawowe definicje używane w dokumencie:</p>

              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li><strong>Klient:</strong> Osoba fizyczna, osoba prawna lub jednostka organizacyjna nieposiadająca osobowości prawnej, która korzysta z usług Serwisu lub przekazuje Serwisowi Sprzęt w celu wykonania Usługi. Klient jest zobowiązany do przekazania prawdziwych danych kontaktowych, udzielenia informacji o istotnych okolicznościach dotyczących Sprzętu oraz dostarczenia Sprzętu w stanie umożliwiającym przeprowadzenie diagnozy lub naprawy.</li>
                <li><strong>Usługa:</strong> Każda czynność wykonywana przez Serwis na rzecz Klienta: diagnoza, naprawa, konserwacja, instalacja i konfiguracja oprogramowania oraz systemów, projektowanie i utrzymanie sieci, odzyskiwanie danych oraz doradztwo techniczne. Usługą może być również wykonanie kosztorysu i wydanie opinii technicznej.</li>
                <li><strong>Sprzęt:</strong> Wszelkie urządzenia, nośniki danych, elementy systemu komputerowego oraz oprogramowanie przekazane Serwisowi przez Klienta w celu wykonania Usługi (komputery, laptopy, serwery, dyski, SSD, pendrive’y, karty pamięci, drukarki, monitory, routery i switche oraz zainstalowane na nich programy).</li>
                <li><strong>Nośnik danych:</strong> Urządzenie lub element Sprzętu służący do przechowywania danych (np. HDD, SSD, pendrive, karta pamięci).</li>
                <li><strong>Części zamienne / materiały:</strong> Podzespoły i materiały używane przez Serwis do wykonania Usługi. Części wymontowane ze Sprzętu Klienta stają się własnością Serwisu tylko wtedy, gdy strony tak ustalą lub gdy taki zapis znajduje się w odrębnym porozumieniu; w przeciwnym razie zostają zwrócone Klientowi.</li>
                <li><strong>Dokumentacja usług:</strong> Wszelkie dokumenty sporządzane lub wydawane przez Serwis w związku z wykonywaną Usługą: formularz przyjęcia Sprzętu, protokół przyjęcia, kosztorys, zlecenie naprawy, protokół naprawy, faktura/rachunek, potwierdzenia wykonania prac, protokół przekazania/odbioru.</li>
                <li><strong>Kosztorys / oferta:</strong> Pisane lub elektroniczne zestawienie przewidywanych czynności i kosztów sporządzone przez Serwis na żądanie Klienta lub po przeprowadzeniu diagnozy. Kosztorys może wymagać akceptacji Klienta przed przystąpieniem do prac; jego ważność i warunki są określone w dokumencie.</li>
                <li><strong>Dane osobowe:</strong> Dane osobowe Klienta przekazywane Serwisowi w związku z realizacją Usługi (np. imię i nazwisko, adres, NIP, numer telefonu, adres e-mail). Przetwarzanie danych osobowych odbywa się zgodnie z odrębnymi przepisami oraz polityką prywatności Serwisu.</li>
                <li><strong>Dane dostępowe / hasła:</strong> Hasła, klucze szyfrujące, loginy i inne dane umożliwiające dostęp do systemów, kont i zasobów Klienta. Klient jest zobowiązany udostępnić Serwisowi tylko te dane, które są niezbędne do wykonania Usługi; Serwis nie odpowiada za skutki niepodania danych uniemożliwiających wykonanie prac.</li>
                <li><strong>Gwarancja / rękojmia:</strong> Zakres i warunki odpowiedzialności Serwisu za wykonaną Usługę określone oddzielnie w dokumencie gwarancyjnym lub paragonie/fakturze.</li>
                <li><strong>Reklamacja:</strong> Zgłoszenie Klienta dotyczące niewłaściwego wykonania Usługi, stwierdzonej wady lub niezgodności z umową. Reklamacja powinna być złożona w formie i terminie wskazanym w §8 niniejszego Regulaminu.</li>
                <li><strong>Strony:</strong> Serwis – podmiot LuzeN; Klient – podmiot korzystający z Usług Serwisu.</li>
                <li><strong>Formularz przyjęcia sprzętu / Dowód przyjęcia:</strong> Dokument papierowy lub elektroniczny wypełniany przy przyjęciu sprzętu zawierający dane Klienta, opis sprzętu, widoczne uszkodzenia, rodzaj usługi, numer zlecenia, informacje o kosztach diagnozy, klauzulę RODO oraz oświadczenia klienta (np. akceptacja warunków, zgoda na demontaż). Dowód przyjęcia jest warunkiem wydania sprzętu.</li>
                <li><strong>Protokół wydania / odbioru sprzętu:</strong> Dokument potwierdzający zakończenie prac i odbiór sprzętu przez Klienta.</li>
                <li><strong>Karta gwarancyjna:</strong> Dokument określający warunki gwarancji na wykonaną usługę i/lub montowane części: okres gwarancji, zakres, warunki wyłączenia oraz sposób zgłaszania reklamacji.</li>
                <li><strong>Upoważnienie do odbioru:</strong> Pisemne lub elektroniczne pełnomocnictwo udzielone przez Klienta osobie trzeciej uprawniające do odbioru naprawionego sprzętu.</li>
                <li><strong>Diagnostyka:</strong> Czynności wykonywane w celu ustalenia przyczyny usterki — obejmuje testy sprzętowe i programowe.</li>
                <li><strong>Czas realizacji / Termin realizacji:</strong> Okres od daty przyjęcia sprzętu (lub od daty potwierdzonej akceptacji kosztorysu) do daty zakończenia prac i poinformowania Klienta o możliwości odbioru.</li>
                <li><strong>Opłata magazynowa / Przechowywanie:</strong> Opłata naliczana przez Serwis za przechowywanie nieodebranego urządzenia po uprzednim poinformowaniu Klienta; wysokość opłaty i terminy określone są w §7 regulaminu.</li>
                <li><strong>Prace dodatkowe / Zakres rozszerzony:</strong> Prace wykraczające poza zatwierdzony kosztorys wymagają uprzedniej akceptacji Klienta, chyba że spełniony jest warunek dotyczący prac drobnych określony w regulaminie.</li>
              </ul>
            </section>

            {/* §3 */}
            <section id="zasady-korzystania" className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 shadow-inner">
              <h2 className="text-2xl font-bold text-white border-b border-white/20 pb-2 mb-4">§3. Zasady korzystania z usług</h2>

              <ol className="list-decimal pl-6 text-gray-300 space-y-2">
                <li>Klient zobowiązany jest do dostarczenia sprzętu w stanie umożliwiającym jego naprawę lub diagnozę.</li>
                <li>Klient zobowiązany jest do przekazania wszelkich informacji istotnych dla wykonania usługi.</li>
                <li>Serwis nie odpowiada za dane przechowywane na sprzęcie – zaleca się wykonanie kopii zapasowej przed przekazaniem sprzętu do serwisu.</li>
                <li>
                  <strong>Hasła i dane dostępowe:</strong>
                  <ul className="list-disc pl-5 mt-2 text-gray-300">
                    <li>Klient powinien, o ile to możliwe, przekazać Serwisowi niezbędne dane dostępowe (loginy, hasła) lub tymczasowo je usunąć przed przekazaniem sprzętu.</li>
                    <li>Jeśli Klient nie udostępni danych pozwalających na odtworzenie funkcji urządzenia, Serwis wykona jedynie czynności możliwe bez dostępu; Serwis nie ponosi odpowiedzialności za skutki braku dostępu.</li>
                    <li>Serwis nie żąda od klienta stałych haseł poza sytuacjami niezbędnymi do wykonania usługi; Klient może zażądać zmiany haseł po zakończeniu prac.</li>
                    <li>W przypadku sprzętów zaszyfrowanych (BitLocker, FileVault, itp.) Klient zobowiązany jest dostarczyć klucz/hasło odszyfrowujące lub zrozumieć, że brak dostępu może uniemożliwić wykonanie usługi.</li>
                  </ul>
                </li>
                <li>
                  <strong>Demontaż, dokumentacja stanu i części:</strong>
                  <ul className="list-disc pl-5 mt-2 text-gray-300">
                    <li>Serwis ma prawo do demontażu urządzenia w zakresie niezbędnym do przeprowadzenia diagnozy i naprawy.</li>
                    <li>Przy przyjęciu sprzętu Serwis dokumentuje stan zewnętrzny urządzenia (opis i/lub zdjęcia). W przypadku stwierdzenia widocznych uszkodzeń Serwis informuje Klienta przed rozpoczęciem prac.</li>
                    <li>Wymontowane podzespoły są dokumentowane (opis, ilość, numer seryjny, jeśli dotyczy). Części wymontowane ze sprzętu Klienta są zwracane Klientowi, chyba że strony uzgodnią inaczej lub Klient zleci ich utylizację; Serwis może doliczyć opłatę za magazynowanie/utylizację.</li>
                  </ul>
                </li>
                <li>
                  <strong>Akceptacja wyceny i rozpoczęcie prac:</strong>
                  <ul className="list-disc pl-5 mt-2 text-gray-300">
                    <li>Po wykonaniu diagnozy Serwis przesyła Klientowi kosztorys (SMS / e-mail / komunikator). Kosztorys zawiera proponowany zakres prac, przewidywany termin i koszt części oraz koszt robocizny.</li>
                    <li>Realizacja prac następuje wyłącznie po jednoznacznej akceptacji Klienta: podpisanej zgody na formularzu, podpisanego PDF, potwierdzenia SMS/e-mail lub innej trwałej formy komunikacji. Akceptacja ustna odnotowana przez Serwis jest dopuszczalna tylko w wyjątkowych przypadkach i powinna być potwierdzona pisemnie.</li>
                    <li>Klient może upoważnić osobę trzecią do akceptacji kosztorysu; Serwis nie odpowiada za wadliwe upoważnienie.</li>
                    <li>Jeżeli klient nie odpowie na przesłany kosztorys w ciągu 7 dni roboczych, Serwis może: a) wykonać jedynie czynności niezbędne do zabezpieczenia sprzętu i rozliczyć koszt diagnozy, albo b) anulować zlecenie zgodnie z §3.10.</li>
                  </ul>
                </li>
                <li>
                  <strong>Prace drobne bez odrębnej zgody:</strong>
                  <p className="text-gray-300">Serwis może wykonać prace niewymagające odrębnej akceptacji Klienta do wysokości 200 zł netto (np. drobna naprawa, wymiana bezpiecznika), jeśli są konieczne do przywrócenia funkcji sprzętu i opóźnienie wiązałoby się z dodatkowymi szkodami. Prace powyżej tej kwoty wymagają akceptacji.</p>
                </li>
                <li>
                  <strong>Części zamienne i części dostarczone przez Klienta:</strong>
                  <p className="text-gray-300">Serwis stosuje części nowe, regenerowane lub używane tylko za zgodą Klienta. Ceny oraz rodzaj części muszą być ujęte w kosztorysie. Jeśli Klient dostarcza własne części, Serwis montuje je na wyłączną odpowiedzialność Klienta; Serwis nie ponosi odpowiedzialności za wady części dostarczonych przez Klienta, chyba że usługa montażu jest przyczyną szkody.</p>
                </li>
                <li>
                  <strong>Ochrona danych osobowych i kopie zapasowe:</strong>
                  <p className="text-gray-300">Serwis nie gwarantuje przywrócenia utraconych danych, chyba że Klient zamówił i opłacił usługę odzyskiwania danych. Koszt i sukces odzyskania danych zależą od rodzaju uszkodzenia i są wyceniane oddzielnie. Serwis może wykonywać kopie zapasowe niezbędne do wykonania usługi – wykonanie kopii nie jest równoznaczne z usługą pełnego odzyskiwania danych.</p>
                  <p className="text-gray-300">Dane osobowe przetwarzane są zgodnie z polityką prywatności Serwisu dostępną na stronie <span className="underline">www.luzen.pl/polityka-prywatnosci</span> oraz w formie papierowej w siedzibie Serwisu. Dane przechowywane są jedynie przez okres niezbędny do realizacji usług i przechowywania dokumentów księgowych (nie krócej niż okres wynikający z przepisów podatkowych i rachunkowych). Klient ma prawo do informacji i żądania usunięcia danych w zakresie przewidzianym prawem.</p>
                </li>
                <li>
                  <strong>Opłata za diagnozę i anulowanie zlecenia:</strong>
                  <p className="text-gray-300">Koszt diagnozy wynosi 80 zł netto (lub inna kwota wskazana w cenniku). Koszt diagnozy jest pobierany, jeżeli Klient rezygnuje z naprawy po wykonaniu diagnozy. W przypadku wykonania dalszych prac koszt diagnozy jest doliczany do końcowej kwoty naprawy. W przypadku anulowania zlecenia przez Klienta po rozpoczęciu naprawy Serwis ma prawo żądać zapłaty za wykonaną pracę i poniesione koszty części.</p>
                </li>
              </ol>
            </section>

            {/* §4 */}
            <section id="przyjmowanie-sprzetu" className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 shadow-inner">
              <h2 className="text-2xl font-bold text-white border-b border-white/20 pb-2 mb-4">§4. Przyjmowanie sprzętu do serwisu</h2>

              <ol className="list-decimal pl-6 text-gray-300 space-y-2">
                <li>Sprzęt przyjmowany jest po wypełnieniu formularza przyjęcia sprzętu zawierającego dane Klienta i opis usterki. Formularz zawiera również klauzulę RODO i informację o kosztach diagnozy.</li>
                <li>Serwis może odmówić przyjęcia sprzętu, jeżeli jego stan uniemożliwia bezpieczne wykonanie usługi lub istnieją przesłanki wskazujące na działalność przestępczą (np. żądanie odblokowania skradzionego urządzenia) — wówczas Serwis powiadomi właściwe organy.</li>
                <li>Przy przyjęciu sprzętu Klient otrzymuje dowód przyjęcia (papierowy lub elektroniczny), który jest niezbędny do wydania sprzętu po naprawie. Dokument zawiera numer zlecenia i orientacyjną wycenę.</li>
                <li>Serwis może wykonać zdjęcia sprzętu przy przyjęciu celem udokumentowania stanu zewnętrznego; zdjęcia te są archiwizowane wraz z dokumentacją zlecenia.</li>
              </ol>
            </section>

            {/* §5 */}
            <section id="ceny-platnosci" className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 shadow-inner">
              <h2 className="text-2xl font-bold text-white border-b border-white/20 pb-2 mb-4">§5. Ceny i płatności</h2>

              <ol className="list-decimal pl-6 text-gray-300 space-y-2">
                <li>Cennik usług dostępny jest w siedzibie Serwisu oraz na stronie internetowej <span className="underline">www.luzen.pl/cennik</span>. Cennik ma charakter informacyjny; ostateczny koszt jest podawany w kosztorysie po diagnozie.</li>
                <li>Koszt usługi ustalany jest po diagnozie sprzętu lub według z góry określonego cennika. W koszcie mogą być uwzględnione części, robocizna oraz koszty dodatkowe (wysyłka, materiały).</li>
                <li>
                  <strong>Warunki płatności:</strong>
                  <ul className="list-disc pl-5 mt-2 text-gray-300">
                    <li>Termin płatności faktury: do 7 dni od daty wystawienia (chyba że faktura wskazuje inny termin).</li>
                    <li>Forma płatności: gotówka, przelew bankowy, karta płatnicza, BLIK.</li>
                    <li>Przy naprawach o wartości przekraczającej 500 zł netto Serwis może żądać przedpłaty w wysokości 30% wartości kosztorysu (zaliczka).</li>
                    <li>W przypadku opóźnienia w płatności Serwis nalicza odsetki ustawowe za opóźnienie oraz może wstrzymać wydanie sprzętu do czasu zapłaty.</li>
                  </ul>
                </li>
                <li>Koszt części zamiennych nie jest wliczony w cenę usługi, o ile nie wskazano inaczej w kosztorysie.</li>
              </ol>
            </section>

            {/* §6 */}
            <section id="terminy-realizacji" className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 shadow-inner">
              <h2 className="text-2xl font-bold text-white border-b border-white/20 pb-2 mb-4">§6. Terminy realizacji</h2>

              <ol className="list-decimal pl-6 text-gray-300 space-y-2">
                <li>Standardowy czas realizacji usług wynosi 7 dni roboczych od daty przyjęcia sprzętu, chyba że w kosztorysie wskazano inaczej.</li>
                <li>W przypadku konieczności sprowadzenia części lub wystąpienia okoliczności niezależnych od Serwisu (dostawy, opóźnienia producenta), Serwis poinformuje Klienta o przewidywanym czasie realizacji i uzgodni nowy termin.</li>
                <li>W uzasadnionych przypadkach (np. części na zamówienie, złożone naprawy) termin realizacji może być wydłużony; Serwis na bieżąco informuje Klienta o statusie zlecenia.</li>
              </ol>
            </section>

            {/* §7 */}
            <section id="odbior-sprzetu" className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 shadow-inner">
              <h2 className="text-2xl font-bold text-white border-b border-white/20 pb-2 mb-4">§7. Odbiór sprzętu</h2>

              <ol className="list-decimal pl-6 text-gray-300 space-y-2">
                <li>Odbiór sprzętu możliwy jest po okazaniu dowodu przyjęcia sprzętu i uregulowaniu należności wobec Serwisu (chyba że strony postanowią inaczej).</li>
                <li>W przypadku nieodebrania sprzętu w terminie 30 dni od poinformowania Klienta o zakończeniu prac, Serwis zastrzega sobie prawo do naliczenia opłaty magazynowej w wysokości 10 zł netto za każdy rozpoczęty tydzień przechowywania.</li>
                <li>Jeżeli sprzęt nie zostanie odebrany w terminie 90 dni od powiadomienia Klienta, Serwis może wezwać Klienta do odbioru na piśmie (e-mail lub list polecony). Po bezskutecznym wezwaniu Serwis może, po upływie dodatkowego terminu 30 dni, rozporządzić sprzętem w celu pokrycia należności (sprzedaż, utylizacja) zgodnie z obowiązującymi przepisami; z kwoty uzyskanej ze sprzedaży zostanie pokryta należność Serwisu, koszty wezwania i przechowania, a ewentualna nadwyżka zostanie zwrócona Klientowi (jeśli znany).</li>
              </ol>
            </section>

            {/* §8 */}
            <section id="reklamacje" className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 shadow-inner">
              <h2 className="text-2xl font-bold text-white border-b border-white/20 pb-2 mb-4">§8. Reklamacje</h2>

              <ol className="list-decimal pl-6 text-gray-300 space-y-2">
                <li>Klient może zgłosić reklamację dotyczącą wykonanej usługi w przypadku niewłaściwego wykonania, stwierdzenia wady lub niezgodności z kosztorysem.</li>
                <li>Reklamacja powinna być zgłoszona pisemnie lub e-mailowo w ciągu 7 dni kalendarzowych od daty odbioru sprzętu; reklamacje zgłoszone później będą rozpatrywane, ale Serwis może ograniczyć odpowiedzialność.</li>
                <li>Reklamacje rozpatrywane są w terminie 14 dni roboczych od daty ich zgłoszenia; Serwis może poprosić o dostarczenie sprzętu celem ponownej weryfikacji.</li>
                <li>W przypadku uznania racji Klienta Serwis niezwłocznie usunie wadę bezpłatnie lub zwróci równowartość części kosztu naprawy – zgodnie z wyborem Serwisu lub Klienta, chyba że strony uzgodnią inaczej.</li>
                <li>Reklamacje nie obejmują szkód powstałych w wyniku: niewłaściwego użytkowania, dalszych ingerencji osób trzecich po naprawie, działania siły wyższej, wad dostarczonych przez Klienta części.</li>
              </ol>
            </section>

            {/* §9 */}
            <section id="odpowiedzialnosc" className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 shadow-inner">
              <h2 className="text-2xl font-bold text-white border-b border-white/20 pb-2 mb-4">§9. Odpowiedzialność serwisu</h2>

              <ol className="list-decimal pl-6 text-gray-300 space-y-2">
                <li>Serwis odpowiada za prawidłowe wykonanie zleconych usług zgodnie z kosztorysem i zasadami sztuki.</li>
                <li>Serwis nie ponosi odpowiedzialności za:
                  <ul className="list-disc pl-5 mt-2 text-gray-300">
                    <li>utrata lub uszkodzenie danych przechowywanych na nośnikach, chyba że klient zlecił i opłacił usługę odzyskiwania danych;</li>
                    <li>uszkodzenia wynikłe z wad fabrycznych sprzętu lub wcześniejszych napraw wykonanych przez osoby trzecie;</li>
                    <li>szkody pośrednie, utratę zysków lub korzyści;</li>
                    <li>wady części dostarczonych przez Klienta.</li>
                  </ul>
                </li>
                <li>Maksymalna łączna odpowiedzialność Serwisu z tytułu jednego zdarzenia nie może przekroczyć wartości netto wykonanej usługi lub ceny rynkowej sprzętu (która z tych wartości jest niższa), z wyłączeniem szkód wynikających z umyślnego działania Serwisu.</li>
                <li>Gwarancja na wykonaną usługę udzielana jest w okresie określonym w karcie gwarancyjnej (standardowo 3 miesiące) i obejmuje wyłącznie zakres dokonanej naprawy oraz części zamienne zamontowane przez Serwis. Gwarancja nie obejmuje przyczyn wynikających z wcześniejszych uszkodzeń ani działań Klienta bądź osób trzecich.</li>
              </ol>
            </section>

            {/* §10 */}
            <section id="sila-wyzsza" className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 shadow-inner">
              <h2 className="text-2xl font-bold text-white border-b border-white/20 pb-2 mb-4">§10. Siła wyższa</h2>

              <ol className="list-decimal pl-6 text-gray-300 space-y-2">
                <li>Za zdarzenia siły wyższej uważa się wszelkie zdarzenia niezależne od Serwisu, których nie można było przewidzieć ani im zapobiec, w tym w szczególności: katastrofy naturalne (powodzie, pożary, trzęsienia ziemi), strajki, zamieszki, konflikty zbrojne, embargo, awarie infrastruktury, przerwy w dostawach energii lub internetu, decyzje organów państwowych ograniczające działalność Serwisu.</li>
                <li>W przypadku wystąpienia zdarzenia siły wyższej Serwis ma prawo do odpowiedniego wydłużenia terminów realizacji usług, zmiany kosztorysu lub wstrzymania prac do czasu ustania przyczyny zdarzenia.</li>
                <li>Serwis nie ponosi odpowiedzialności za opóźnienia lub szkody wynikające z wystąpienia siły wyższej.</li>
              </ol>
            </section>

            {/* §11 */}
            <section id="postanowienia-konczace" className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 shadow-inner">
              <h2 className="text-2xl font-bold text-white border-b border-white/20 pb-2 mb-4">§11. Postanowienia końcowe</h2>

              <ol className="list-decimal pl-6 text-gray-300 space-y-2">
                <li>W sprawach nieuregulowanych niniejszym regulaminem mają zastosowanie przepisy Kodeksu cywilnego oraz inne obowiązujące przepisy prawa.</li>
                <li>Ewentualne spory wynikłe z usług Serwisu będą rozstrzygane przez sąd powszechny właściwy dla siedziby Serwisu.</li>
                <li>Regulamin został sporządzony w celu zapewnienia przejrzystości i bezpieczeństwa współpracy między Klientem a Serwisem.</li>
                <li>Regulamin obowiązuje od dnia <strong>20 listopada 2025 r.</strong> i pozostaje w mocy do odwołania.</li>
                <li>Niniejszy regulamin jest dostępny dla Klientów w formie elektronicznej na stronie <span className="underline">www.luzen.pl/regulamin</span> oraz w wersji papierowej w siedzibie Serwisu; Klient potwierdza zapoznanie się z regulaminem przy przyjęciu sprzętu.</li>
                <li>Klient, przekazując sprzęt do naprawy lub zlecając usługę, oświadcza, że zapoznał się z treścią regulaminu i akceptuje jego postanowienia.</li>
                <li>Serwis zastrzega sobie prawo do zmiany regulaminu z zachowaniem co najmniej 7-dniowego okresu vacatio legis od daty publikacji zmian.</li>
              </ol>
            </section>

            {/* PDF viewer */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Pełny regulamin (PDF)</h3>
                <a
                  href="/regulamin.pdf"
                  download
                  className="inline-flex items-center gap-2 px-3 py-2 bg-white/6 rounded-lg hover:bg-white/10"
                >
                  <Download className="w-4 h-4" /> Pobierz PDF
                </a>
              </div>
              <div className="rounded-xl overflow-hidden border border-white/6">
                <iframe
                  src="/regulamin.pdf"
                  title="Regulamin PDF"
                  className="w-full h-[560px] border-0"
                />
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
