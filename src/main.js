// Interaktivitas Website Dope IT Solution

document.addEventListener('DOMContentLoaded', () => {
  // 1. Navbar Sticky & Shadow saat Scroll
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      navbar.classList.add('navbar-scrolled');
    } else {
      navbar.classList.remove('navbar-scrolled');
    }
  });

  // 2. Mobile Navigation Toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      mobileDrawer.classList.toggle('open');
      const icon = mobileToggle.querySelector('svg');
      if (mobileDrawer.classList.contains('open')) {
        mobileToggle.setAttribute('aria-expanded', 'true');
      } else {
        mobileToggle.setAttribute('aria-expanded', 'false');
      }
    });

    // Close mobile drawer saat link diklik
    mobileDrawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
      });
    });
  }



  // 4. Contact Form Handling - Hubungkan WhatsApp & Email Langsung
  const contactForm = document.getElementById('consultationForm');
  const formSuccessAlert = document.getElementById('formSuccessAlert');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalBtnText = submitBtn.innerHTML;

      // Ambil nilai data formulir
      const fullName = document.getElementById('fullName')?.value.trim() || '-';
      const companyName = document.getElementById('companyName')?.value.trim() || '-';
      const workEmail = document.getElementById('workEmail')?.value.trim() || '-';
      const phoneNumber = document.getElementById('phoneNumber')?.value.trim() || '-';
      const serviceCategorySelect = document.getElementById('serviceCategory');
      const serviceCategoryText = serviceCategorySelect ? serviceCategorySelect.options[serviceCategorySelect.selectedIndex].text : '-';
      const projectBrief = document.getElementById('projectBrief')?.value.trim() || '-';

      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="animate-spin">
          <circle cx="12" cy="12" r="10" stroke-opacity="0.25"></circle>
          <path d="M12 2a10 10 0 0 1 10 10" stroke-linecap="round"></path>
        </svg>
        Mempersiapkan Pesan WhatsApp...
      `;

      // 1. Susun Pesan Rapi untuk WhatsApp
      const waMessage = 
`Halo Dope IT Solutions, saya ingin mengajukan permintaan konsultasi teknis:

*Data Klien:*
• Nama Lengkap: ${fullName}
• Perusahaan: ${companyName}
• Email: ${workEmail}
• No. HP / WhatsApp: ${phoneNumber}

*Kebutuhan Layanan:*
• Kategori: ${serviceCategoryText}

*Detail Kendala / Proyek:*
${projectBrief}

Mohon informasi ketersediaan jadwal konsultasi & penawaran. Terima kasih!`;

      // Target WhatsApp Resmi Dope IT Solutions
      const targetPhone = '6289605333747';
      const waUrl = `https://wa.me/${targetPhone}?text=${encodeURIComponent(waMessage)}`;

      if (formSuccessAlert) {
        formSuccessAlert.classList.add('success');
        formSuccessAlert.innerHTML = `<strong>Permintaan Disiapkan!</strong> Mengalihkan Anda langsung ke WhatsApp (+62 896-0533-3747)...`;
      }

      // Langsung Redirect ke WhatsApp resmi
      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnText;
        contactForm.reset();
        window.location.href = waUrl;
      }, 600);
    });
  }

  // 5. SEO Articles Modal Data & Handler
  const articlesData = {
    'arsitektur-jaringan': {
      title: 'Strategi Merancang Arsitektur Jaringan Kantor yang Cepat, Stabil, dan Skalabel',
      tag: 'Arsitektur Jaringan Perusahaan',
      readTime: '6 menit baca',
      content: `
        <h4 style="margin: 1.5rem 0 0.75rem; color: #0F172A; font-size: 1.25rem;">1. Tantangan Konektivitas di Era Transformasi Digital</h4>
        <p style="margin-bottom: 1rem; color: #475569; line-height: 1.7;">Pertumbuhan masif ekosistem IoT, penggunaan konferensi video beresolusi tinggi (4K/HD) tanpa jeda, serta ketergantungan penuh terhadap SaaS cloud menuntut infrastruktur jaringan enterprise yang tidak lagi sekadar "bisa terhubung", melainkan harus memiliki bandwidth deterministik tanpa hambatan.</p>

        <h4 style="margin: 1.5rem 0 0.75rem; color: #0F172A; font-size: 1.25rem;">2. Pentingnya Segmentasi Jaringan & VLAN</h4>
        <p style="margin-bottom: 1rem; color: #475569; line-height: 1.7;">Banyak kantor mengalami kelambatan karena broadcast traffic yang membanjiri subnet. Dengan memisahkan jalur lalu lintas tamu (Guest Wi-Fi), operasional staf harian, VoIP SIP gateway, dan server inti menggunakan Virtual LAN (VLAN), broadcast domain dapat dikontrol secara ketat sekaligus meningkatkan postur keamanan siber.</p>

        <h4 style="margin: 1.5rem 0 0.75rem; color: #0F172A; font-size: 1.25rem;">3. Standarisasi Perangkat Enterprise Grade</h4>
        <p style="margin-bottom: 1rem; color: #475569; line-height: 1.7;">Mengganti perangkat kelas rumahan (SOHO) dengan router core mikrotik/cisco serta switch manageable layer 2/3 memungkinkan implementasi Quality of Service (QoS), link aggregation (LACP), spanning tree protocol (STP) untuk anti-looping, serta pemantauan SNMP granular.</p>

        <h4 style="margin: 1.5rem 0 0.75rem; color: #0F172A; font-size: 1.25rem;">4. Peran Solutif Dope IT Solution</h4>
        <p style="margin-bottom: 1rem; color: #475569; line-height: 1.7;">Tim engineer Dope IT Solution melakukan audit topologi menyeluruh, pemetaan spectrum frekuensi wireless, instalasi perapian patch panel, hingga stress-test throughput agar jaringan perusahaan Anda siap menopang ekspansi bisnis bertahun-tahun ke depan.</p>
      `
    },
    'efisiensi-cloud': {
      title: 'Mengoptimalkan Performa & Kecepatan Akses Sistem Kantor dengan Infrastruktur Cloud Modern',
      tag: 'Cloud & CDN Modernization',
      readTime: '5 menit baca',
      content: `
        <h4 style="margin: 1.5rem 0 0.75rem; color: #0F172A; font-size: 1.25rem;">1. Kelemahan Arsitektur Server Konvensional</h4>
        <p style="margin-bottom: 1rem; color: #475569; line-height: 1.7;">Server on-premise single point of failure seringkali rentan terhadap downtime saat listrik padam, kerusakan storage fisik, lonjakan beban kerja tak terduga, dan biaya pemeliharaan pendingin (AC) serta konsumsi daya yang membengkak.</p>

        <h4 style="margin: 1.5rem 0 0.75rem; color: #0F172A; font-size: 1.25rem;">2. Akselerasi Global Melalui CDN & Edge Computing Cloudflare</h4>
        <p style="margin-bottom: 1rem; color: #475569; line-height: 1.7;">Dengan mengintegrasikan edge caching Cloudflare dan kompresi mutakhir (Brotli & Early Hints), aset statis dan request API perusahaan didistribusikan ke ratusan data center terdekat dari user, memangkas Time To First Byte (TTFB) hingga kurang dari 30ms.</p>

        <h4 style="margin: 1.5rem 0 0.75rem; color: #0F172A; font-size: 1.25rem;">3. Manajemen Backup Otomatis & Redundansi Multi-Region</h4>
        <p style="margin-bottom: 1rem; color: #475569; line-height: 1.7;">Strategi snapshot otomatis dan replikasi cloud terenkripsi memastikan pemulihan bencana (Disaster Recovery RPO/RTO) dapat dicapai dalam hitungan menit, menghilangkan potensi kerugian hilangnya database bisnis krusial.</p>

        <h4 style="margin: 1.5rem 0 0.75rem; color: #0F172A; font-size: 1.25rem;">4. Implementasi Terukur Bersama Dope IT Solution</h4>
        <p style="margin-bottom: 1rem; color: #475569; line-height: 1.7;">Kami merancang migrasi bertahap tanpa zero business downtime. Mulai dari audit arsitektur database, setup reverse proxy & security rules (WAF/DDoS Shield), hingga pemantauan utilisasi CPU/RAM 24/7.</p>
      `
    }
  };

  const articleModal = document.getElementById('articleModal');
  const modalTitle = document.getElementById('modalArticleTitle');
  const modalTag = document.getElementById('modalArticleTag');
  const modalReadTime = document.getElementById('modalArticleReadTime');
  const modalBody = document.getElementById('modalArticleBody');
  const modalCloseBtn = document.getElementById('modalCloseBtn');

  document.querySelectorAll('.open-article-trigger').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const articleKey = trigger.getAttribute('data-article');
      const data = articlesData[articleKey];
      if (data) {
        modalTitle.textContent = data.title;
        modalTag.textContent = data.tag;
        modalReadTime.textContent = data.readTime;
        modalBody.innerHTML = data.content;
        articleModal.classList.add('open');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  if (modalCloseBtn && articleModal) {
    modalCloseBtn.addEventListener('click', () => {
      articleModal.classList.remove('open');
      document.body.style.overflow = '';
    });

    articleModal.addEventListener('click', (e) => {
      if (e.target === articleModal) {
        articleModal.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  }

  // Escape key to close modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && articleModal && articleModal.classList.contains('open')) {
      articleModal.classList.remove('open');
      document.body.style.overflow = '';
    }
  });
});
